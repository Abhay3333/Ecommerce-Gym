import mongoose from "mongoose";

const userSchema = mongoose.Schema({
    name:{
        type : String,
        required : true,
        trim : true
    },
    email:{
        type : String,
        required : true,
        unique : true
    },
    password:{
        type : String,
        required : true
    },
    phone:{
        type : Number ,
        required : true
    }
}, {timestamps:true});

export default mongoose.model('users', userSchema);