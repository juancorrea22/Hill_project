const logros = [
    { id: "primer-paso", titulo: "Primer Paso", desc: "Completaste tu primer inicio de sesión en la app.", icon: "fas fa-shoe-prints", estado: "success" },
    { id: "explorador", titulo: "Explorador", desc: "Navegaste por todas las secciones del menú.", icon: "fas fa-compass", estado: "accent" },
    { id: "coleccionista", titulo: "Coleccionista", desc: "Has desbloqueado más de 10 logros.", icon: "fas fa-trophy", estado: "warning" },
    { id: "maestro", titulo: "Maestro", desc: "Completaste todos los tutoriales básicos.", icon: "fas fa-medal", estado: "success" },
    { id: "constante", titulo: "Constante", desc: "Has usado la app 7 días seguidos.", icon: "fas fa-hourglass-half", estado: "accent" },
    { id: "veterano", titulo: "Veterano", desc: "Alcanza 100 días de uso en la app.", icon: "fas fa-user-shield", estado: "warning" },
    { id: "desafiante", titulo: "Desafiante", desc: "Completa 5 retos semanales.", icon: "fas fa-bullseye", estado: "warning" },
    { id: "estrella", titulo: "Estrella", desc: "Alcanzaste una puntuación perfecta en un desafío.", icon: "fas fa-star", estado: "success" }
];

let currentLogro = null;
let filter = "all"; // filtro actual

// Renderizar logros
function renderLogros() {
    const container = document.getElementById("logros-container");
    container.innerHTML = "";
    logros
    .filter(l => filter === "all" || l.estado === filter)
    .forEach(l => {
        let badgeClass = "hill-badge--warning", badgeText = "Pendiente";
        if (l.estado === "success") { badgeClass = "hill-badge--success"; badgeText = "Completado"; }
        if (l.estado === "accent") { badgeClass = "hill-badge--accent"; badgeText = "En progreso"; }

        container.innerHTML += `
        <div class="hill-col-4">
            <div class="hill-card hill-card--interactive" onclick="openModal('${l.id}')">
            <i class="${l.icon} fa-2x mb-2"></i>
            <h2 class="text-xl mb-2">${l.titulo}</h2>
            <p>${l.desc}</p>
            <span class="hill-badge ${badgeClass} mt-2">${badgeText}</span>
            </div>
        </div>
        `;
    });

    updateProgress();
}

// Cambiar filtro
function setFilter(newFilter) {
    filter = newFilter;
    renderLogros();
}

// Actualizar barra de progreso
function updateProgress() {
    const total = logros.length;
    const completados = logros.filter(l => l.estado === "success").length;
    const porcentaje = Math.round((completados / total) * 100);

    document.getElementById("progress-bar").style.width = porcentaje + "%";
    document.getElementById("progress-text").innerText = `${completados} de ${total} logros completados (${porcentaje}%)`;
}

// Abrir modal
function openModal(id) {
    currentLogro = logros.find(l => l.id === id);
    document.getElementById("modal-title").innerText = currentLogro.titulo;
    document.getElementById("modal-description").innerText = currentLogro.desc;

    let badge = document.getElementById("modal-badge");
    badge.className = "hill-badge mt-2"; 

    if(currentLogro.estado === "success") {
    badge.classList.add("hill-badge--success");
    badge.innerText = "Completado";
    }
    else if(currentLogro.estado === "accent") {
    badge.classList.add("hill-badge--accent");
    badge.innerText = "En progreso";
    }
    else {
    badge.classList.add("hill-badge--warning");
    badge.innerText = "Pendiente";
    }

    document.getElementById("logro-modal").style.display = "flex";
}

// Cerrar modal
function closeModal() {
    document.getElementById("logro-modal").style.display = "none";
}

// Inicialización
renderLogros();