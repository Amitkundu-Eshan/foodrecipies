const router = require("express").Router()
const User = require("../Model/User");
require("../DB/conn");

//register auth

router.post('/register',async(req,res)=>{
    const {username,email,password}=req.body
    try{ 
    //find email
    const useremail = await User.findOne({email:email})
        if(useremail){
            return res.status(501).json({message:"this email has already exist"});
        }
        else{
            const user = await new User({username,email,password});
            const response = await user.save();
            if(response){
                return res.status(201).json({message:"register successful"});
            }
            else{
                return res.status(500).json({message:"some error"});
            }

        }
    }
    catch(error){
    return res.status(500).json({error:'Failed to register.'});
    }
});

//login auth


router.post("/login",async(req,res)=>{
    const {email,password}=req.body

    try{
        const useremail= await User.findOne({email:email});
        if(useremail){
            if(useremail.password===password){

                return res.status(201).json(useremail);
                

            }
            else{
                return res.status(400).json({error:'invalid password'});
            }
        }
        else{
            return res.status(300).json({error:'user not found'});
        }

    }
    catch(error){
        return res.status(500).json({error:'Failed to login.'});
    }

})

module.exports = router