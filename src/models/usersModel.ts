import mongoose, { Schema } from "mongoose";
import bcrypt from "bcrypt";
import { User } from "types/UsersTypes";

const userSchema: Schema = new Schema<User>({
    name: { type: String, required: true, unique: true },
    password: { type: String, required: true, trim: true },
    edad: { type: Number, required: true },
    sexo: { type: String, enum: ["masculino", "femenino", "otro"], required: true },
    email: { type: String, required: false, unique: true },
    userImage: { type: String, required: false },
    logros: [
        {
            logro: {
                name: { type: String, required: true },
                rango: { type: String, enum: ["platino", "diamante", "oro", "plata", "bronce"], required: true },
                description: { type: String, required: true }
            },
            fecha: { type: String, required: true }
        }
    ],
    tareas: [
        {
            name: { type: String, required: true },
            completed: { type: Boolean, required: true },
            type: { type: String, enum: ["hidratacion", "ejercicio", "sueño", "alimentacion", "otro"], required: true },
            description: { type: String, required: true },
            timeLimit: { type: Number, required: false },
            initDate: { type: String, required: true },
            frequency: { type: String, enum: ["diario", "semanal", "mensual", "bimensual", "trimensual", "any"], required: false }
        }
    ],
    registroPeso: [
        {
            fecha: { type: String, required: true },
            peso: { type: Number, required: true }
        }
    ],
    altura: { type: Number, required: false },
}, { timestamps: true });

// encriptar la contraseña antes de guardar
userSchema.pre("save", async function (next) {
    const user = this as any;
    if (!user.isModified("password")) return next();

    try {
        const salt = await bcrypt.genSalt(10);
        user.password = await bcrypt.hash(user.password, salt);
        next();
    } catch (error) {
        next(error as any);
    }
});

export const UserModel = mongoose.model<User>("users", userSchema);
