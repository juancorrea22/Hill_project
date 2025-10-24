import { Repositorio  } from "./RepositoryTypes";

export interface Notification {
    type: "logro" | "recordatorio",
    message: string
}

export interface INotificationRepository extends Repositorio<Notification>{}

export interface INotificationService {
    createNotification(notification: Notification): Promise<Notification>;
    findNotifications(): Promise<Notification[]>;
    findNotificationById(id: string): Promise<Notification | null>;
    updateNotification(id: string, user: Partial<Notification>): Promise<Notification | null>;
    deleteNotification(id: string): Promise<boolean>;
}