"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteTarea = exports.updateTarea = exports.createTarea = exports.findTareaById = exports.findTareas = void 0;
const tareaRepositories_1 = require("../repositories/tareaRepositories");
const tareaService_1 = require("../services/tareaService");
const tareaRepository = new tareaRepositories_1.TareaRepository();
const tareaService = new tareaService_1.TareaService(tareaRepository);
const findTareas = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const tareas = yield tareaService.findTareas();
        if (tareas.length === 0) {
            return res.status(404).json({ message: "no tareas Found." });
        }
        res.json(tareas);
    }
    catch (error) {
        console.log(`ereror: >> ${error}`);
        res.status(500).json(error);
    }
});
exports.findTareas = findTareas;
const findTareaById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const tarea = yield tareaService.findTareaById(req.params.id);
        if (!tarea) {
            return res.status(404).json({ message: "not tarea Found." });
        }
        res.json(tarea);
    }
    catch (error) {
        console.log(`ereror: >> ${error}`);
        res.status(500).json(error);
    }
});
exports.findTareaById = findTareaById;
const createTarea = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const newTarea = req.body;
        const result = yield tareaService.createTarea(newTarea);
        res.status(201).json(result); // se manda tanto un status 201 como el json del usuario creado
    }
    catch (error) {
        console.log(`ereror: >> ${error}`);
        res.status(400).json(error);
    }
});
exports.createTarea = createTarea;
const updateTarea = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const tarea = yield tareaService.updateTarea(req.params.id, req.body);
        if (!tarea) {
            return res.status(404).json({ message: "not tarea Found." });
        }
        res.json(tarea);
    }
    catch (error) {
        console.log(`ereror: >> ${error}`);
        res.status(500).json(error);
    }
});
exports.updateTarea = updateTarea;
const deleteTarea = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const tarea = yield tareaService.deleteTarea(req.params.id);
        if (!tarea) {
            return res.status(404).json({ message: "not tarea Found." });
        }
        res.json(tarea);
    }
    catch (error) {
        console.log(`ereror: >> ${error}`);
        res.status(500).json(error);
    }
});
exports.deleteTarea = deleteTarea;
