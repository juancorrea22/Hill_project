import { UserModel } from "@models/usersModel";
import { Query } from "types/RepositoryTypes";
import { IUserRepository, User } from "types/UsersTypes";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export class UserRepository implements IUserRepository{

    async create(data: User): Promise<User> {
        const newUser = new UserModel(data);
        return await newUser.save();
    }

    async find(): Promise<User[]> {
        return await UserModel.find().exec(); // se usa el '.exec()' para que nos retorne solamente la data y no todo el doc de mongoose
    }

    async findOne(query: Query): Promise<User | null> {
        return await UserModel.findOne(query).exec();
    }

    async findById(id: string): Promise<User | null> {
        return await UserModel.findById(id).exec();
    }

    async update(id: string, data: Partial<User>): Promise<User | null> {
        return await UserModel.findByIdAndUpdate(id, data, {new: true}).exec(); // el '{new: true}' es para que retorne la data actualizada
    }

    async delete(id: string): Promise<boolean> {
        const deleted = await UserModel.findByIdAndDelete(id).exec();
        return deleted != null;
    }

    async logIn(name: string, password: string): Promise<{ user: User; token: string } | null> {
        // verificar si el username existe en el mongo
        const user = await UserModel.findOne({ name }).exec();
        if (!user) return null;

        // Verificar si esa contraseña corresponde a dicho usuario
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) return null;

        // Generar token
        const token = jwt.sign(
            { id: user._id.toString(), email: user.email },
            process.env.JWT_SECRET as string,
            { expiresIn: "1h" }
        );

        return { user, token };
    }
    
}
