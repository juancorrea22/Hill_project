// Datos de ejemplo (puedes modificar nombres e imágenes)
const logrosObtenidos = [
  { icon: "../img/icono_medalla_de_oro.png", titulo: "Logro 1", desc: "Descripción del logro" },
  { icon: "../img/icono_medalla_de_plata.png", titulo: "Logro 2", desc: "Descripción del logro" },
  { icon: "../img/icono_medalla_de_bronce.png", titulo: "Logro 3", desc: "Descripción del logro" }
];

const todosLosLogros = [
  { icon: "../img/icono_medalla_de_oro.png", titulo: "Logro 4", desc: "Descripción del logro" },
  { icon: "../img/icono_medalla_de_oro.png", titulo: "Logro 5", desc: "Descripción del logro" },
  { icon: "../img/icono_medalla_de_oro.png", titulo: "Logro 6", desc: "Descripción del logro" }
];

// Renderiza los logros en pantalla
function renderLogros() {
  const obtenidosContainer = document.getElementById("logros-obtenidos");
  const todosContainer = document.getElementById("todos-los-logros");

  obtenidosContainer.innerHTML = "";
  todosContainer.innerHTML = "";

  logrosObtenidos.forEach(l => {
    obtenidosContainer.innerHTML += `
      <div class="logro-item">
        <div class="logro-info">
          <img src="${l.icon}" alt="icono logro">
          <div class="logro-texto">
            <span>${l.titulo}</span>
            ${l.desc}
          </div>
        </div>
        <div class="logro-icono">↗</div>
      </div>
    `;
  });

  todosLosLogros.forEach(l => {
    todosContainer.innerHTML += `
      <div class="logro-item">
        <div class="logro-info">
          <img src="${l.icon}" alt="icono logro">
          <div class="logro-texto">
            <span>${l.titulo}</span>
            ${l.desc}
          </div>
        </div>
        <div class="logro-icono">↗</div>
      </div>
    `;
  });
}

// Inicializa al cargar la página
renderLogros();
