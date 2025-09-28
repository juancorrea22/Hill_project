import { Router } from "express";
import { createUser, deleteUser, findUsers, findUsersById, updateUser } from "@controllers/userContollers";
import { createTarea, deleteTarea, findTareaById, findTareas, updateTarea } from "@controllers/tareaController";

const router = Router()

export default () => {
    router.get("/", (req, res) => {
        res.send("API IS FOCKING PUTA MIERDA!!!")
    });

    // GET
    router.get("/users", findUsers);

    router.get("/users/:id", findUsersById);

    router.get("/tareas", findTareas);

    router.get("/tareas/:id", findTareaById);

    // POST
    router.post("/users", createUser);

    router.post("/tareas", createTarea);

    // PUT
    router.put("/users/:id", updateUser);

    router.put("/tareas/:id", updateTarea);

    // DELETE
    router.delete("/users/:id", deleteUser);

    router.delete("/tareas/:id", deleteTarea);

    return router;
};