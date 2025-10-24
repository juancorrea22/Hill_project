import React, { useState } from "react";
import "../styles/pages.css";
import "../styles/layout.css";
import "../styles/components.css";
import "../styles/variables.css";

const Login: React.FC =     () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:4000/api/auth/login/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name: username, password }),
      });

      if (response.ok) {
        const data = await response.json();
        console.log("Login exitoso:", data);

        // GUARDAR TOKEN Y DATOS DEL USUARIO
        localStorage.setItem("token", data.token);
        localStorage.setItem("user", JSON.stringify(data.user));

        // Redirigir al home (en React Router)
        window.location.href = "/home";
      } else {
        setError(true);
      }
    } catch (err) {
      console.error("Error en el login:", err);
      setError(true);
    }
  };

  return (
    <main className="hill-login-container hill-login-page">
      <div className="hill-login__image">
        <img
          src="/login-image.jpg"
          alt="hábitos saludables"
          className="hill-image"
        />
      </div>

      <div className="hill-login__form-container">
        <div className="hill-login__logo">
          <img
            src="/Hill_imagen_logo.jpg"
            alt="logo hill"
            className="hill-logo"
          />
        </div>

        <div className="hill-login__form">
          <h2 className="hill-login__title">Iniciar Sesión</h2>

          <form className="hill-form" onSubmit={handleSubmit}>
            <div className="hill-form-group">
              <label htmlFor="username" className="hill-form-label">
                Nombre de usuario
              </label>
              <input
                type="text"
                id="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="hill-form-input"
                required
              />
            </div>

            <div className="hill-form-group">
              <label htmlFor="password" className="hill-form-label">
                Contraseña
              </label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="hill-form-input"
                required
              />
            </div>

            {error && (
              <div className="hill-form-error">
                Nombre de usuario o contraseña incorrectos
              </div>
            )}

            <button
              type="submit"
              className="hill-btn hill-btn--primary hill-btn--full-width"
            >
              Iniciar Sesión
            </button>
          </form>

          <div className="hill-login__links">
            <a href="/forgotPassword" className="hill-login__link">
              ¿Olvidaste tu contraseña?
            </a>
            <a href="/signIn" className="hill-login__link">
              Registrarse
            </a>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Login;
