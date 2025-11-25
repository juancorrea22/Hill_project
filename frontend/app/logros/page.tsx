'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import styles from './Pages.module.css';

interface LogroData {
  logro: {
    name: string;
    rango: 'platino' | 'diamante' | 'oro' | 'plata' | 'bronce';
    description: string;
  };
  fecha: string;
}

interface Logro {
  _id?: string;
  name: string;
  rango: 'platino' | 'diamante' | 'oro' | 'plata' | 'bronce';
  description: string;
}

const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE || 'http://localhost:4000';

const getRangoIcon = (rango: string): string => {
  const iconMap: { [key: string]: string } = {
    platino: '/icono_medalla_de_oro.png',
    diamante: '/icono_medalla_de_oro.png',
    oro: '/icono_medalla_de_oro.png',
    plata: '/icono_medalla_de_plata.png',
    bronce: '/icono_medalla_de_bronce.png',
  };
  return iconMap[rango] || '/icono_medalla_de_oro.png';
};

export default function LogrosPage() {
  const [logrosObtenidos, setLogrosObtenidos] = useState<LogroData[]>([]);
  const [todosLosLogros, setTodosLosLogros] = useState<Logro[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchLogros = async () => {
      try {
        setLoading(true);
        setError(null);

        // Obtener el usuario del localStorage
        const userStorage = localStorage.getItem('user');
        
        if (!userStorage) {
          setError('No se encontró la información del usuario. Por favor, inicia sesión.');
          setLoading(false);
          return;
        }

        const user = JSON.parse(userStorage);
        
        // Los logros obtenidos vienen directamente del usuario
        setLogrosObtenidos(user.logros || []);

        // Obtener todos los logros disponibles desde la API
        const logrosResponse = await fetch(`${API_BASE_URL}/api/logros`);
        if (logrosResponse.ok) {
          const logrosData = await logrosResponse.json();
          setTodosLosLogros(logrosData || []);
        } else {
          throw new Error('Error al obtener todos los logros');
        }
      } catch (err) {
        const errorMessage = err instanceof Error ? err.message : 'Error desconocido';
        setError(errorMessage);
        console.error('Error fetching logros:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchLogros();
  }, []);

  const LogroItem = ({ logro, isObtained = false }: { logro: LogroData | Logro; isObtained?: boolean }) => {
    const displayLogro = isObtained 
      ? (logro as LogroData).logro 
      : (logro as Logro);
    
    const fecha = isObtained ? (logro as LogroData).fecha : undefined;

    return (
      <div className={styles.logroItem}>
        <div className={styles.logroInfo}>
          <div className={styles.logroImageWrapper}>
            <Image 
              src={getRangoIcon(displayLogro.rango)} 
              alt={`icono ${displayLogro.rango}`}
              width={40} 
              height={40}
              priority={false}
            />
          </div>
          <div className={styles.logroTexto}>
            <span>{displayLogro.name}</span>
            <p className={styles.logroDesc}>{displayLogro.description}</p>
            {fecha && <p className={styles.logroFecha}>Obtenido: {new Date(fecha).toLocaleDateString('es-ES')}</p>}
            <span className={styles.logroRango}>{displayLogro.rango.charAt(0).toUpperCase() + displayLogro.rango.slice(1)}</span>
          </div>
        </div>
        <div className={styles.logroIcono}>↗</div>
      </div>
    );
  };

  return (
    <div className={styles.appContainer}>
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

      <h1 className={styles.titulo}>Logros</h1>

      {error && <div className={styles.errorMessage}>{error}</div>}

      {loading ? (
        <div className={styles.loadingMessage}>Cargando logros...</div>
      ) : (
        <div className={styles.logrosContainer}>
          <div className={styles.logrosColumna}>
            <h2>Logros Obtenidos</h2>
            <div className={styles.logrosList}>
              {logrosObtenidos && logrosObtenidos.length > 0 ? (
                logrosObtenidos.map((logro, idx) => (
                  <LogroItem key={idx} logro={logro} isObtained={true} />
                ))
              ) : (
                <p className={styles.noLogros}>No hay logros obtenidos aún</p>
              )}
            </div>
          </div>

          <div className={styles.logrosColumna}>
            <h2>Todos los logros</h2>
            <div className={styles.logrosList}>
              {todosLosLogros && todosLosLogros.length > 0 ? (
                todosLosLogros.map((logro) => (
                  <LogroItem key={logro._id} logro={logro} isObtained={false} />
                ))
              ) : (
                <p className={styles.noLogros}>No hay logros disponibles</p>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}