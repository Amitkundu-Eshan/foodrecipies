const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config({ path: "./config.env" });
const mongo_url = process.env.URL

mongoose.connect(mongo_url).then(()=>{
    console.log('connection successful...');
}).catch((err)=>{
    console.log('connection error...');
});