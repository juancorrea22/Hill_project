import { NotificationRepository } from "@repositories/notificationRepositories";
import { NotificationService } from "@services/notificationService";
import { INotificationService, INotificationRepository, Notification } from "types/NotificacionTypes";
import { Request, Response } from "express";

const notificationRepository: NotificationRepository = new NotificationRepository();
const notificationService: INotificationService = new NotificationService(notificationRepository);

export const findNotification = async (req: Request, res: Response) => {
    try {

        const notification =   await notificationService.findNotifications();
        if (notification.length === 0) {
            return res.status(404).json({message: "no notification Found."});
        }
        res.json(notification);

    } catch (error) {
        console.log(`ereror: >> ${error}`);
        res.status(500).json(error);
    }
}

export const findNotificationById = async (req: Request, res: Response) => {
    try {

        const notification =   await notificationService.findNotificationById(req.params.id);
        if (!notification) {
            return res.status(404).json({message: "not notification Found."});
        }
        res.json(notification);

    } catch (error) {
        console.log(`ereror: >> ${error}`);
        res.status(500).json(error);
    }
}

export const createNotification = async (req: Request, res: Response) => {
    try {

        const newNotification: Notification = req.body;
        const result = await notificationService.createNotification(newNotification);

        res.status(201).json(result); // se manda tanto un status 201 como el json del usuario creado

    } catch (error) {
        console.log(`ereror: >> ${error}`);
        res.status(400).json(error);
    }
}

export const updateNotification = async (req: Request, res: Response) => {
    try {

        const notification =   await notificationService.updateNotification(req.params.id, req.body);
        if (!notification) {
            return res.status(404).json({message: "not notification Found."});
        }
        
        res.json(notification);

    } catch (error) {
        console.log(`ereror: >> ${error}`);
        res.status(500).json(error);
    }
}

export const deleteNotification = async (req: Request, res: Response) => {
    try {

        const notification =   await notificationService.deleteNotification(req.params.id);
        if (!notification) {
            return res.status(404).json({message: "not notification Found."});
        }

        res.json(notification);

    } catch (error) {
        console.log(`ereror: >> ${error}`);
        res.status(500).json(error);
    }
}