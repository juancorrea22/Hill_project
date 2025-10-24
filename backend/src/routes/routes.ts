import { Router } from "express";
import { createUser, deleteUser, findUsers, findUsersById, updateUser, userLogin } from "@controllers/userContollers";
import { createTarea, deleteTarea, findTareaById, findTareas, updateTarea } from "@controllers/tareaController";
import { createNotification, deleteNotification, findNotification, findNotificationById, updateNotification } from "@controllers/notificationController";
import { forgotPassword, registerUser } from "@controllers/auth/authControllers";

const router = Router()

export default () => {
    router.get("/", (req, res) => {
        res.send("DE ALGUNA FORMA SE PODRIA DECIR QUE ESTA MONDA CORRE :)")
    });

    // auth Routes
    router.post("/auth/register/", registerUser);
    router.post("/auth/login/", userLogin);
    router.post("/auth/forgot-password", forgotPassword);

    // USERS
    router.get("/users", findUsers); // GET
    router.get("/users/:id", findUsersById); // GET
    router.post("/users", createUser); // POST
    router.put("/users/:id", updateUser); // PUT
    router.delete("/users/:id", deleteUser); // DELETE
    
    // TAREAS
    router.get("/tareas", findTareas); // GET
    router.get("/tareas/:id", findTareaById); // GET
    router.post("/tareas", createTarea); // POST
    router.put("/tareas/:id", updateTarea); // PUT
    router.delete("/tareas/:id", deleteTarea); // DELETE

    // NOTIFICACIONES
    router.get("/notification", findNotification); // GET
    router.get("/notification/:id", findNotificationById); // GET
    router.post("/notification", createNotification); // POST
    router.put("/notification/:id", updateNotification); // PUT
    router.delete("/notification/:id", deleteNotification); // Delete

    return router;
};