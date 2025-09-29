export type Query = Record<string, unknown>;

export interface Repositorio<T = unknown> { // se usa unkown si no se especifica un tipo
    create(data: T): Promise<T>;
    find(): Promise<T[]>;
    findById(id: string): Promise<T | null>; // si no viene un tipo te entonces se usa tipo null
    update(id: string, data: Partial<T>): Promise<T | null>;
    delete(id: string): Promise<boolean>;
}