'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from './Notificaciones.module.css';

interface Notification {
  _id?: string;
  title: string;
  message?: string;
  createdAt?: string;
  read?: boolean;
}

interface Task {
  _id?: string;
  name: string;
  description?: string;
  completed: boolean;
  type?: string;
}

export default function NotificacionesPage() {
  const [notifications, setNotifications] = useState<Notification[]>([]);
  const [tasks, setTasks] = useState<Task[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE || 'http://localhost:4000';

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        setError(null);

        const userStorage = localStorage.getItem('user');
        if (!userStorage) {
          setError('No se encontró la información del usuario');
          setLoading(false);
          return;
        }

        const user = JSON.parse(userStorage);
        const userId = user._id || user.id;

        // Obtener notificaciones del usuario
        try {
          const notifResponse = await fetch(`${API_BASE_URL}/api/notification`);
          if (notifResponse.ok) {
            const notifData = await notifResponse.json();
            setNotifications(Array.isArray(notifData) ? notifData : []);
          }
        } catch (err) {
          console.warn('Error cargando notificaciones:', err);
          setNotifications([]);
        }

        // Obtener tareas pendientes del usuario
        try {
          const tasksResponse = await fetch(`${API_BASE_URL}/api/users/${userId}`);
          if (tasksResponse.ok) {
            const userData = await tasksResponse.json();
            const tareasPendientes = userData.tareas?.filter((t: Task) => !t.completed) || [];
            setTasks(tareasPendientes);
          }
        } catch (err) {
          console.warn('Error cargando tareas:', err);
          setTasks([]);
        }
      } catch (err) {
        const errorMessage = err instanceof Error ? err.message : 'Error desconocido';
        setError(errorMessage);
        console.error('Error fetching data:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const formatearFecha = (fechaISO: string | undefined): { date: string; time: string } => {
    if (!fechaISO) return { date: '', time: '' };

    const fecha = new Date(fechaISO);
    const date = fecha.toLocaleDateString('es-ES', { year: 'numeric', month: '2-digit', day: '2-digit' });
    const time = fecha.toLocaleTimeString('es-ES', { hour: '2-digit', minute: '2-digit', hour12: true });

    return { date, time };
  };

  return (
    <div className={styles.pageContainer}>
      {/* Barra de navegación */}
      <nav className={styles.navigation}>
        <Link href="/notificaciones" className={styles.navButton}>
          <div className={styles.navIcon}>
            <Image src="/Icono_campana_hill.png" alt="Campana" width={40} height={40} />
          </div>
          <span className={styles.navLabel}>Campana</span>
        </Link>

        <Link href="/progreso" className={styles.navButton}>
          <div className={styles.navIcon}>
            <Image src="/icono_progreso.png" alt="Progreso" width={40} height={40} />
          </div>
          <span className={styles.navLabel}>Progreso</span>
        </Link>

        <Link href="/home" className={styles.navButton}>
          <div className={styles.navIcon}>
            <Image src="/Hill_imagen_logo.jpg" alt="Hill" width={40} height={40} />
          </div>
          <span className={styles.navLabel}>Hill</span>
        </Link>

        <Link href="/logros" className={styles.navButton}>
          <div className={styles.navIcon}>
            <Image src="/Icono_logro.png" alt="Logros" width={40} height={40} />
          </div>
          <span className={styles.navLabel}>Logros</span>
        </Link>

        <Link href="/opciones" className={styles.navButton}>
          <div className={styles.navIcon}>
            <Image src="/icono_opciones.png" alt="Opciones" width={40} height={40} />
          </div>
          <span className={styles.navLabel}>Opciones</span>
        </Link>
      </nav>

      <div className={styles.titleContainer}>
        <h1>Notificaciones</h1>
      </div>

      <div className={styles.content}>
        {/* Sección de Mensajes */}
        <div className={styles.mensajesSection}>
          <h2>Mensajes de Notificación</h2>

          {loading && <p className={styles.loadingMessage}>Cargando notificaciones...</p>}
          {error && <p className={styles.errorMessage}>{error}</p>}

          {!loading && notifications.length === 0 && (
            <p className={styles.emptyMessage}>No hay notificaciones</p>
          )}

          {notifications.map((notif) => {
            const { date, time } = formatearFecha(notif.createdAt);
            return (
              <div key={notif._id} className={styles.notificacion}>
                <div className={styles.notificacionIcon}>
                  <Image
                    src="/Icono_campana_hill.png"
                    alt="Notificación"
                    width={40}
                    height={40}
                  />
                </div>
                <div className={styles.notificacionTexto}>
                  <p className={styles.notificacionTitulo}>{notif.title}</p>
                  {notif.message && <p className={styles.notificacionMensaje}>{notif.message}</p>}
                </div>
                <div className={styles.notificacionFecha}>
                  {time && <small>{time}</small>}
                  {date && <small>{date}</small>}
                </div>
              </div>
            );
          })}
        </div>

        {/* Sección de Tareas Pendientes */}
        <div className={styles.tareas}>
          <p className={styles.tareasTitulo}>
            <b>Aún no has completado las siguientes tareas:</b>
          </p>

          {loading && <p className={styles.loadingMessage}>Cargando tareas...</p>}
          {error && <p className={styles.errorMessage}>{error}</p>}

          {!loading && tasks.length === 0 && (
            <p className={styles.emptyMessage}>¡Todas las tareas completadas!</p>
          )}

          {tasks.length > 0 && (
            <ul className={styles.tareasList}>
              {tasks.map((tarea) => (
                <li key={tarea._id} className={styles.tareaItem}>
                  <Image src="/icono_x_roja.png" alt="Tarea pendiente" width={20} height={20} />
                  <div className={styles.tareaInfo}>
                    <span className={styles.tareaName}>{tarea.name}</span>
                    {tarea.description && (
                      <span className={styles.tareaDesc}>{tarea.description}</span>
                    )}
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
}