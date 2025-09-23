import mongoose, { Schema } from "mongoose";
import { Tarea } from "types/TareasTypes";

const tareaSchema: Schema = new Schema<Tarea> ({
    name: {type: String, required: true},
    completed: {type: Boolean, required: true},
    type: {type: String, enum: ["hidratacion", "ejercicio", "sueño", "alimentacion", "otro"], required: true},
    description: {type: String, required: true},
    timeLimit: {type: Number, required: false},
    frequency: {type: String, enum: ["diario", "semanal", "mensual", "bimensual", "trimensual", "any"], required: false},
},{ timestamps: true });

export const TareaModel = mongoose.model<Tarea>("tareas", tareaSchema)