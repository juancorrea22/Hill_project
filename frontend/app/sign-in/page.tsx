'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import styles from "../login/Pages.module.css";

export default function SignInPage() {
  const [username, setUsername] = useState(''); // puede ser username o email (como en tu HTML)
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setErrorMsg(null);

    // Validaciones locales (mantén coherencia con tu UX)
    if (!username.trim()) {
      setErrorMsg('Ingresa tu usuario o correo.');
      return;
    }
    if (password.length < 6) {
      setErrorMsg('La contraseña debe tener al menos 6 caracteres.');
      return;
    }
    if (password !== confirmPassword) {
      setErrorMsg('Las contraseñas no coinciden.');
      return;
    }

    setLoading(true);

    const API = process.env.NEXT_PUBLIC_API_BASE ?? 'http://localhost:4000';

    try {
      // Si el usuario ingresó un email (contiene '@'), lo mandamos también como email
      const isEmail = username.includes('@');
      const payload: any = {
        name: isEmail ? username.split('@')[0] : username,
        password,
      };
      if (isEmail) payload.email = username.toLowerCase().trim();

      // Endpoint por defecto: /api/auth/register/
      const res = await fetch(`${API}/api/auth/register/`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      const data = await res.json().catch(() => ({}));

      if (res.ok) {
        // Si el backend devuelve token / user igual que en login, los guardamos
        if (data.token) localStorage.setItem('token', data.token);
        if (data.user) localStorage.setItem('user', JSON.stringify(data.user));
        // Redirigir al home (en login haces router.push('/home'))
        router.push('/home');
      } else {
        // Mostrar mensaje del backend si viene, sino mensaje genérico
        setErrorMsg(data?.message ?? 'Error en el registro. Intenta con otro usuario.');
      }
    } catch (err) {
      console.error('Error en el registro:', err);
      setErrorMsg('Error de conexión con el servidor.');
    } finally {
      setLoading(false);
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
            <h2 className={styles.hill_login__title}>Registrarse</h2>

            <form className={styles.hill_form} onSubmit={handleSubmit}>
              <div className={styles.hill_form_group}>
                <label htmlFor="username" className={styles.hill_form_label}>Usuario o Email</label>
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

              <div className={styles.hill_form_group}>
                <label htmlFor="confirmPassword" className={styles.hill_form_label}>Confirmar contraseña</label>
                <input
                  type="password"
                  id="confirmPassword"
                  name="confirmPassword"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  className={styles.hill_form_input}
                  required
                />
              </div>

              {errorMsg && (
                <div className={styles.hill_form_error_message} style={{ display: 'block' }}>
                  {errorMsg}
                </div>
              )}

              <button
                type="submit"
                className={`${styles.hill_btn} ${styles.hill_btn__primary} ${styles['hill_btn--full-width']}`}
                disabled={loading}
              >
                {loading ? 'Registrando...' : 'Registrarse'}
              </button>
            </form>

            <div className={styles.hill_login__links}>
              <a href="/forgot-password" className={styles.hill_login__link}>¿Olvidaste tu contraseña?</a>
              <a href="/login" className={styles.hill_login__link}>Iniciar sesión</a>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
