'use client';

import React, { useEffect } from 'react';
import Link from 'next/link';
import Image from "next/image";
import styles from "../../src/styles/home.module.css";

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
    <div className={styles.container}>
      <div className={styles.navigation}>
        <Link href="/notificaciones" className={styles.nav_button}>
          <div className={styles.nav_icon}>
            <Image src="/Icono_campana_hill.png" width={62} height={62} alt="Campana" />
          </div>
          <span className={styles.nav_label}>Campana</span>
        </Link>

        <Link href="/progreso" className={styles.nav_button}>
          <div className={styles.nav_icon}>
            <Image src="/icono_progreso.png" width={62} height={62} alt="Progreso" />
          </div>
          <span className={styles.nav_label}>Progreso</span>
        </Link>

        <Link href="/home" className={styles.nav_button}>
          <div className={styles.nav_icon}>
            <Image src="/Hill_imagen_logo.jpg" width={62} height={62} alt="Hill" />
          </div>
          <span className={styles.nav_label}>Hill</span>
        </Link>

        <Link href="/logros" className={styles.nav_button}>
          <div className={styles.nav_icon}>
            <Image src="/Icono_logro.png" width={62} height={62} alt="Logros" />
          </div>
          <span className={styles.nav_label}>Logros</span>
        </Link>

        <Link href="/opciones" className={styles.nav_button}>
          <div className={styles.nav_icon}>
            <Image src="/icono_opciones.png" width={62} height={62} alt="Opciones" />
          </div>
          <span className={styles.nav_label}>Opciones</span>
        </Link>
      </div>

      <div className={styles.datetime} id="hora"></div>

      <div className={styles.tasks_container}>
        <div className={styles.task_section}>
          <h2>Tareas Restantes:</h2>
          <div className={styles.task_list} id="task-list-pending"></div>
        </div>

        <div className={styles.task_section}>
          <h2>Tareas Completadas:</h2>
          <div className={styles.task_list} id="task-list-completed"></div>
        </div>
      </div>
    </div>
  );
}
