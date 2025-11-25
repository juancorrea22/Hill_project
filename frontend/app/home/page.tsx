'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from "next/image";
import styles from "./Home.module.css";

interface Task {
  _id?: string;
  name: string;
  description?: string;
  completed: boolean;
  type?: string;
  timeLimit?: number;
  initDate?: string;
  frequency?: string;
}

export default function HomePage() {
  const [tasksPending, setTasksPending] = useState<Task[]>([]);
  const [tasksCompleted, setTasksCompleted] = useState<Task[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [currentTime, setCurrentTime] = useState<string>('');

  const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE || 'http://localhost:4000';

  // Actualizar la hora en tiempo real
  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const timeString = now.toLocaleTimeString('es-ES', {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false
      });
      setCurrentTime(timeString);
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  // Cargar tareas del usuario
  useEffect(() => {
    const fetchTasks = async () => {
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
        const tareas = user.tareas || [];

        // Separar tareas pendientes y completadas
        const pending = tareas.filter((t: Task) => !t.completed);
        const completed = tareas.filter((t: Task) => t.completed);

        setTasksPending(pending);
        setTasksCompleted(completed);
      } catch (err) {
        const errorMessage = err instanceof Error ? err.message : 'Error desconocido';
        setError(errorMessage);
        console.error('Error fetching tasks:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchTasks();
  }, []);

  // Marcar tarea como completada
  const toggleTaskComplete = async (taskId: string | undefined, currentStatus: boolean) => {
    if (!taskId) return;

    try {
      const userStorage = localStorage.getItem('user');
      if (!userStorage) return;

      const user = JSON.parse(userStorage);
      const userId = user._id || user.id;

      // Actualizar en el backend
      const tareaActualizada = {
        ...user.tareas.find((t: Task) => t._id === taskId),
        completed: !currentStatus
      };

      const tareaIndex = user.tareas.findIndex((t: Task) => t._id === taskId);
      if (tareaIndex === -1) return;

      user.tareas[tareaIndex] = tareaActualizada;

      // Enviar actualización al backend
      await fetch(`${API_BASE_URL}/api/users/${userId}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ tareas: user.tareas }),
      });

      // Actualizar localStorage
      localStorage.setItem('user', JSON.stringify(user));

      // Actualizar estados locales
      const pending = user.tareas.filter((t: Task) => !t.completed);
      const completed = user.tareas.filter((t: Task) => t.completed);

      setTasksPending(pending);
      setTasksCompleted(completed);
    } catch (err) {
      console.error('Error updating task:', err);
    }
  };

  const TaskItem = ({ task, completed = false }: { task: Task; completed?: boolean }) => {
    const iconMap: { [key: string]: string } = {
      hidratacion: '/icono_chulo_verde.png',
      ejercicio: '/icono_chulo_verde.png',
      sueño: '/icono_chulo_verde.png',
      alimentacion: '/icono_chulo_verde.png',
      otro: '/icono_chulo_verde.png',
    };

    const icon = iconMap[task.type || 'otro'] || '/icono_chulo_verde.png';

    return (
      <div className={styles.taskItem}>
        <button
          className={styles.taskCheckbox}
          onClick={() => toggleTaskComplete(task._id, task.completed)}
          title={completed ? 'Marcar como incompleta' : 'Marcar como completa'}
        >
          <Image
            src={completed ? '/icono_chulo_verde.png' : '/icono_x_roja.png'}
            alt={completed ? 'Completada' : 'Pendiente'}
            width={24}
            height={24}
          />
        </button>
        <div className={styles.taskContent}>
          <p className={styles.taskName}>{task.name}</p>
          {task.description && (
            <p className={styles.taskDesc}>{task.description}</p>
          )}
          {task.frequency && (
            <p className={styles.taskFreq}>{task.frequency}</p>
          )}
        </div>
      </div>
    );
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

      <div className={styles.datetime}>{currentTime}</div>

      {error && <div className={styles.errorMessage}>{error}</div>}

      {loading ? (
        <div className={styles.loadingMessage}>Cargando tareas...</div>
      ) : (
        <div className={styles.tasksContainer}>
          <div className={styles.taskSection}>
            <h2>Tareas restantes: ({tasksPending.length})</h2>
            <div className={styles.taskList}>
              {tasksPending.length === 0 ? (
                <p className={styles.emptyMessage}>¡No hay tareas pendientes!</p>
              ) : (
                tasksPending.map((task) => (
                  <TaskItem key={task._id} task={task} completed={false} />
                ))
              )}
            </div>
          </div>

          <div className={styles.taskSection}>
            <h2>Tareas completadas: ({tasksCompleted.length})</h2>
            <div className={styles.taskList}>
              {tasksCompleted.length === 0 ? (
                <p className={styles.emptyMessage}>Sin tareas completadas</p>
              ) : (
                tasksCompleted.map((task) => (
                  <TaskItem key={task._id} task={task} completed={true} />
                ))
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}