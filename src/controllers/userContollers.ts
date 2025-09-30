import { UserRepository } from "@repositories/userRepositories";
import { UserService } from "@services/userService";
import { IUserRepository, IUserService, User } from "types/UsersTypes";
import { Request, Response } from "express";


const userRepository:IUserRepository = new UserRepository();
const userService: IUserService = new UserService(userRepository);

export const findUsers = async (req: Request, res: Response) => {
    try {

        const users =   await userService.findUsers();
        if (users.length === 0) {
            return res.status(404).json({message: "no users Found."});
        }
        res.json(users);

    } catch (error) {
        console.log(`ereror: >> ${error}`);
        res.status(500).json(error);
    }
}

export const findUsersById = async (req: Request, res: Response) => {
    try {

        const user =   await userService.findUsersById(req.params.id);
        if (!user) {
            return res.status(404).json({message: "not user Found."});
        }
        res.json(user);

    } catch (error) {
        console.log(`ereror: >> ${error}`);
        res.status(500).json(error);
    }
}

export const createUser = async (req: Request, res: Response) => {
    try {

        const newUser: User = req.body;
        const result = await userService.createUser(newUser);

        res.status(201).json(result); // se manda tanto un status 201 como el json del usuario creado

    } catch (error) {
        console.log(`ereror: >> ${error}`);
        res.status(400).json(error);
    }
}

export const updateUser = async (req: Request, res: Response) => {
    try {

        const user =   await userService.updateUser(req.params.id, req.body);
        if (!user) {
            return res.status(404).json({message: "not user Found."});
        }
        
        res.json(user);

    } catch (error) {
        console.log(`ereror: >> ${error}`);
        res.status(500).json(error);
    }
}

export const deleteUser = async (req: Request, res: Response) => {
    try {

        const user =   await userService.deleteUser(req.params.id);
        if (!user) {
            return res.status(404).json({message: "not user Found."});
        }

        res.json(user);

    } catch (error) {
        console.log(`ereror: >> ${error}`);
        res.status(500).json(error);
    }
}

export const userLogin = async (req: Request, res: Response) => {
    try {
        const { name, password } = req.body;

        if (!name || !password) {
            return res.status(400).json({ message: "Name and password are required" });
        }

        const result = await userService.userLogin(name, password);

        if (!result) {
            return res.status(401).json({ message: "Invalid credentials" });
        }

        // Devuelve usuario y token
        res.json({
            user: result.user,
            token: result.token,
        });

    } catch (error) {
        console.log(`error: >> ${error}`);
        res.status(500).json(error);
    }
}