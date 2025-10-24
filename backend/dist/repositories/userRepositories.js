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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserRepository = void 0;
const usersModel_1 = require("@models/usersModel");
const bcrypt_1 = __importDefault(require("bcrypt"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
class UserRepository {
    create(data) {
        return __awaiter(this, void 0, void 0, function* () {
            const newUser = new usersModel_1.UserModel(data);
            return yield newUser.save();
        });
    }
    find() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield usersModel_1.UserModel.find().exec(); // se usa el '.exec()' para que nos retorne solamente la data y no todo el doc de mongoose
        });
    }
    findOne(query) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield usersModel_1.UserModel.findOne(query).exec();
        });
    }
    findById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield usersModel_1.UserModel.findById(id).exec();
        });
    }
    update(id, data) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield usersModel_1.UserModel.findByIdAndUpdate(id, data, { new: true }).exec(); // el '{new: true}' es para que retorne la data actualizada
        });
    }
    delete(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const deleted = yield usersModel_1.UserModel.findByIdAndDelete(id).exec();
            return deleted != null;
        });
    }
    userLogin(name, password) {
        return __awaiter(this, void 0, void 0, function* () {
            // verificar si el username existe en el mongo
            const user = yield usersModel_1.UserModel.findOne({ name }).exec();
            if (!user)
                return null;
            // Verificar si esa contraseña corresponde a dicho usuario
            const isMatch = yield bcrypt_1.default.compare(password, user.password);
            if (!isMatch)
                return null;
            // Generar token
            const token = jsonwebtoken_1.default.sign({ id: user._id.toString(), email: user.email }, process.env.JWT_SECRET, { expiresIn: "1h" });
            return { user, token };
        });
    }
}
exports.UserRepository = UserRepository;
