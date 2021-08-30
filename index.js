const express = require("express");
const mongoose = require("mongoose");
const app = express();
const authRoute = require("./Routes/Auth");
const recipiRoute = require("./Routes/recipi");


require("./DB/conn");
const port= process.env.PORT

app.use(express.json());
//middleware


app.get("/",(req,res)=>{
    res.send("welcome to my node app");
})
app.get("/about",(req,res)=>{
    res.send("welcome to my about app");
    console.log("about");
})

//middleware

app.use("/api/auth",authRoute);
app.use("/api/recipi",recipiRoute);





app.listen({port},()=>{
    console.log(`server is running port no.${port} `);
})