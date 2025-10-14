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
const mongoose_1 = __importDefault(require("mongoose"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const mongoDbURL = process.env.MONGODM_URL_STRING;
const artePura = `
 __  __  ____  _   _   ____   ____   ____   ____   ____  
|  \/  ||  _ \| \ | | |  _ \ |  _ \ |  _ \ |  _ \ |  _ \ 
| |\/| || | | |  \| | | | | || | | || | | || | | || | | |
| |  | || |_| | |\  | | |_| || |_| || |_| || |_| || |_| |
|_|  |_||____/|_| \_| |____/ |____/ |____/ |____/ |____/ 
     M O N G O   D B   C O N E C T A D O 🔗
`;
exports.default = (() => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield mongoose_1.default.connect(mongoDbURL);
        console.log(`MONGO DB CONECTADO${artePura}`);
    }
    catch (error) {
        console.log("error :>> ", error);
        process.exit(1);
    }
}))();
