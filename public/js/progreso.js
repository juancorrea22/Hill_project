let datosUsuario = {
    pesos: [
        { fecha: '2024-07-15', peso: 96 },  // Primer registro - Día 0
        { fecha: '2024-08-14', peso: 92 },  // 30 días después
        { fecha: '2024-09-13', peso: 88 },  // 60 días después del inicio
        { fecha: '2024-10-13', peso: 87 },  // 90 días después
        { fecha: '2024-11-12', peso: 86 },  // 120 días después
        { fecha: '2024-12-12', peso: 85 }   // 150 días después
    ],
    diasDesdeCreacion: 90,
    misionesCompletadas: 57
};

let chart;

function calcularDiasDesdeInicio(fechaInicio, fechaActual) {
    const inicio = new Date(fechaInicio);
    const actual = new Date(fechaActual);
    const diferencia = actual - inicio;
    return Math.floor(diferencia / (1000 * 60 * 60 * 24));
}

function obtenerFechaActual() {
    const hoy = new Date();
    return hoy.toISOString().split('T')[0];
}

function inicializar() {
    crearGrafica();
    actualizarEstadisticas();
}

function crearGrafica() {
    const ctx = document.getElementById('pesoChart').getContext('2d');
    
    const fechaPrimerRegistro = datosUsuario.pesos[0].fecha;
    
    const dias = datosUsuario.pesos.map(registro => 
        calcularDiasDesdeInicio(fechaPrimerRegistro, registro.fecha)
    );
    
    const pesos = datosUsuario.pesos.map(d => d.peso);
    
    chart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: dias,
            datasets: [{
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
                pointHoverRadius: 7
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    display: false
                },
                tooltip: {
                    backgroundColor: 'rgba(0, 0, 0, 0.8)',
                    padding: 12,
                    titleFont: {
                        size: 14
                    },
                    bodyFont: {
                        size: 13
                    },
                    callbacks: {
                        title: function(context) {
                            return 'Día ' + context[0].label;
                        },
                        label: function(context) {
                            const index = context.dataIndex;
                            const fecha = datosUsuario.pesos[index].fecha;
                            return [
                                'Peso: ' + context.parsed.y + ' kg',
                                'Fecha: ' + formatearFecha(fecha)
                            ];
                        }
                    }
                }
            },
            scales: {
                x: {
                    title: {
                        display: true,
                        text: 'Días',
                        color: '#2d5016',
                        font: {
                            size: 14,
                            weight: 'bold'
                        }
                    },
                    grid: {
                        color: 'rgba(0, 0, 0, 0.05)'
                    }
                },
                y: {
                    title: {
                        display: true,
                        text: 'kg',
                        color: '#2d5016',
                        font: {
                            size: 14,
                            weight: 'bold'
                        }
                    },
                    grid: {
                        color: 'rgba(0, 0, 0, 0.05)'
                    },
                    beginAtZero: false
                }
            }
        }
    });
}

function formatearFecha(fecha) {
    const [año, mes, dia] = fecha.split('-');
    return `${dia}/${mes}/${año}`;
}

function actualizarEstadisticas() {
    const ultimoPeso = datosUsuario.pesos[datosUsuario.pesos.length - 1].peso;
    document.getElementById('ultimoPeso').textContent = ultimoPeso + ' Kg';
    document.getElementById('diasCreacion').textContent = datosUsuario.diasDesdeCreacion;
    document.getElementById('misionesCompletadas').textContent = datosUsuario.misionesCompletadas;
}

function agregarPeso() {
    const input = document.getElementById('nuevoPeso');
    const nuevoPeso = parseFloat(input.value);
    
    if (!nuevoPeso || nuevoPeso <= 0) {
        alert('Por favor ingresa un peso válido');
        return;
    }
    
    const fechaActual = obtenerFechaActual();
    
    const yaExiste = datosUsuario.pesos.some(p => p.fecha === fechaActual);
    if (yaExiste) {
        alert('Ya existe un registro para el día de hoy');
        return;
    }
    
    datosUsuario.pesos.push({
        fecha: fechaActual,
        peso: nuevoPeso
    });
    
    // Calcular días desde el primer registro
    const fechaPrimerRegistro = datosUsuario.pesos[0].fecha;
    const diasTranscurridos = calcularDiasDesdeInicio(fechaPrimerRegistro, fechaActual);
    
    // Actualizar la gráfica
    chart.data.labels.push(diasTranscurridos);
    chart.data.datasets[0].data.push(nuevoPeso);
    chart.update();
    
    // Actualizar el último peso mostrado
    document.getElementById('ultimoPeso').textContent = nuevoPeso + ' Kg';
    
    // Limpiar el input
    input.value = '';
    
    // Aquí guardarías los datos en tu base de datos
    console.log('Nuevo peso agregado:', { 
        fecha: fechaActual, 
        peso: nuevoPeso,
        diasDesdeInicio: diasTranscurridos 
    });
}

// INICIALIZAR
window.addEventListener('load', inicializar);