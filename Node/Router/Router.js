import express from "express"
import { insert, read } from "../Controller/Controller.js"

const route = express.Router()

route.get("/",read)
route.post("/",insert)

export default route