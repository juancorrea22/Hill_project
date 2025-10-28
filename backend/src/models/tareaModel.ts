import mongoose, { Schema } from "mongoose";
import { Tarea } from "types/TareasTypes";

const tareaSchema: Schema = new Schema<Tarea>({
    name: { type: String, required: true, unique: true },
    completed: { type: Boolean, required: true },
    type: { 
        type: String, 
        enum: ["hidratacion", "ejercicio", "sueño", "alimentacion", "otro"], 
        required: true,
        set: (v: string) => v.toLowerCase()
    },
    description: { type: String, required: true },
    timeLimit: { type: Number },
    frequency: { 
        type: String, 
        enum: ["diario", "semanal", "mensual", "bimensual", "trimensual", "any"],
        set: (v: string) => v.toLowerCase()
    }
}, { timestamps: true });

export const TareaModel = mongoose.model<Tarea>("tareas", tareaSchema);