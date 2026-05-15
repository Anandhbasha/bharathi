import e from "express"
import express from "express"

const route = express.Router()

export const read = (req,res)=>{
    res.json("Node is working")
}

export const insert = (req, res) => {
    const {email,password } = req.body;
    res.status(202).json(`Added successfully`);
}

export const update = (req, res) => {
    const {id} = req.params
    const {email,password } = req.body
    res.status(202).json(`Updated successfully with id ${id}`);
}

export const deleteData = (req, res) => {
    const {id} = req.params
    res.status(202).json(`Deleted successfully with id ${id}`);
}
export default route