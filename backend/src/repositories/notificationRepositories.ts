import { NotificationModel } from "@models/NotificationModel";
import { INotificationRepository, Notification } from "types/NotificacionTypes";

export class NotificationRepository implements INotificationRepository{

    async create(data: Notification): Promise<Notification> {
        const newNotification = new NotificationModel(data);
        return await newNotification.save();
    }

    async find(): Promise<Notification[]> {
        return await NotificationModel.find().exec();
    }

    async findById(id: string): Promise<Notification | null> {
        return await NotificationModel.findById(id).exec();
    }

    async update(id: string, data: Partial<Notification>): Promise<Notification | null> {
        return await NotificationModel.findByIdAndUpdate(id, data, { new: true }).exec();
    }

    async delete(id: string): Promise<boolean> {
        const deleted = await NotificationModel.findByIdAndDelete(id).exec();
        return deleted != null;
    }
}