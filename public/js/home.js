document.addEventListener('DOMContentLoaded', () => {
  // VERIFICAR SI EL USUARIO ESTÁ LOGUEADO
  const token = localStorage.getItem('token');
  const user = localStorage.getItem('user');
  
  if (!token || !user) {
    window.location.href = '../pages/login.html';
    return;
  }
  
  const userData = JSON.parse(user);
  
  console.log('Usuario logueado:', userData);
  
  loadTasks(userData.tareas);
});

function loadTasks(tareas) {
  if (!tareas || tareas.length === 0) {
    console.log('No hay tareas');
    return;
  }
  
  const tareasCompletadas = tareas.filter(t => t.completed);
  const tareasPendientes = tareas.filter(t => !t.completed);
  
  // TAREAS PENDIENTES
  const listaPendientes = document.querySelector('.task-section:first-child .task-list');
  listaPendientes.innerHTML = '';
  
  if (tareasPendientes.length === 0) {
    listaPendientes.innerHTML = '<p>¡No tienes tareas pendientes!</p>';
  } else {
    tareasPendientes.forEach(tarea => {
      const taskItem = document.createElement('div');
      taskItem.className = 'task-item';
      taskItem.innerHTML = `
        <div class="task-icon pending">✕</div>
        <div class="task-text">${tarea.name}: ${tarea.description}</div>
      `;
      listaPendientes.appendChild(taskItem);
    });
  }
  
  // TAREAS COMPLETADAS
  const listaCompletadas = document.querySelector('.task-section:last-child .task-list');
  listaCompletadas.innerHTML = '';
  
  if (tareasCompletadas.length === 0) {
    listaCompletadas.innerHTML = '<p>No tienes tareas completadas aún.</p>';
  } else {
    tareasCompletadas.forEach(tarea => {
      const taskItem = document.createElement('div');
      taskItem.className = 'task-item';
      taskItem.innerHTML = `
        <div class="task-icon completed">✓</div>
        <div class="task-text">${tarea.name}: ${tarea.description}</div>
      `;
      listaCompletadas.appendChild(taskItem);
    });
  }
}