'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from "next/image";
import styles from './Notificaciones.module.css';

type Notification = {
  id: string;
  title: string;
  time?: string;
  date?: string;
  read?: boolean;
};

type TaskItem = {
  id: string;
  title: string;
};

export default function NotificacionesPage() {
  const [notifications, setNotifications] = useState<Notification[] | null>(null);
  const [tasks, setTasks] = useState<TaskItem[] | null>(null);
  const [loading, setLoading] = useState(true);
  const [err, setErr] = useState<string | null>(null);

  useEffect(() => {
    const API = process.env.NEXT_PUBLIC_API_BASE || 'http://localhost:4000';

    async function loadData() {
      setLoading(true);
      setErr(null);

      try {
        const [nRes, tRes] = await Promise.allSettled([
          fetch(`${API}/notifications`),
          fetch(`${API}/tasks/pending`),
        ]);

        if (nRes.status === 'fulfilled' && nRes.value.ok) {
          const data = await nRes.value.json();
          setNotifications(Array.isArray(data) ? data : []);
        } else {
          setNotifications([
            { id: 'n1', title: 'Mensaje de notificación 1', time: '6:55 a.m', date: '05/08/2025' },
            { id: 'n2', title: 'Mensaje de notificación 2', time: '7:04 p.m', date: '04/08/2025' },
            { id: 'n3', title: 'Mensaje de notificación 3', time: '8:30 a.m', date: '04/08/2025' },
          ]);
        }

        if (tRes.status === 'fulfilled' && tRes.value.ok) {
          const data = await tRes.value.json();
          setTasks(Array.isArray(data) ? data : []);
        } else {
          setTasks([
            { id: 't1', title: 'Tarea 4: Descripcion de la tarea' },
            { id: 't2', title: 'Tarea 5: Descripcion de la tarea' },
            { id: 't3', title: 'Tarea 6: Descripcion de la tarea' },
          ]);
        }
      } catch (error: any) {
        console.error(error);
        setErr('No fue posible cargar las notificaciones');
      } finally {
        setLoading(false);
      }
    }

    loadData();
  }, []);

  return (
    <div className={styles.pageContainer}>
      <div className={styles.navigation}>
        <Link href="/notificaciones" className={styles.navButton}>
          <div className={styles.navIcon}><Image src="/Icono_campana_hill.png" width={60} height={60} alt="Campana" /></div>
          <span className={styles.navLabel}>Campana</span>
        </Link>

        <Link href="/progreso" className={styles.navButton}>
          <div className={styles.navIcon}><Image src="/icono_progreso.png" width={60} height={60} alt="Progreso" /></div>
          <span className={styles.navLabel}>Progreso</span>
        </Link>

        <Link href="/home" className={styles.navButton}>
          <div className={styles.navIcon}><Image src="/Hill_imagen_logo.jpg" width={60} height={60} alt="Hill" /></div>
          <span className={styles.navLabel}>Hill</span>
        </Link>

        <Link href="/logros" className={styles.navButton}>
          <div className={styles.navIcon}><Image src="/Icono_logro.png" width={60} height={60} alt="Logros" /></div>
          <span className={styles.navLabel}>Logros</span>
        </Link>

        <Link href="/opciones" className={styles.navButton}>
          <div className={styles.navIcon}><Image src="/icono_opciones.png" width={60} height={60} alt="Opciones" /></div>
          <span className={styles.navLabel}>Opciones</span>
        </Link>
      </div>

      <div className={styles.titleContainer}>
        <h1>Notificaciones</h1>
      </div>

      <div className={styles.content}>
        <div className={styles.mensajesSection}>
          <h2>Mensajes de Notificación</h2>

          {loading && <p>cargando notificaciones...</p>}
          {err && <p className={styles.error}>{err}</p>}

          {notifications && notifications.length === 0 && <p>No hay notificaciones.</p>}

          {notifications?.map((n) => (
            <div key={n.id} className={styles.notificacion}>
              <Image src="/Icono_campana_hill.png" width={60} height={60} alt="Notificación" />
              <div className={styles.notificacionTexto}>
                <p><b>{n.title}</b></p>
              </div>
              <div className={styles.notificacionFecha}>
                <small>{n.time ?? ''}</small>
                <small>{n.date ?? ''}</small>
              </div>
            </div>
          ))}
        </div>

        <div className={styles.tareas}>
          <p className={styles.tareasTitulo}><b>Aún no has completado las siguientes tareas:</b></p>

          {tasks && (
            <ul>
              {tasks.map((t) => (
                <li key={t.id}>
                  <Image src="/icono_x_roja.png" width={60} height={60} alt="X" />
                  <span>{t.title}</span>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
}
