const reci = require("../Model/Reci");
const User = require("../Model/User");

const router = require("express").Router();

//add recipies
router.post("/addrecipi/:_id",async(req,res)=>{
    try{
        const isuser = await User.findById({_id:req.params._id})
        if(isuser){
            const newreci = await new reci(req.body)
            const postreci = await newreci.save();
            return res.status(201).json(postreci);   
        }else{
            return res.status(500).json({message:"unauthorized person"});
        }
    }
    catch(error){
        return res.status(500).json({message:"error"});
    }
})

//get recipie

router.get("/getrecipi/:_id",async(req,res)=>{
    try{
        const isuser = await User.findById({_id:req.params._id})
        if(isuser){
            const allreci = await reci.find({});
            if(allreci){
                return res.status(201).json(allreci);
            }
            else{
                return res.status(500).json({message:"unauthorized person"});
            }
        }else{
            return res.status(500).json({message:"unauthorized person"});
        }
    }
    catch(error){
        return res.status(500).json({message:"get error"});
    }
})



module.exports = router;