function obtenerFechaHoraActual() {
  const ahora = new Date();

  // Hora: 
  const horas = String(ahora.getHours()).padStart(2, "0");
  const minutos = String(ahora.getMinutes()).padStart(2, "0");
  const segundos = String(ahora.getSeconds()).padStart(2, "0");
  const hora = `${horas}:${minutos}:${segundos}`;

  // Fecha: 
  const diasSemana = ["domingo", "lunes", "martes", "miércoles", "jueves", "viernes", "sábado"];
  const meses = ["enero", "febrero", "marzo", "abril", "mayo", "junio", 
                 "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre"];

  const diaSemana = diasSemana[ahora.getDay()];
  const dia = ahora.getDate();
  const mes = meses[ahora.getMonth()];
  const año = ahora.getFullYear();
  const fecha = `${diaSemana}, ${dia} de ${mes} de ${año}`;

  return `${fecha} ${hora}`;
}

// actualizar la hora cada segundo: 
function actualizarFechaHora() {
  document.getElementById("hora").textContent = obtenerFechaHoraActual();
}

setInterval(actualizarFechaHora, 1000);
actualizarFechaHora();
