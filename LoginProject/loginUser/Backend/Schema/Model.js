import mongoose from "mongoose";

const loginSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
})

const user = mongoose.model("users", loginSchema,"NewTable");

export default user;