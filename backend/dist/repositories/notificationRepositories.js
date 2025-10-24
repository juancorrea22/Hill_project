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
exports.NotificationRepository = void 0;
const NotificationModel_1 = require("@models/NotificationModel");
class NotificationRepository {
    create(data) {
        return __awaiter(this, void 0, void 0, function* () {
            const newNotification = new NotificationModel_1.NotificationModel(data);
            return yield newNotification.save();
        });
    }
    find() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield NotificationModel_1.NotificationModel.find().exec();
        });
    }
    findById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield NotificationModel_1.NotificationModel.findById(id).exec();
        });
    }
    update(id, data) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield NotificationModel_1.NotificationModel.findByIdAndUpdate(id, data, { new: true }).exec();
        });
    }
    delete(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const deleted = yield NotificationModel_1.NotificationModel.findByIdAndDelete(id).exec();
            return deleted != null;
        });
    }
}
exports.NotificationRepository = NotificationRepository;
