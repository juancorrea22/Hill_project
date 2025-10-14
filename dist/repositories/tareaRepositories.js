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
exports.TareaRepository = void 0;
const tareaModel_1 = require("../models/tareaModel");
class TareaRepository {
    create(data) {
        return __awaiter(this, void 0, void 0, function* () {
            const newTarea = new tareaModel_1.TareaModel(data);
            return yield newTarea.save();
        });
    }
    find() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield tareaModel_1.TareaModel.find().exec();
        });
    }
    findById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield tareaModel_1.TareaModel.findById(id).exec();
        });
    }
    update(id, data) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield tareaModel_1.TareaModel.findByIdAndUpdate(id, data, { new: true }).exec();
        });
    }
    delete(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const deleted = yield tareaModel_1.TareaModel.findByIdAndDelete(id).exec();
            return deleted != null;
        });
    }
}
exports.TareaRepository = TareaRepository;
