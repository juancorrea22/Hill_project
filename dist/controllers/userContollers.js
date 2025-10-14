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
exports.userLogin = exports.deleteUser = exports.updateUser = exports.createUser = exports.findUsersById = exports.findUsers = void 0;
const userRepositories_1 = require("../repositories/userRepositories");
const userService_1 = require("../services/userService");
const userRepository = new userRepositories_1.UserRepository();
const userService = new userService_1.UserService(userRepository);
const findUsers = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const users = yield userService.findUsers();
        if (users.length === 0) {
            return res.status(404).json({ message: "no users Found." });
        }
        res.json(users);
    }
    catch (error) {
        console.log(`ereror: >> ${error}`);
        res.status(500).json(error);
    }
});
exports.findUsers = findUsers;
const findUsersById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const user = yield userService.findUsersById(req.params.id);
        if (!user) {
            return res.status(404).json({ message: "not user Found." });
        }
        res.json(user);
    }
    catch (error) {
        console.log(`ereror: >> ${error}`);
        res.status(500).json(error);
    }
});
exports.findUsersById = findUsersById;
const createUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const newUser = req.body;
        const result = yield userService.createUser(newUser);
        res.status(201).json(result); // se manda tanto un status 201 como el json del usuario creado
    }
    catch (error) {
        console.log(`ereror: >> ${error}`);
        res.status(400).json(error);
    }
});
exports.createUser = createUser;
const updateUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const user = yield userService.updateUser(req.params.id, req.body);
        if (!user) {
            return res.status(404).json({ message: "not user Found." });
        }
        res.json(user);
    }
    catch (error) {
        console.log(`ereror: >> ${error}`);
        res.status(500).json(error);
    }
});
exports.updateUser = updateUser;
const deleteUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const user = yield userService.deleteUser(req.params.id);
        if (!user) {
            return res.status(404).json({ message: "not user Found." });
        }
        res.json(user);
    }
    catch (error) {
        console.log(`ereror: >> ${error}`);
        res.status(500).json(error);
    }
});
exports.deleteUser = deleteUser;
const userLogin = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { name, password } = req.body;
        if (!name || !password) {
            return res.status(400).json({ message: "Name and password are required" });
        }
        const result = yield userService.userLogin(name, password);
        if (!result) {
            return res.status(401).json({ message: "Invalid credentials" });
        }
        // Devuelve usuario y token
        res.json({
            user: result.user,
            token: result.token,
        });
    }
    catch (error) {
        console.log(`error: >> ${error}`);
        res.status(500).json(error);
    }
});
exports.userLogin = userLogin;
