import { LogroRepository } from "@repositories/logroRepositories";
import { LogroService } from "@services/logroService";
import { ILogroService, Logro } from "types/LogrosTypes";
import { Request, Response } from "express";

const logroRepository: LogroRepository = new LogroRepository();
const logroService: ILogroService = new LogroService(logroRepository);

export const findLogro = async (req: Request, res: Response) => {
    try {

        const logro =   await logroService.findLogros();
        if (logro.length === 0) {
            return res.status(404).json({message: "no logro Found."});
        }
        res.json(logro);

    } catch (error) {
        console.log(`ereror: >> ${error}`);
        res.status(500).json(error);
    }
}

export const findLogroById = async (req: Request, res: Response) => {
    try {

        const logro =   await logroService.findLogroById(req.params.id);
        if (!logro) {
            return res.status(404).json({message: "not logro Found."});
        }
        res.json(logro);

    } catch (error) {
        console.log(`ereror: >> ${error}`);
        res.status(500).json(error);
    }
}

export const createLogro = async (req: Request, res: Response) => {
    try {

        const newLogro: Logro = req.body;
        const result = await logroService.createLogro(newLogro);

        res.status(201).json(result); // se manda tanto un status 201 como el json del usuario creado

    } catch (error) {
        console.log(`ereror: >> ${error}`);
        res.status(400).json(error);
    }
}

export const updateLogro = async (req: Request, res: Response) => {
    try {

        const logro =   await logroService.updateLogro(req.params.id, req.body);
        if (!logro) {
            return res.status(404).json({message: "not logro Found."});
        }
        
        res.json(logro);

    } catch (error) {
        console.log(`ereror: >> ${error}`);
        res.status(500).json(error);
    }
}

export const deleteLogro = async (req: Request, res: Response) => {
    try {

        const logro =   await logroService.deleteLogro(req.params.id);
        if (!logro) {
            return res.status(404).json({message: "not logro Found."});
        }

        res.json(logro);

    } catch (error) {
        console.log(`ereror: >> ${error}`);
        res.status(500).json(error);
    }
}