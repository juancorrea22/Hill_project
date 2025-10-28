'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState('');
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);
  const router = useRouter();

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError(false);
    setSuccess(false);

    const API = process.env.NEXT_PUBLIC_API_BASE || 'http://localhost:4000';
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
    <main className="hill-login-container">
      <div className="hill-login__image">
        <img src="/img/login-image.jpg" alt="hábitos saludables" className="hill-image" />
      </div>

      <div className="hill-login__form-container">
        <div className="hill-login__logo">
          <img src="/img/Hill_imagen_logo.jpg" alt="logo hill" className="hill-logo" />
        </div>

        <div className="hill-login__form">
          <h2 className="hill-login__title">Recuperar Contraseña</h2>
          <p style={{ textAlign: 'center', color: '#666', marginBottom: '20px', fontSize: '14px' }}>
            Ingresa tu correo electrónico y te enviaremos instrucciones para restablecer tu contraseña.
          </p>

          <form className="hill-form" onSubmit={handleSubmit}>
            <div className="hill-form-group">
              <label htmlFor="email" className="hill-form-label">Correo electrónico</label>
              <input type="email" id="email" name="email" className="hill-form-input" value={email} onChange={(e) => setEmail(e.target.value)} required />
            </div>

            {error && <div className="hill-form-error">No se encontró una cuenta con este correo electrónico</div>}
            {success && <div className="hill-form-success" style={{ color: '#28a745', textAlign: 'center', marginBottom: '15px', fontSize: '14px' }}>Se ha enviado un correo con instrucciones para recuperar tu contraseña</div>}

            <button type="submit" className="hill-btn hill-btn--primary hill-btn--full-width">Enviar instrucciones</button>
          </form>

          <div className="hill-login__links">
            <a href="/login" className="hill-login__link">Volver a iniciar sesión</a>
            <a href="/signIn" className="hill-login__link">Crear una cuenta</a>
          </div>
        </div>
      </div>
    </main>
  );
}
