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
exports.registerUser = void 0;
const userRepositories_1 = require("../../repositories/userRepositories");
const userService_1 = require("../../services/userService");
const userRepository = new userRepositories_1.UserRepository();
const userService = new userService_1.UserService(userRepository);
const registerUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const email = req.body.email;
        const emailExist = yield userService.findUserByGmail(email);
        if (emailExist) {
            return res.status(400).json({ message: "Email already exist!" });
        }
        const newUser = yield userService.createUser(req.body);
        res.status(201).json(newUser);
    }
    catch (error) {
        console.log(`error >> ${error}`);
        res.status(500).json(error);
    }
});
exports.registerUser = registerUser;
