import mongoose, { Schema } from "mongoose";
import { Notification } from "types/NotificacionTypes";

const notificationSchema: Schema = new Schema<Notification> ({
    type: {type: String, required: true, enum: ["logro", "recordatorio"]},
    message: {type: String, required: true}
},{ timestamps: true })

export const NotificationModel = mongoose.model<Notification>("notifications", notificationSchema)