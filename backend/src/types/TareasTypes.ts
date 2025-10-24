import { Repositorio } from "./RepositoryTypes";

export interface Tarea {
    name: string;
    completed: boolean;
    type: "hidratacion" | "ejercicio" | "sueño" | "alimentacion" | "otro";
    description: string;
    timeLimit?: number;
    frequency?: "diario" | "semanal" | "mensual" | "bimensual" | "trimensual" | "any";
}

export interface ITareaRepository extends Repositorio<Tarea>{}

export interface ITareaService {
    createTarea(tarea: Tarea): Promise<Tarea>;
    findTareas(): Promise<Tarea[]>;
    findTareaById(id: string): Promise<Tarea | null>;
    updateTarea(id: string, tarea: Partial<Tarea>): Promise<Tarea | null>;
    deleteTarea(id: string): Promise<boolean>;
}