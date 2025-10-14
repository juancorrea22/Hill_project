"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteNotification = exports.updateNotification = exports.createNotification = exports.findNotificationById = exports.findNotification = void 0;
const notificationRepositories_1 = require("../repositories/notificationRepositories");
const notificationService_1 = require("../services/notificationService");
const notificationRepository = new notificationRepositories_1.NotificationRepository();
const notificationService = new notificationService_1.NotificationService(notificationRepository);
const findNotification = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const notification = yield notificationService.findNotifications();
        if (notification.length === 0) {
            return res.status(404).json({ message: "no notification Found." });
        }
        res.json(notification);
    }
    catch (error) {
        console.log(`ereror: >> ${error}`);
        res.status(500).json(error);
    }
});
exports.findNotification = findNotification;
const findNotificationById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const notification = yield notificationService.findNotificationById(req.params.id);
        if (!notification) {
            return res.status(404).json({ message: "not notification Found." });
        }
        res.json(notification);
    }
    catch (error) {
        console.log(`ereror: >> ${error}`);
        res.status(500).json(error);
    }
});
exports.findNotificationById = findNotificationById;
const createNotification = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const newNotification = req.body;
        const result = yield notificationService.createNotification(newNotification);
        res.status(201).json(result); // se manda tanto un status 201 como el json del usuario creado
    }
    catch (error) {
        console.log(`ereror: >> ${error}`);
        res.status(400).json(error);
    }
});
exports.createNotification = createNotification;
const updateNotification = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const notification = yield notificationService.updateNotification(req.params.id, req.body);
        if (!notification) {
            return res.status(404).json({ message: "not notification Found." });
        }
        res.json(notification);
    }
    catch (error) {
        console.log(`ereror: >> ${error}`);
        res.status(500).json(error);
    }
});
exports.updateNotification = updateNotification;
const deleteNotification = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const notification = yield notificationService.deleteNotification(req.params.id);
        if (!notification) {
            return res.status(404).json({ message: "not notification Found." });
        }
        res.json(notification);
    }
    catch (error) {
        console.log(`ereror: >> ${error}`);
        res.status(500).json(error);
    }
});
exports.deleteNotification = deleteNotification;
