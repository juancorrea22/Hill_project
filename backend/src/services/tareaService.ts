import { ITareaRepository, ITareaService, Tarea } from "types/TareasTypes";

export class TareaService implements ITareaService {
    private tareaRepository: ITareaRepository;
    constructor(tareaRepository: ITareaRepository) {
        this.tareaRepository = tareaRepository;
    }

    async createTarea(tarea: Tarea): Promise<Tarea> {
        return this.tareaRepository.create(tarea);
    }

    async findTareas(): Promise<Tarea[]> {
        return this.tareaRepository.find();
    }

    async findTareaById(id: string): Promise<Tarea | null> {
        return this.tareaRepository.findById(id);
    }

    async updateTarea(id: string, tarea: Partial<Tarea>): Promise<Tarea | null> {
        return this.tareaRepository.update(id, tarea);
    }

    async deleteTarea(id: string): Promise<boolean> {
        return this.tareaRepository.delete(id);
    }
}