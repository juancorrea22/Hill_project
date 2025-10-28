'use client';

import React, { useEffect, useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import styles from './PantallaTarea.module.css';

type Task = {
  id: string;
  title: string;
  description?: string;
  completed?: boolean;
};

export default function PantallaTareaPage() {
  const searchParams = useSearchParams();
  const id = searchParams?.get('id') ?? '';
  const router = useRouter();

  const [task, setTask] = useState<Task | null>(null);
  const [loading, setLoading] = useState<boolean>(!!id);
  const [error, setError] = useState<string | null>(null);
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    if (!id) {
      setTask({
        id: 'local-placeholder',
        title: 'Nombre de la Tarea',
        description: 'Descripción de ejemplo de la tarea. Pasa ?id=IDREAL para cargar desde la API.',
      });
      setLoading(false);
      return;
    }

    const API = process.env.NEXT_PUBLIC_API_BASE || 'http://localhost:4000';
    setLoading(true);
    setError(null);

    (async () => {
      try {
        const res = await fetch(`${API}/tasks/${id}`);
        if (!res.ok) throw new Error(`Error al obtener tarea (${res.status})`);
        const data = await res.json();
        setTask({
          id: data.id ?? data._id ?? id,
          title: data.title ?? data.name ?? 'Tarea sin nombre',
          description: data.description ?? data.desc ?? '',
          completed: data.completed ?? false,
        });
      } catch (err: any) {
        console.error(err);
        setError('No se pudo cargar la tarea. Comprueba el id o la API.');
      } finally {
        setLoading(false);
      }
    })();
  }, [id]);

  async function handleComplete() {
    if (!task) return;
    const confirmComplete = confirm('¿Marcar esta tarea como completada?');
    if (!confirmComplete) return;

    const API = process.env.NEXT_PUBLIC_API_BASE || 'http://localhost:4000';
    setSaving(true);
    setError(null);

    try {
      const res = await fetch(`${API}/tasks/${task.id}/complete`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (!res.ok) {
        throw new Error(`Error al completar (${res.status})`);
      }

      const result = await res.json();

      setTask((t) => (t ? { ...t, completed: true } : t));

      alert('¡Tarea completada!');
      router.push('/home');
    } catch (err: any) {
      console.error(err);
      setError('No se pudo completar la tarea. Intenta de nuevo.');
    } finally {
      setSaving(false);
    }
  }

  return (
    <main className={styles.container}>
      <div className={styles.logoContainer}>
        <div className={styles.logo}>
          <img src="/img/Hill_imagen_logo.jpg" alt="Hill Logo" className={styles.logoIcon} />
        </div>
      </div>

      <section className={styles.card}>
        {loading ? (
          <p className={styles.info}>Cargando tarea...</p>
        ) : error ? (
          <p className={styles.error}>{error}</p>
        ) : task ? (
          <>
            <h2 className={styles.taskTitle}>{task.title}</h2>
            <div className={styles.taskDescription}>
              {task.description ? (
                task.description.split('\n').map((line, i) => <p key={i}>{line}</p>)
              ) : (
                <p className={styles.muted}>Sin descripción</p>
              )}
            </div>

            <div className={styles.actions}>
              <button
                className={styles.completeButton}
                onClick={handleComplete}
                disabled={saving || !!task.completed}
                aria-disabled={saving || !!task.completed}
              >
                {task.completed ? 'Completada' : saving ? 'Guardando...' : 'Completar Tarea'}
              </button>
            </div>
          </>
        ) : (
          <p className={styles.muted}>No hay tarea seleccionada.</p>
        )}
      </section>
    </main>
  );
}
