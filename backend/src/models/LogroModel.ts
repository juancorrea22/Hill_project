import mongoose, { Schema } from "mongoose";
import { Logro } from "types/LogrosTypes";

const logroSchema: Schema = new Schema<Logro> ({
    name: {type: String, required: true},
    rango: {type: String, required: true, enum: ["oro", "plata", "bronce"]},
    description: {type: String, required: true}
},{ timestamps: true })

export const LogroModel = mongoose.model<Logro>("logros", logroSchema)