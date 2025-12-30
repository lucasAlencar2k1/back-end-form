import express from "express"
import connection_data_base from "./config/connection_data_base.js"
import chalk from "chalk"
import route from "./routes/index.js"
import cors from "cors"
import dotenv from "dotenv"
dotenv.config()

const app = express()

app.use(cors({origin: "*"}))

const connection_db = await connection_data_base()

connection_db.once("open", () => {
    console.log(chalk.bgGreenBright("Conectado ao banco de dados."))    
})

connection_db.on("error", () => {
    console.log(chalk.bgRedBright("Falha ao conectar com o banco de dados!!!"))    
})

route(app)

export default app;