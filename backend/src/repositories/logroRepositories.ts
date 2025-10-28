import { LogroModel } from "@models/LogroModel";
import { ILogroRepository, Logro } from "types/LogrosTypes";

export class LogroRepository implements ILogroRepository{

    async create(data: Logro): Promise<Logro> {
        const newLogro = new LogroModel(data);
        return await newLogro.save();
    }

    async find(): Promise<Logro[]> {
        return await LogroModel.find().exec();
    }

    async findById(id: string): Promise<Logro | null> {
        return await LogroModel.findById(id).exec();
    }

    async update(id: string, data: Partial<Logro>): Promise<Logro | null> {
        return await LogroModel.findByIdAndUpdate(id, data, {new: true}).exec();
    }

    async delete(id: string): Promise<boolean> {
        const deleted = await LogroModel.findByIdAndDelete(id).exec();
        return deleted != null;
    }
}