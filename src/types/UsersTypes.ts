import { Repositorio } from "./RepositoryTypes";

interface Logro {
    name: string;
    rango: "platino" | "diamante" | "oro" | "plata" | "bronce";
    description: string;
}

interface Tarea {
    name: string;
    completed: boolean;
    type: "hidratacion" | "ejercicio" | "sueño" | "alimentacion" | "otro";
    description: string;
    timeLimit?: number;
    initDate: string;
    frequency?: "diario" | "semanal" | "mensual" | "bimensual" | "trimensual" | "any";
}

interface AchievementRegister {
    logro: Logro;
    fecha: string;
}

interface WeightsRegister {
    fecha: string;
    peso: number;
}

export interface User {
    id: string;
    name: string;
    password: string;
    edad: number;
    sexo: 'masculino' | 'femenino' | 'otro';
    email?: string;
    userImage ?: string;
    logros ?: AchievementRegister[];
    tareas ?: Tarea[];
    registroPeso ?: WeightsRegister[];
    altura ?: number;
    initDate: string;
}

export interface IUserRepository extends Repositorio<User>{}

export interface IUserService {
    createUser(user: User): Promise<User>;
    findUsers(): Promise<User[]>;
    findUsersById(id: string): Promise<User | null>;
    updateUser(id: string, user: Partial<User>): Promise<User | null>;
    deleteUser(id: string): Promise<boolean>;
}