import express from "express"
import dotenv from "dotenv"
import cors from "cors"
import mongoose from "mongoose"
import adminRouter from "./routes/admin.routes.js"
import reserveRouter from "./routes/reserve.routes.js"
import { checkToken } from "./utils/middlewares.js"

dotenv.config();

const connectToDataBase = async () =>{
        await mongoose.connect(process.env.DB_URI)
};

connectToDataBase().then(
        res => {
                console.log("Conexion con la base de datos")
        }
).catch(
        err => {
                console.log("Sin conexion a la base de datos");
                process.exit()
        }
        
)


const PORT = process.env.PORT;

const app = express()
app.use(cors());

app.use(express.json())
app.use('/admin', adminRouter)
app.use('/reserve', reserveRouter)

app.listen(PORT, () => {
        console.log("El servidor se esta ejecutando " + PORT)
})

