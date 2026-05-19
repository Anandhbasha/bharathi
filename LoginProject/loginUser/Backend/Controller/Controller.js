import user from "../Schema/Model.js"

export const readData = async(req,res)=>{
    try {
        const read = await user.find();
        res.status(200).json(read); 
    } catch (error) {
        res.status(500).json({ message: "Error fetching data" });
    }
}