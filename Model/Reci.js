const mongoose = require("mongoose");
require("../DB/conn");

const postSchema = new mongoose.Schema({

    desert:{
        type:String,
        default:""
    },
    caption:{
        type:String,
        default:"",
    },
    taste:{
        type:String,
        default:""
    }

},

    {timestamps: true}

)

const Reci = mongoose.model("Reci",postSchema);
module.exports = Reci;