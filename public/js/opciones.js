// Mostrar sección específica
function showSection(sectionName) {
    // Ocultar todas las secciones
    const sections = document.querySelectorAll('.section');
    sections.forEach(section => {
        section.style.display = 'none';
    });
    
    // Mostrar la sección seleccionada
    const targetSection = document.getElementById(sectionName + '-section');
    if (targetSection) {
        targetSection.style.display = 'block';
    }
    
    // Actualizar sidebar activo
    const sidebarItems = document.querySelectorAll('.sidebar-item');
    sidebarItems.forEach(item => {
        item.classList.remove('active');
    });
    
    // Activar el item correspondiente
    event.currentTarget.classList.add('active');
}

// Cambiar foto de perfil
function changePhoto() {
    // Crear input file temporal
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = 'image/*';
    
    input.onchange = function(e) {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = function(event) {
                document.getElementById('avatar-img').src = event.target.result;
            };
            reader.readAsDataURL(file);
            
            // Aquí guardarías la imagen en tu servidor
            console.log('Imagen seleccionada:', file.name);
        }
    };
    
    input.click();
}

// Abrir modal
function openModal(modalType) {
    const modal = document.getElementById(modalType + '-modal');
    if (modal) {
        modal.classList.add('active');
    }
}

// Cerrar modal
function closeModal(modalType) {
    const modal = document.getElementById(modalType + '-modal');
    if (modal) {
        modal.classList.remove('active');
    }
}

// Cerrar modal al hacer click fuera
document.querySelectorAll('.modal').forEach(modal => {
    modal.addEventListener('click', function(e) {
        if (e.target === this) {
            this.classList.remove('active');
        }
    });
});

// Guardar nombre de usuario
function saveUsername() {
    const newUsername = document.getElementById('new-username').value.trim();
    
    if (!newUsername) {
        alert('Por favor ingresa un nombre de usuario');
        return;
    }
    
    if (newUsername.length < 3) {
        alert('El nombre de usuario debe tener al menos 3 caracteres');
        return;
    }
    
    // Actualizar el nombre mostrado
    document.getElementById('display-username').textContent = newUsername;
    
    // Limpiar el input
    document.getElementById('new-username').value = '';
    
    // Cerrar el modal
    closeModal('username');
    
    // Aquí guardarías el cambio en tu base de datos
    console.log('Nuevo nombre de usuario:', newUsername);
    alert('Nombre de usuario actualizado correctamente');
}

// Guardar contraseña
function savePassword() {
    const currentPassword = document.getElementById('current-password').value;
    const newPassword = document.getElementById('new-password').value;
    const confirmPassword = document.getElementById('confirm-password').value;
    
    // Validaciones
    if (!currentPassword || !newPassword || !confirmPassword) {
        alert('Por favor completa todos los campos');
        return;
    }
    
    if (newPassword.length < 6) {
        alert('La contraseña debe tener al menos 6 caracteres');
        return;
    }
    
    if (newPassword !== confirmPassword) {
        alert('Las contraseñas no coinciden');
        return;
    }
    
    // Limpiar los inputs
    document.getElementById('current-password').value = '';
    document.getElementById('new-password').value = '';
    document.getElementById('confirm-password').value = '';
    
    // Cerrar el modal
    closeModal('password');
    
    // Aquí validarías la contraseña actual y guardarías la nueva en tu base de datos
    console.log('Contraseña actualizada');
    alert('Contraseña actualizada correctamente');
}