import express from "express"

const route = express.Router()

export const read = (req,res)=>{
    res.json("Node is working")
}

export const insert = (req, res) => {
    const {email,password } = req.body;
    res.status(202).json(`Added successfully`);
}

export default route