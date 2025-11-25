'use client';

  import React, { useState } from 'react';
  import { useRouter } from 'next/navigation';
  import Image from "next/image";
  import styles from "../login/Pages.module.css";

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
      <main className={styles.hill_login_page}>
        <div className={styles.hill_login_container}>
          <div className={styles.hill_login__image}>
            <Image 
              src="/login-image.jpg" 
              alt="hábitos saludables" 
              width={626} 
              height={626} 
              className={styles.hill_image} 
            />
          </div>

          <div className={styles.hill_login__form_container}>
            <div className={styles.hill_login__logo}>
              <Image
                width={60}
                height={60} 
                src="/Hill_imagen_logo.jpg" 
                alt="logo hill" 
                className={styles.hill_logo} 
              />
            </div>

            <div className={styles.hill_login__form}>
              <h2 className={styles.hill_login__title}>Iniciar Sesión</h2>

              <form className={styles.hill_form} onSubmit={handleSubmit}>
                <div className={styles.hill_form_group}>
                  <label htmlFor="username" className={styles.hill_form_label}>Nombre de usuario</label>
                  <input 
                    type="text" 
                    id="username" 
                    name="username"
                    value={username} 
                    onChange={(e) => setUsername(e.target.value)} 
                    className={styles.hill_form_input} 
                    required 
                  />
                </div>

                <div className={styles.hill_form_group}>
                  <label htmlFor="password" className={styles.hill_form_label}>Contraseña</label>
                  <input 
                    type="password" 
                    id="password" 
                    name="password"
                    value={password} 
                    onChange={(e) => setPassword(e.target.value)} 
                    className={styles.hill_form_input} 
                    required 
                  />
                </div>

                {error && (
                  <div className={styles.hill_form_error_message} style={{ display: 'block' }}>
                    Nombre de usuario o contraseña incorrectos
                  </div>
                )}

                <button type="submit" className={`${styles.hill_btn} ${styles.hill_btn__primary} ${styles['hill_btn--full-width']}`}>
                  Iniciar Sesión
                </button>
              </form>

              <div className={styles.hill_login__links}>
                <a href="/forgot-password" className={styles.hill_login__link}>¿Olvidaste tu contraseña?</a>
                <a href="/sign-in" className={styles.hill_login__link}>Registrarse</a>
              </div>
            </div>
          </div>
        </div>
      </main>
    );
  }