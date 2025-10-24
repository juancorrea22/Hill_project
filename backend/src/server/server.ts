import routes from "@routes/routes"
import express, { type Application } from "express"
import morgan from "morgan"
import cors from "cors"

const app: Application = express()

app.use(cors()) // para comunicar el front con el back
app.use(express.json())
app.use(morgan("dev"))

app.use("/api", routes())

export default app