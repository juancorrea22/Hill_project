"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserModel = void 0;
const mongoose_1 = __importStar(require("mongoose"));
const userSchema = new mongoose_1.Schema({
    _id: { type: mongoose_1.Schema.Types.ObjectId }, // no hace falta unique porque mongo siempre te coloca un id unico :)
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
exports.UserModel = mongoose_1.default.model("users", userSchema);
