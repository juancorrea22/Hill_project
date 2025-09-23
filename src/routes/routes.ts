import { UserRepository } from "@repositories/userRepositories";
import { UserService } from "@services/userService";
import { Router } from "express";
import { IUserRepository, IUserService, User } from "types/UsersTypes";

import { TareaRepository } from "@repositories/tareaRepositories";
import { TareaService } from "@services/tareaService";
import { ITareaRepository, ITareaService, Tarea } from "types/TareasTypes";

const router = Router()

const userRepository: IUserRepository = new UserRepository()
const userService: IUserService = new UserService(userRepository)

const tareaRepository: ITareaRepository = new TareaRepository()
const tareaService: ITareaService = new TareaService(tareaRepository)

export default () => {
    router.get("/", (req, res) => {
        res.send("API IS FOCKING PUTA MIERDA!!!")
    });

    // GET
    router.get("/users", async(req, res) => {
        const users = await userService.findUsers();
        res.json(users);
    });

    router.get("/users/:id", async(req, res) => {
        const users = await userService.findUsersById(req.params.id); // el id es el que se pasa por la url en la parte de los ':id'
        res.json(users);
    })

    router.get("/tareas", async(req, res) => {
        const tarea = await tareaService.findTareas();
        res.json(tarea);
    })

    router.get("/tareas/:id", async(req, res) => {
        const tarea = await tareaService.findTareaById(req.params.id);
        res.json(tarea);
    })

    // POST
    router.post("/users", async(req, res) => {
        const newUser: User = req.body;
        const result = await userService.createUser(newUser);
        
        res.json(result);
    });

    router.post("/tareas", async(req, res) => {
        const newTarea: Tarea = req.body;
        const result = await tareaService.createTarea(newTarea);

        res.json(result);
    })

    // PUT
    router.put("/users/:id", async(req, res) => {
        const users = await userService.updateUser(req.params.id, req.body);
        res.json(users);
    })

    router.put("/tareas/:id", async(req, res) => {
        const tareas = await tareaService.updateTarea(req.params.id, req.body);
        res.json(tareas);
    })

    // DELETE
    router.delete("/users/:id", async(req, res) => {
        const users = await userService.deleteUser(req.params.id);
        res.json(users);
    })

    router.delete("/tareas/:id", async(req, res) => {
        const tareas = await tareaService.deleteTarea(req.params.id);
        res.json(tareas);
    })

    return router;
};