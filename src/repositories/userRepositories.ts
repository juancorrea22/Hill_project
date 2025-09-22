import { UserModel } from "@models/usersModel";
import { IUserRepository, User } from "types/UsersTypes";

export class UserRepository implements IUserRepository{
    private users: User[] = []

    async create(data: User): Promise<User> {
        const newUser = new UserModel(data);
        return await newUser.save();
    }

    async find(): Promise<User[]> {
        return await UserModel.find().exec(); // se usa el '.exec()' para que nos retorne solamente la data y no todo el doc de mongoose
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
}
