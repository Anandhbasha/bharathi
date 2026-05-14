import express from "express"
import route from "./Router/Router.js"

const app = express()
const PORT = 3487
app.use(express.json())
app.use("/",route)

app.listen(PORT,()=>{
    console.log(`Server is running under http://localhost:${PORT}`);
    
})

// npm i nodemon express