import { Router } from "express";
import { changePassword, createUser, deleteUser, findUsers, findUsersById, updateUser, userLogin } from "@controllers/userContollers";
import { createTarea, deleteTarea, findTareaById, findTareas, updateTarea } from "@controllers/tareaController";
import { createNotification, deleteNotification, findNotification, findNotificationById, updateNotification } from "@controllers/notificationController";
import { forgotPassword, registerUser } from "@controllers/auth/authControllers";
import { createLogro, deleteLogro, findLogro, findLogroById, updateLogro } from "@controllers/logroController";

const router = Router();

export default () => {
    router.get("/", (req, res) => {
        res.send("DE ALGUNA FORMA SE PODRIA DECIR QUE ESTA MONDA CORRE :)");
    });

    // AUTH
    router.post("/auth/register/", registerUser);
    router.post("/auth/login/", userLogin);
    router.post("/auth/forgot-password", forgotPassword);

    // USERS
    router.get("/users", findUsers);
    router.get("/users/:id", findUsersById);
    router.post("/users", createUser);
    router.put("/users/:id", updateUser);
    router.delete("/users/:id", deleteUser);
    router.put("/users/:id/change-password", changePassword);
    
    // TAREAS
    router.get("/tareas", findTareas);
    router.get("/tareas/:id", findTareaById);
    router.post("/tareas", createTarea);
    router.put("/tareas/:id", updateTarea);
    router.delete("/tareas/:id", deleteTarea);

    // NOTIFICACIONES
    router.get("/notification", findNotification);
    router.get("/notification/:id", findNotificationById);
    router.post("/notification", createNotification);
    router.put("/notification/:id", updateNotification);
    router.delete("/notification/:id", deleteNotification);

    // LOGROS
    router.get("/logros", findLogro);
    router.get("/logros/:id", findLogroById);
    router.post("/logros", createLogro);
    router.put("/logros/:id", updateLogro);
    router.delete("/logros/:id", deleteLogro);

    return router;
}