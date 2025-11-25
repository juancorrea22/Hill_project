'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import Image from "next/image";
import styles from "../login/Pages.module.css";

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState('');
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);
  const router = useRouter();

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError(false);
    setSuccess(false);

    const API = process.env.NEXT_PUBLIC_API_BASE ?? 'http://localhost:4000';
    try {
      const response = await fetch(`${API}/api/auth/forgot-password`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });

      if (response.ok) {
        setSuccess(true);
      } else {
        setError(true);
      }
    } catch (err) {
      console.error('Error al recuperar contraseña:', err);
      setError(true);
    }
  }

  return (
    <main className={styles.hill_login_page}>
      <div className={styles.hill_login_container}>
        <div className={styles.hill_login__image}>
          <Image src="/login-image.jpg" width={626} height={626} alt="hábitos saludables" className={styles.hill_image} />
        </div>

        <div className={styles.hill_login__form_container}>
          <div className={styles.hill_login__logo}>
            <Image src="/Hill_imagen_logo.jpg" width={60} height={60} alt="logo hill" className={styles.hill_logo} />
          </div>

          <div className={styles.hill_login__form}>
            <h2 className={styles.hill_login__title}>Recuperar Contraseña</h2>
            <p style={{ textAlign: 'center', color: '#666', marginBottom: '20px', fontSize: '14px' }}>
              Ingresa tu correo electrónico y te enviaremos instrucciones para restablecer tu contraseña.
            </p>

            <form className={styles.hill_form} onSubmit={handleSubmit}>
              <div className={styles.hill_form_group}>
                <label htmlFor="email" className={styles.hill_form_label}>Correo electrónico</label>
                <input type="email" id="email" name="email" className={styles.hill_form_input} value={email} onChange={(e) => setEmail(e.target.value)} required />
              </div>

              {error && (<div className={styles.hill_form}>No se encontró una cuenta con este correo electrónico</div>)}
              {success && (<div className={styles.hill_form} style={{ color: '#28a745', textAlign: 'center', marginBottom: '15px', fontSize: '14px' }}>Se ha enviado un correo con instrucciones para recuperar tu contraseña</div>)}

              <button type="submit" className={`${styles.hill_btn} ${styles.hill_btn__primary} ${styles.hill_btn__full_width}`}>Enviar instrucciones</button>
            </form>

            <div className={styles.hill_login__links}>
              <a href="/login" className={styles.hill_login__link}>Volver a iniciar sesión</a>
              <a href="/sign-in" className={styles.hill_login__link}>Crear una cuenta</a>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
