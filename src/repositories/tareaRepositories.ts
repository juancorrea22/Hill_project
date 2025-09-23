import { TareaModel } from "@models/tareaModel";
import { ITareaRepository, Tarea } from "types/TareasTypes";

export class TareaRepository implements ITareaRepository{
    private tareas: Tarea[] = []

    async create(data: Tarea): Promise<Tarea> {
        const newTarea = new TareaModel(data);
        return await newTarea.save();
    }

    async find(): Promise<Tarea[]> {
        return await TareaModel.find().exec();
    }

    async findById(id: string): Promise<Tarea | null> {
        return await TareaModel.findById(id).exec();
    }

    async update(id: string, data: Partial<Tarea>): Promise<Tarea | null> {
        return await TareaModel.findByIdAndUpdate(id, data, {new: true}).exec();
    }

    async delete(id: string): Promise<boolean> {
        const deleted = await TareaModel.findByIdAndDelete(id).exec();
        return deleted != null;
    }
}