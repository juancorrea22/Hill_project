import { TareaRepository } from "@repositories/tareaRepositories";
import { TareaService } from "@services/tareaService";
import { ITareaRepository, ITareaService, Tarea } from "types/TareasTypes";
import { Request, Response } from "express";

const tareaRepository:ITareaRepository = new TareaRepository();
const tareaService: ITareaService = new TareaService(tareaRepository);

//corregir todo esto
export const findTareas = async (req: Request, res: Response) => {
    try {

        const tareas =   await tareaService.findTareas();
        if (tareas.length === 0) {
            return res.status(404).json({message: "no tareas Found."});
        }
        res.json(tareas);

    } catch (error) {
        console.log(`ereror: >> ${error}`);
        res.status(500).json(error);
    }
}

export const findTareaById = async (req: Request, res: Response) => {
    try {

        const tarea =   await tareaService.findTareaById(req.params.id);
        if (!tarea) {
            return res.status(404).json({message: "not tarea Found."});
        }
        res.json(tarea);

    } catch (error) {
        console.log(`ereror: >> ${error}`);
        res.status(500).json(error);
    }
}

export const createTarea = async (req: Request, res: Response) => {
    try {

        const newTarea: Tarea = req.body;
        const result = await tareaService.createTarea(newTarea);

        res.status(201).json(result); // se manda tanto un status 201 como el json del usuario creado

    } catch (error) {
        console.log(`ereror: >> ${error}`);
        res.status(400).json(error);
    }
}

export const updateTarea = async (req: Request, res: Response) => {
    try {

        const tarea =   await tareaService.updateTarea(req.params.id, req.body);
        if (!tarea) {
            return res.status(404).json({message: "not tarea Found."});
        }
        
        res.json(tarea);

    } catch (error) {
        console.log(`ereror: >> ${error}`);
        res.status(500).json(error);
    }
}

export const deleteTarea = async (req: Request, res: Response) => {
    try {

        const tarea =   await tareaService.deleteTarea(req.params.id);
        if (!tarea) {
            return res.status(404).json({message: "not tarea Found."});
        }

        res.json(tarea);

    } catch (error) {
        console.log(`ereror: >> ${error}`);
        res.status(500).json(error);
    }
}