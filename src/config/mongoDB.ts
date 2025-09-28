import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config()

const mongoDbURL = process.env.MONGODM_URL_STRING as string

const artePura = `
 __  __  ____  _   _   ____   ____   ____   ____   ____  
|  \/  ||  _ \| \ | | |  _ \ |  _ \ |  _ \ |  _ \ |  _ \ 
| |\/| || | | |  \| | | | | || | | || | | || | | || | | |
| |  | || |_| | |\  | | |_| || |_| || |_| || |_| || |_| |
|_|  |_||____/|_| \_| |____/ |____/ |____/ |____/ |____/ 
     M O N G O   D B   C O N E C T A D O 🔗
`

export default (async() => {
    try {
        await mongoose.connect(mongoDbURL);
        console.log(`MONGO DB CONECTADO${artePura}`);
    } catch (error){
        console.log("error :>> ", error);
        process.exit(1);
    }
}) ();