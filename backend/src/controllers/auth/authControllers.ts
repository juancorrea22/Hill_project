import { UserRepository } from "@repositories/userRepositories";
import { UserService } from "@services/userService";
import { Request, Response } from "express";
import { IUserRepository, IUserService } from "types/UsersTypes";

const userRepository: IUserRepository = new UserRepository();
const userService: IUserService = new UserService(userRepository);

export const registerUser = async (req: Request, res: Response) => {
    try {
        const email = req.body.email;
        const emailExist = await userService.findUserByGmail(email);
        
        if (emailExist) {
            return res.status(400).json({ message: "Email already exist!" });
        }

        const newUser = await userService.createUser(req.body);
        res.status(201).json(newUser);
    } catch (error) {
        console.log(`error >> ${error}`);
        res.status(500).json(error); 
    }
};

export const forgotPassword = async (req: Request, res: Response) => {
    try {
        const { email } = req.body;
        const user = await userService.findUserByGmail(email);

        if (!user) {
            return res.status(404).json({ message: "No existe un usuario con ese correo" });
        }

        const token = Math.random().toString(36).substring(2, 12);

        console.log(`🔐 Token de recuperación para ${email}: ${token}`);

        return res.status(200).json({
            message: "Se ha enviado un correo con instrucciones para recuperar tu contraseña",
            token
        });
    } catch (error) {
        console.error("Error en forgotPassword:", error);
        return res.status(500).json({ message: "Error del servidor" });
    }
};
