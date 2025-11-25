'use client';

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';
import { Line } from 'react-chartjs-2';
import styles from './Pages.module.css';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

interface RegistroPeso {
    fecha: string;
    peso: number;
}

interface DatosUsuario {
    pesos: RegistroPeso[];
    diasDesdeCreacion: number;
    misionesCompletadas: number;
}

export default function ProgresoPage() {
    const [datosUsuario, setDatosUsuario] = useState<DatosUsuario | null>(null);
    const [nuevoPeso, setNuevoPeso] = useState('');
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE || 'http://localhost:4000';

    useEffect(() => {
        const cargarDatos = async () => {
            try {
                setLoading(true);
                const userStorage = localStorage.getItem('user');

                if (!userStorage) {
                    setError('No se encontró la información del usuario');
                    setLoading(false);
                    return;
                }

                const user = JSON.parse(userStorage);
                const registroPeso = user.registroPeso || [];
                const diasDesdeCreacion = calcularDiasDesdeCreacion(user.createdAt);

                setDatosUsuario({
                    pesos: registroPeso,
                    diasDesdeCreacion,
                    misionesCompletadas: user.tareas?.filter((t: any) => t.completed).length || 0,
                });
            } catch (err) {
                console.error('Error cargando datos:', err);
                setError('Error al cargar los datos del usuario');
            } finally {
                setLoading(false);
            }
        };

        cargarDatos();
    }, []);

    const calcularDiasDesdeCreacion = (fecha: string | { $date: { $numberLong: string } }): number => {
        let fechaObjeto: Date;

        if (typeof fecha === 'object' && '$date' in fecha) {
            const timestamp = parseInt((fecha.$date as any).$numberLong);
            fechaObjeto = new Date(timestamp);
        } else {
            fechaObjeto = new Date(fecha);
        }

        const hoy = new Date();
        const diferencia = hoy.getTime() - fechaObjeto.getTime();
        return Math.floor(diferencia / (1000 * 60 * 60 * 24));
    };

    const calcularDiasDesdeInicio = (fechaInicio: string, fechaActual: string): number => {
        const inicio = new Date(fechaInicio);
        const actual = new Date(fechaActual);
        const diferencia = actual.getTime() - inicio.getTime();
        return Math.floor(diferencia / (1000 * 60 * 60 * 24));
    };

    const obtenerFechaActual = (): string => {
        const hoy = new Date();
        return hoy.toISOString().split('T')[0];
    };

    const formatearFecha = (fecha: string): string => {
        const [año, mes, dia] = fecha.split('-');
        return `${dia}/${mes}/${año}`;
    };

    const agregarPeso = async () => {
        if (!nuevoPeso || parseFloat(nuevoPeso) <= 0) {
            alert('Por favor ingresa un peso válido');
            return;
        }

        if (!datosUsuario) return;

        const fechaActual = obtenerFechaActual();
        const yaExiste = datosUsuario.pesos.some((p) => p.fecha === fechaActual);

        if (yaExiste) {
            alert('Ya existe un registro para el día de hoy');
            return;
        }

        const nuevoRegistro: RegistroPeso = {
            fecha: fechaActual,
            peso: parseFloat(nuevoPeso),
        };

        const pesosActualizados = [...datosUsuario.pesos, nuevoRegistro];

        setDatosUsuario({
            ...datosUsuario,
            pesos: pesosActualizados,
        });

        setNuevoPeso('');

        // Aquí guardarías en tu base de datos
        try {
            const userStorage = localStorage.getItem('user');
            if (userStorage) {
                const user = JSON.parse(userStorage);
                const userId = user._id || user.id;

                await fetch(`${API_BASE_URL}/api/users/${userId}`, {
                    method: 'PUT',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ registroPeso: pesosActualizados }),
                });

                // Actualizar el localStorage
                const userActualizado = { ...user, registroPeso: pesosActualizados };
                localStorage.setItem('user', JSON.stringify(userActualizado));
            }
        } catch (err) {
            console.error('Error guardando peso:', err);
        }
    };

    if (loading) {
        return <div className={styles.loadingMessage}>Cargando datos...</div>;
    }

    if (!datosUsuario) {
        return <div className={styles.errorMessage}>{error || 'Error cargando datos'}</div>;
    }

    const ultimoPeso = datosUsuario.pesos.length > 0
        ? datosUsuario.pesos[datosUsuario.pesos.length - 1].peso
        : 0;

    const fechaPrimerRegistro = datosUsuario.pesos.length > 0
        ? datosUsuario.pesos[0].fecha
        : obtenerFechaActual();

    const dias = datosUsuario.pesos.map((registro) =>
        calcularDiasDesdeInicio(fechaPrimerRegistro, registro.fecha)
    );

    const pesos = datosUsuario.pesos.map((d) => d.peso);

    const chartData = {
        labels: dias,
        datasets: [
            {
                label: 'Peso (kg)',
                data: pesos,
                borderColor: '#4a7c3a',
                backgroundColor: 'rgba(74, 124, 58, 0.1)',
                borderWidth: 3,
                tension: 0.4,
                pointRadius: 5,
                pointBackgroundColor: '#4a7c3a',
                pointBorderColor: '#fff',
                pointBorderWidth: 2,
                pointHoverRadius: 7,
            },
        ],
    };

    const chartOptions = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                display: false,
            },
            tooltip: {
                backgroundColor: 'rgba(0, 0, 0, 0.8)',
                padding: 12,
                titleFont: {
                    size: 14,
                },
                bodyFont: {
                    size: 13,
                },
                callbacks: {
                    title: (context: any) => {
                        return 'Día ' + context[0].label;
                    },
                    label: (context: any) => {
                        const index = context.dataIndex;
                        const fecha = datosUsuario.pesos[index].fecha;
                        return [
                            'Peso: ' + context.parsed.y + ' kg',
                            'Fecha: ' + formatearFecha(fecha),
                        ];
                    },
                },
            },
        },
        scales: {
            x: {
                title: {
                    display: true,
                    text: 'Días',
                    color: '#2d5016',
                    font: {
                        size: 14,
                        weight: 'bold',
                    },
                },
                grid: {
                    color: 'rgba(0, 0, 0, 0.05)',
                },
            },
            y: {
                title: {
                    display: true,
                    text: 'kg',
                    color: '#2d5016',
                    font: {
                        size: 14,
                        weight: 'bold',
                    },
                },
                grid: {
                    color: 'rgba(0, 0, 0, 0.05)',
                },
                beginAtZero: false,
            },
        },
    };

    return (
        <div className={styles.pageContainer}>
            {/* Barra de navegación */}
            <nav className={styles.navigation}>
                <a href="/notificaciones" className={styles.navButton}>
                    <div className={styles.navIcon}>
                        <Image src="/Icono_campana_hill.png" alt="Campana" width={40} height={40} />
                    </div>
                    <span className={styles.navLabel}>Campana</span>
                </a>

                <a href="/progreso" className={styles.navButton}>
                    <div className={styles.navIcon}>
                        <Image src="/icono_progreso.png" alt="Progreso" width={40} height={40} />
                    </div>
                    <span className={styles.navLabel}>Progreso</span>
                </a>

                <a href="/home" className={styles.navButton}>
                    <div className={styles.navIcon}>
                        <Image src="/Hill_imagen_logo.jpg" alt="Hill" width={40} height={40} />
                    </div>
                    <span className={styles.navLabel}>Hill</span>
                </a>

                <a href="/logros" className={styles.navButton}>
                    <div className={styles.navIcon}>
                        <Image src="/Icono_logro.png" alt="Logros" width={40} height={40} />
                    </div>
                    <span className={styles.navLabel}>Logros</span>
                </a>

                <a href="/opciones" className={styles.navButton}>
                    <div className={styles.navIcon}>
                        <Image src="/icono_opciones.png" alt="Opciones" width={40} height={40} />
                    </div>
                    <span className={styles.navLabel}>Opciones</span>
                </a>
            </nav>

            <div className={styles.titleContainer}>
                <h1>Progreso</h1>
            </div>

            <div className={styles.content}>
                {/* Columna izquierda */}
                <div className={styles.leftColumn}>
                    <div className={styles.pesoCard}>
                        <h2>Peso Kg</h2>
                    </div>

                    <div className={styles.inputCard}>
                        <label>Ingresar Nuevo peso:</label>
                        <div className={styles.inputGroup}>
                            <input
                                type="number"
                                value={nuevoPeso}
                                onChange={(e) => setNuevoPeso(e.target.value)}
                                placeholder="Ej: 85"
                                min="0"
                                step="0.1"
                            />
                            <button onClick={agregarPeso}>Agregar</button>
                        </div>
                    </div>

                    <div className={styles.infoCard}>
                        <p>Ultimo Peso registrado:</p>
                        <p className={styles.pesoValor}>{ultimoPeso} Kg</p>
                    </div>
                </div>

                {/* Columna central */}
                <div className={styles.centerColumn}>
                    <div className={styles.graficaCard}>
                        <h2>Progreso del Peso</h2>
                        {datosUsuario.pesos.length > 0 ? (
                            <Line data={chartData} options={chartOptions as any} />
                        ) : (
                            <p className={styles.noData}>No hay datos de peso registrados</p>
                        )}
                    </div>
                </div>

                {/* Columna derecha */}
                <div className={styles.rightColumn}>
                    <div className={styles.estadisticasCard}>
                        <h2>Estadisticas</h2>
                    </div>

                    <div className={styles.statCard}>
                        <p>
                            Tiempo desde creación: <span>{datosUsuario.diasDesdeCreacion}</span> días
                        </p>
                    </div>

                    <div className={styles.statCard}>
                        <p>
                            Cantidad de misiones completadas: <span>{datosUsuario.misionesCompletadas}</span>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}