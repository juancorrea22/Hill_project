'use client';

import React, { useEffect } from 'react';
import Link from 'next/link';

export default function HomePage() {
  useEffect(() => {
    const s1 = document.createElement('script');
    s1.src = '/js/importTime.js';
    s1.async = true;
    document.body.appendChild(s1);

    const s2 = document.createElement('script');
    s2.src = '/js/home.js';
    s2.async = true;
    document.body.appendChild(s2);

    return () => {
      s1.remove();
      s2.remove();
    };
  }, []);

  return (
    <div className="container">
      <div className="navigation">
        <Link href="/notificaciones" className="nav-button">
          <div className="nav-icon">
            <img src="/img/Icono_campana_hill.png" alt="Campana" />
          </div>
          <span className="nav-label">Campana</span>
        </Link>

        <Link href="/progreso" className="nav-button">
          <div className="nav-icon">
            <img src="/img/icono_progreso.png" alt="Progreso" />
          </div>
          <span className="nav-label">Progreso</span>
        </Link>

        <Link href="/home" className="nav-button">
          <div className="nav-icon">
            <img src="/img/Hill_imagen_logo.jpg" alt="Hill" />
          </div>
          <span className="nav-label">Hill</span>
        </Link>

        <Link href="/logros" className="nav-button">
          <div className="nav-icon">
            <img src="/img/Icono_logro.png" alt="Logros" />
          </div>
          <span className="nav-label">Logros</span>
        </Link>

        <Link href="/opciones" className="nav-button">
          <div className="nav-icon">
            <img src="/img/icono_opciones.png" alt="Opciones" />
          </div>
          <span className="nav-label">Opciones</span>
        </Link>
      </div>

      <div className="datetime" id="hora"></div>

      <div className="tasks-container">
        <div className="task-section">
          <h2>Tareas Restantes:</h2>
          <div className="task-list" id="task-list-pending"></div>
        </div>

        <div className="task-section">
          <h2>Tareas Completadas:</h2>
          <div className="task-list" id="task-list-completed"></div>
        </div>
      </div>
    </div>
  );
}
