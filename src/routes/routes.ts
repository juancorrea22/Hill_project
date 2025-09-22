import { UserRepository } from "@repositories/userRepositories";
import { UserService } from "@services/userService";
import { Router } from "express";
import { IUserRepository, IUserService, User } from "types/UsersTypes";

const router = Router()

const userRepository: IUserRepository = new UserRepository()
const userService: IUserService = new UserService(userRepository)

export default () => {
    router.get("/health", (req, res) => {
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

    // Create
    router.post("/users", async(req, res) => {
        const newUser: User = req.body;
        const result = await userService.createUser(newUser);
        
        res.json(result);
    });


    // PUT
    router.put("/users/:id", async(req, res) => {
        const users = await userService.updateUser(req.params.id, req.body);
        res.json(users);
    })

    // DELETE
    router.delete("/users/:id", async(req, res) => {
        const users = await userService.deleteUser(req.params.id)
        res.json(users)
    })

    return router;
};