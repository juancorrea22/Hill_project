function showSection(sectionName) {
    const sections = document.querySelectorAll('.section');
    sections.forEach(section => {
        section.style.display = 'none';
    });
    
    const targetSection = document.getElementById(sectionName + '-section');
    if (targetSection) {
        targetSection.style.display = 'block';
    }
    
    const sidebarItems = document.querySelectorAll('.sidebar-item');
    sidebarItems.forEach(item => {
        item.classList.remove('active');
    });
    
    event.currentTarget.classList.add('active');
}

function changePhoto() {
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

function openModal(modalType) {
    const modal = document.getElementById(modalType + '-modal');
    if (modal) {
        modal.classList.add('active');
    }
}

function closeModal(modalType) {
    const modal = document.getElementById(modalType + '-modal');
    if (modal) {
        modal.classList.remove('active');
    }
}

document.querySelectorAll('.modal').forEach(modal => {
    modal.addEventListener('click', function(e) {
        if (e.target === this) {
            this.classList.remove('active');
        }
    });
});

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
    
    document.getElementById('display-username').textContent = newUsername;
    
    document.getElementById('new-username').value = '';
    
    closeModal('username');
    
    // FALTA FUARDAR LO CAMBIOS EN EL MONGODB
    console.log('Nuevo nombre de usuario:', newUsername);
    alert('Nombre de usuario actualizado correctamente');
}

function savePassword() {
    const currentPassword = document.getElementById('current-password').value;
    const newPassword = document.getElementById('new-password').value;
    const confirmPassword = document.getElementById('confirm-password').value;
    
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
    
    document.getElementById('current-password').value = '';
    document.getElementById('new-password').value = '';
    document.getElementById('confirm-password').value = '';
    
    closeModal('password');
    
    // FALTA GUARDAR LOS CAMBIOS EN EL MONGODB
    console.log('Contraseña actualizada');
    alert('Contraseña actualizada correctamente');
}