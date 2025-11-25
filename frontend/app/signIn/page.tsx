'use client';

import React, { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import styles from "../signIn/Pages.module.css";

export default function SignInPage() {
  const router = useRouter();

  // Campos del usuario según tu schema
  const [name, setName] = useState("");
  const [edad, setEdad] = useState<number | "">("");
  const [sexo, setSexo] = useState("masculino");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPass, setConfirmPass] = useState("");

  const [errorMsg, setErrorMsg] = useState("");
  const API = process.env.NEXT_PUBLIC_API_BASE ?? "http://localhost:4000";

  async function handleRegister(e: React.FormEvent) {
    e.preventDefault();
    setErrorMsg("");

    if (password !== confirmPass) {
      setErrorMsg("Las contraseñas no coinciden");
      return;
    }

    try {
      const response = await fetch(`${API}/api/auth/register/`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          password,
          edad: Number(edad),
          sexo,
          email,
        }),
      });

      const data = await response.json();
      if (!response.ok) {
        setErrorMsg(data.message ?? "Error al registrarse");
        return;
      }

      // Registro correcto → redirige al login
      router.push("/login");
    } catch (error) {
      console.error(error);
      setErrorMsg("Error de conexión con el servidor");
    }
  }

  return (
    <main className={styles.hill_login_page}>
      <div className={styles.hill_login_container}>
        
        {/* Imagen */}
        <div className={styles.hill_login__image}>
          <Image 
            src="/login-image.jpg"
            alt="hábitos saludables"
            width={626}
            height={626}
            className={styles.hill_image}
          />
        </div>

        {/* Formulario */}
        <div className={styles.hill_login__form_container}>
          <div className={styles.hill_login__form}>
            <h2 className={styles.hill_login__title}>Registrarse</h2>

            <form className={styles.hill_form} onSubmit={handleRegister}>

              <div className={styles.hill_form_group}>
                <label className={styles.hill_form_label}>Nombre de usuario</label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className={styles.hill_form_input}
                  required
                />
              </div>

              <div className={styles.hill_form_group}>
                <label className={styles.hill_form_label}>Email</label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className={styles.hill_form_input}
                />
              </div>

              <div className={styles.hill_form_group}>
                <label className={styles.hill_form_label}>Edad</label>
                <input
                  type="number"
                  value={edad}
                  onChange={(e) => setEdad(e.target.value === "" ? "" : Number(e.target.value))}
                  className={styles.hill_form_input}
                  required
                />
              </div>

              <div className={styles.hill_form_group}>
                <label className={styles.hill_form_label}>Sexo</label>
                <select
                  value={sexo}
                  onChange={(e) => setSexo(e.target.value)}
                  className={styles.hill_form_input}
                  required
                >
                  <option value="masculino">Masculino</option>
                  <option value="femenino">Femenino</option>
                  <option value="otro">Otro</option>
                </select>
              </div>

              <div className={styles.hill_form_group}>
                <label className={styles.hill_form_label}>Contraseña</label>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className={styles.hill_form_input}
                  required
                />
              </div>

              <div className={styles.hill_form_group}>
                <label className={styles.hill_form_label}>Confirmar contraseña</label>
                <input
                  type="password"
                  value={confirmPass}
                  onChange={(e) => setConfirmPass(e.target.value)}
                  className={styles.hill_form_input}
                  required
                />
              </div>

              {/* Error */}
              {errorMsg && (
                <div className={styles.hill_form_error_message}>
                  {errorMsg}
                </div>
              )}

              <button
                type="submit"
                className={`${styles.hill_btn} ${styles.hill_btn__primary} ${styles["hill_btn--full-width"]}`}
              >
                Registrarse
              </button>
            </form>

            <div className={styles.hill_login__links}>
              <a href="/login" className={styles.hill_login__link}>Iniciar sesión</a>
            </div>
          </div>
        </div>

      </div>
    </main>
  );
}