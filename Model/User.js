const mongoose = require("mongoose");
require("../DB/conn")

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
        unique: false
    },
    token:{
        type:String,
        default:""
    }
},
{timestamps:true}
)



const User = mongoose.model('USER', userSchema);
module.exports= User;