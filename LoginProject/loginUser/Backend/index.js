import express from 'express';
import dotenv from 'dotenv';
import router from './Router/Route.js';
import Database from './Database.js';


dotenv.config();
const app = express();
app.use(express.json());

Database("mongodb://127.0.0.1:27017/Newone")
app.use("/",router)

app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`);
});