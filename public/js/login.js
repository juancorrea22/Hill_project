document.querySelector('.hill-form').addEventListener('submit', async (e) => {
  e.preventDefault();

  const name = document.querySelector('#username').value;
  const password = document.querySelector('#password').value;

  try {
    const response = await fetch('http://localhost:4000/api/v1/auth/login/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, password })
    });

    if (response.ok) {
      const data = await response.json();
      console.log('Login exitoso:', data);
      
      // GUARDAR TOKEN Y DATOS DEL USUARIO
      localStorage.setItem('token', data.token); // TOKEN
      localStorage.setItem('user', JSON.stringify(data.user)); // DATOS DEL USUARIO
      
      window.location.href = '../pages/home.html';
      
    } else {
      document.querySelector('.hill-form-error').style.display = 'block';
    }

  } catch (error) {
    console.error('Error en el login:', error);
    document.querySelector('.hill-form-error').style.display = 'block';
  }
});