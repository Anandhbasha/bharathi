import user from "../Schema/Model.js"

export const readData = async(req,res)=>{
    try {
        const read = await user.find();
        res.status(200).json(read); 
    } catch (error) {
        res.status(500).json({ message: "Error fetching data" });
    }
}

export const insertNewData = async(req,res)=>{
    try{
        const {email,password} = req.body
        const existUser = await user.findOne({email})
        if(existUser){
            res.status(405).json({message:"User Already exist"})
        }
        const insertData = await user.insertOne({email,password})
         res.status(202).json({message:insertData})
    }
    catch(err){
         res.status(405).json({message:err})
    }
}

export const updateUser = async(req,res)=>{
    try {
    const {email} = req.params
    const {password } = req.body
    const existUser = await user.findOne({email})
    if(existUser){
        const update = await user.updateMany({email},{$set:{password}})
        res.status(201).json({message:"Upadated Successfully"})
    }
    res.status(408).json({message:"Unable to Update"})
    } catch (error) {
        res.status(409).json({message:error})
    }
}


export const deleteUser = async(req,res)=>{
    try {
    const {email} = req.params
    const existUser = await user.findOne({email})
    if(existUser){
        const dlete = await user.deleteMany({email})
        res.status(201).json({message:"Deleted Successfully"})
    }
    res.status(408).json({message:"Unable to Delete"})
    } catch (error) {
        res.status(409).json({message:error})
    }
}
