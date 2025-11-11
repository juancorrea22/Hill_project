'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import Image from "next/image";
import styles from "../../src/styles/pages.module.css";

export default function LoginPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);
  const router = useRouter();

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError(false);

    const API = process.env.NEXT_PUBLIC_API_BASE ?? 'http://localhost:4000';
    try {
      const response = await fetch(`${API}/api/auth/login/`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name: username, password }),
      });

      if (response.ok) {
        const data = await response.json();
        if (data.token) localStorage.setItem('token', data.token);
        if (data.user) localStorage.setItem('user', JSON.stringify(data.user));
        router.push('/home');
      } else {
        setError(true);
      }
    } catch (err) {
      console.error('Error en el login:', err);
      setError(true);
    }
  }

  return (
    <main className={`${styles.hill_login_container} ${styles.hill_login_page}`}>
      <div className={styles.hill_login__image}>
        <Image src="/login-image.jpg" alt="habitos saludables" width={626} height={626} className={styles.hill_image} />
      </div>

      <div className={styles.hill_login__form_container}>
        <div className={styles.hill_login__logo}>
          <img src="/Hill_imagen_logo.jpg" width={60} height={64} alt="logo hill" className={styles.hill_logo} />
        </div>

        <div className={styles.hill_login__form}>
          <h2 className={styles.hill_login__title}>Iniciar Sesión</h2>

          <form className={styles.hill_form} onSubmit={handleSubmit}>
            <div className={styles.hill_form_group}>
              <label htmlFor="username" className="hill-form-label">Nombre de usuario</label>
              <input type="text" id="username" value={username} onChange={(e) => setUsername(e.target.value)} className="hill-form-input" required />
            </div>

            <div className="hill-form-group">
              <label htmlFor="password" className="hill-form-label">Contraseña</label>
              <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} className="hill-form-input" required />
            </div>

            {error && <div className="hill-form-error">Nombre de usuario o contraseña incorrectos</div>}

            <button type="submit" className="hill-btn hill-btn--primary hill-btn--full-width">Iniciar Sesión</button>
          </form>

          <div className="hill-login__links">
            <a href="/forgot-password" className="hill-login__link">¿Olvidaste tu contraseña?</a>
            <a href="/signIn" className="hill-login__link">Registrarse</a>
          </div>
        </div>
      </div>
    </main>
  );
}
