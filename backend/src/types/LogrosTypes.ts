import { Repositorio  } from "./RepositoryTypes";

export interface Logro {
    name: string;
    rango: string;
    description: string;
}

export interface ILogroRepository extends Repositorio<Logro>{}

export interface ILogroService {
    createLogro(logro: Logro): Promise<Logro>;
    findLogros(): Promise<Logro[]>;
    findLogroById(id: string): Promise<Logro | null>;
    updateLogro(id: string, user: Partial<Logro>): Promise<Logro | null>;
    deleteLogro(id: string): Promise<boolean>;
}