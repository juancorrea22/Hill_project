"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const userContollers_1 = require("../controllers/userContollers");
const tareaController_1 = require("../controllers/tareaController");
const notificationController_1 = require("../controllers/notificationController");
const authControllers_1 = require("../controllers/auth/authControllers");
const router = (0, express_1.Router)();
exports.default = () => {
    router.get("/", (req, res) => {
        res.send("API IS FOCKING PUTA MIERDA!!!");
    });
    // auth Routes
    router.post("/auth/register/", authControllers_1.registerUser);
    router.post("/auth/login/", userContollers_1.userLogin);
    // USERS
    router.get("/users", userContollers_1.findUsers); // GET
    router.get("/users/:id", userContollers_1.findUsersById); // GET
    router.post("/users", userContollers_1.createUser); // POST
    router.put("/users/:id", userContollers_1.updateUser); // PUT
    router.delete("/users/:id", userContollers_1.deleteUser); // DELETE
    // TAREAS
    router.get("/tareas", tareaController_1.findTareas); // GET
    router.get("/tareas/:id", tareaController_1.findTareaById); // GET
    router.post("/tareas", tareaController_1.createTarea); // POST
    router.put("/tareas/:id", tareaController_1.updateTarea); // PUT
    router.delete("/tareas/:id", tareaController_1.deleteTarea); // DELETE
    // NOTIFICACIONES
    router.get("/notification", notificationController_1.findNotification); // GET
    router.get("/notification/:id", notificationController_1.findNotificationById); // GET
    router.post("/notification", notificationController_1.createNotification); // POST
    router.put("/notification/:id", notificationController_1.updateNotification); // PUT
    router.delete("/notification/:id", notificationController_1.deleteNotification); // Delete
    return router;
};
