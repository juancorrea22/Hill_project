import { INotificationService, INotificationRepository, Notification } from "types/NotificacionTypes";

export class NotificationService implements INotificationService {
    private notificationRepository: INotificationRepository;
    constructor(notificationRepository: INotificationRepository) {
        this.notificationRepository = notificationRepository;
        }
    
        async createNotification(tarea: Notification): Promise<Notification> {
            return this.notificationRepository.create(tarea);
        }
    
        async findNotifications(): Promise<Notification[]> {
            return this.notificationRepository.find();
        }
    
        async findNotificationById(id: string): Promise<Notification | null> {
            return this.notificationRepository.findById(id);
        }
    
        async updateNotification(id: string, tarea: Partial<Notification>): Promise<Notification | null> {
            return this.notificationRepository.update(id, tarea);
        }
    
        async deleteNotification(id: string): Promise<boolean> {
            return this.notificationRepository.delete(id);
        }
}