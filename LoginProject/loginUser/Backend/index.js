import express from 'express';
import dotenv from 'dotenv';
import router from './Router/Route.js';
import Database from './Database.js';
import cors from "cors"

dotenv.config();
const app = express();
app.use(express.json());

app.use(cors({
    origin:"http://localhost:5173",
    methods:["GET","POST","PUT","DELETE"],
    allowedHeaders:["content-Type","Authorization"]
}))

Database("mongodb://127.0.0.1:27017/Newone")
app.use("/",router)

app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`);
});