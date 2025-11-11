'use client';

import React, { useState } from "react";
import { useRouter } from 'next/navigation';
import Image from "next/image";
import Link from 'next/link';
import '../../src/styles/globalApp.css';
import "../../src/styles/opciones.css";

const Opciones: React.FC = () => {
  const [activeSection, setActiveSection] = useState<"perfil" | "seguridad" | "soporte">("perfil");
  const [modalOpen, setModalOpen] = useState<"none" | "username" | "password">("none");
  const [username, setUsername] = useState("User_Name1");
  const [newUsername, setNewUsername] = useState("");
  const [passwords, setPasswords] = useState({
    current: "",
    new: "",
    confirm: "",
  });

  const showSection = (section: "perfil" | "seguridad" | "soporte") => {
    setActiveSection(section);
  };

  const openModal = (type: "username" | "password") => {
    setModalOpen(type);
  };

  const closeModal = () => {
    setModalOpen("none");
  };

  const changePhoto = () => {
    alert("Función para cambiar foto de usuario próximamente disponible.");
  };

  const saveUsername = () => {
    if (newUsername.trim() === "") return alert("Por favor ingresa un nombre válido.");
    setUsername(newUsername);
    setNewUsername("");
    closeModal();
  };

  const savePassword = () => {
    const { current, new: newPass, confirm } = passwords;
    if (!current || !newPass || !confirm) return alert("Por favor completa todos los campos.");
    if (newPass !== confirm) return alert("Las contraseñas no coinciden.");
    alert("Contraseña actualizada correctamente.");
    setPasswords({ current: "", new: "", confirm: "" });
    closeModal();
  };

  return (
    <div className="page-container">
      {/* Barra de navegación */}
      <div className="navigation">
        <Link href="/notificaciones" className="nav-button">
          <div className="nav-icon">
            <Image src="/Icono_campana_hill.png" width={60} height={60} alt="Campana" />
          </div>
          <span className="nav-label">Campana</span>
        </Link>

        <Link href="/progreso" className="nav-button">
          <div className="nav-icon">
            <Image src="/icono_progreso.png" width={60} height={60} alt="Progreso" />
          </div>
          <span className="nav-label">Progreso</span>
        </Link>

        <Link href="/home" className="nav-button">
          <div className="nav-icon">
            <Image src="/Hill_imagen_logo.jpg" width={60} height={60} alt="Hill" />
          </div>
          <span className="nav-label">Hill</span>
        </Link>

        <Link href="/logros" className="nav-button">
          <div className="nav-icon">
            <Image src="/Icono_logro.png" width={60} height={60} alt="Logros" />
          </div>
          <span className="nav-label">Logros</span>
        </Link>

        <Link href="/opciones" className="nav-button">
          <div className="nav-icon">
            <Image src="/icono_opciones.png" width={60} height={60} alt="Opciones" />
          </div>
          <span className="nav-label">Opciones</span>
        </Link>
      </div>

      {/* Título principal */}
      <div className="title-container">
        <h1>Opciones</h1>
      </div>

      {/* Layout principal */}
      <div className="main-layout">
        {/* Sidebar */}
        <div className="sidebar">
          <div
            className={`sidebar-item ${activeSection === "perfil" ? "active" : ""}`}
            onClick={() => showSection("perfil")}
          >
            <div className="sidebar-content">
              <Image src="/Icono_usuario.png" width={60} height={60} alt="Usuario" className="sidebar-icon" />
              <span>Ajustes de usuario</span>
            </div>
          </div>

          <div
            className={`sidebar-item ${activeSection === "seguridad" ? "active" : ""}`}
            onClick={() => showSection("seguridad")}
          >
            <div className="sidebar-content">
              <span className="sidebar-text-icon">Políticas de seguridad</span>
            </div>
          </div>

          <div
            className={`sidebar-item ${activeSection === "soporte" ? "active" : ""}`}
            onClick={() => showSection("soporte")}
          >
            <div className="sidebar-content">
              <span className="sidebar-text-icon">Soporte Técnico</span>
            </div>
          </div>
        </div>

        {/* Área de contenido */}
        <div className="content-area">
          {/* Sección de Perfil */}
          {activeSection === "perfil" && (
            <div id="perfil-section" className="section">
              <h2 className="section-title">Editar Perfil</h2>

              <div className="user-card">
                <div className="user-info">
                  <div className="user-avatar">
                    <Image src="/avatar_default.png" width={60} height={60} alt="Avatar" id="avatar-img" />
                  </div>
                  <div className="user-name" id="display-username">
                    {username}
                  </div>
                </div>
                <button className="change-photo-btn" onClick={changePhoto}>
                  Cambiar Foto<br />de usuario
                </button>
              </div>

              <button className="action-button" onClick={() => openModal("username")}>
                Editar Nombre de Usuario
              </button>
              <button className="action-button" onClick={() => openModal("password")}>
                Cambiar Contraseña
              </button>
            </div>
          )}

          {/* Sección de Seguridad */}
          {activeSection === "seguridad" && (
            <div id="seguridad-section" className="section">
              <h2 className="section-title">Políticas de Seguridad</h2>
              <div className="info-box">
                <h3>Configuración de Seguridad</h3>
                <p>Aquí puedes configurar las políticas de seguridad de tu cuenta, incluyendo:</p>
                <ul>
                  <li>Autenticación de dos factores</li>
                  <li>Dispositivos autorizados</li>
                  <li>Configuración de privacidad</li>
                  <li>Historial de actividad</li>
                </ul>
              </div>
            </div>
          )}

          {/* Sección de Soporte */}
          {activeSection === "soporte" && (
            <div id="soporte-section" className="section">
              <h2 className="section-title">Soporte Técnico</h2>
              <div className="info-box">
                <h3>¿Necesitas ayuda?</h3>
                <p>Contacta con nuestro equipo de soporte técnico o consulta nuestras preguntas frecuentes.</p>
                <div className="soporte-options">
                  <div className="soporte-card">
                    <h4>Email</h4>
                    <p>soporte@hill.com</p>
                  </div>
                  <div className="soporte-card">
                    <h4>FAQ</h4>
                    <p>Preguntas frecuentes</p>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Modal Editar Usuario */}
      {modalOpen === "username" && (
        <div id="username-modal" className="modal">
          <div className="modal-content">
            <h3 className="modal-header">Editar Nombre de Usuario</h3>
            <div className="form-group">
              <label className="form-label">Nuevo nombre de usuario:</label>
              <input
                type="text"
                className="form-input"
                placeholder="Ingresa tu nuevo nombre"
                value={newUsername}
                onChange={(e) => setNewUsername(e.target.value)}
              />
            </div>
            <div className="modal-buttons">
              <button className="btn btn-secondary" onClick={closeModal}>
                Cancelar
              </button>
              <button className="btn btn-primary" onClick={saveUsername}>
                Guardar
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Modal Cambiar Contraseña */}
      {modalOpen === "password" && (
        <div id="password-modal" className="modal">
          <div className="modal-content">
            <h3 className="modal-header">Cambiar Contraseña</h3>
            <div className="form-group">
              <label className="form-label">Contraseña actual:</label>
              <input
                type="password"
                className="form-input"
                value={passwords.current}
                onChange={(e) => setPasswords({ ...passwords, current: e.target.value })}
              />
            </div>
            <div className="form-group">
              <label className="form-label">Nueva contraseña:</label>
              <input
                type="password"
                className="form-input"
                value={passwords.new}
                onChange={(e) => setPasswords({ ...passwords, new: e.target.value })}
              />
            </div>
            <div className="form-group">
              <label className="form-label">Confirmar contraseña:</label>
              <input
                type="password"
                className="form-input"
                value={passwords.confirm}
                onChange={(e) => setPasswords({ ...passwords, confirm: e.target.value })}
              />
            </div>
            <div className="modal-buttons">
              <button className="btn btn-secondary" onClick={closeModal}>
                Cancelar
              </button>
              <button className="btn btn-primary" onClick={savePassword}>
                Guardar
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Opciones;
