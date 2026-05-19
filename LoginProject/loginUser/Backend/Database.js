import mongoose from "mongoose";

const Database = (URL)=>{
    try{
        mongoose.connect(URL);
        const db = mongoose.connection;
        db.once("open",()=>{
            console.log("Database is connected");
    })
    }
   catch(error){
    console.log("Error while connecting to database",error);
   }
}
export default Database;