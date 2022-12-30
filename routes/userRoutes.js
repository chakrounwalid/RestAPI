const express = require ('express')
const router = express.Router()
const user = require ("../models/user")


//create user 
router.post("/newuser",async(req,res)=>{
    try{
        const newUser = new user(req.body);
        await newUser.save()
        res.send({msg:"user added"})
    }catch (error){
        res.send(error.message)
    }
})

//all user 
router.get("/alluser",async(req,res)=>{
    try{
        const alluser = await user.find();
        res.send(alluser)
    }catch (error){
        res.send(error.message)
    }
})

//edit user by id
router.put("/update/:id",async(req,res)=>{
    try{
        const updated = await user.findOneAndUpdate({
            _id: req.params.id,
            $set: { ...req.body },
        });
        res.send(updated)
    }catch (error){
        res.send(error.message)
    }
})

//delete user by id
router.delete("/delete/:id",async(req,res)=>{
    try{
        const deleted = await user.findByIdAndDelete(req.params.id);
        res.send({deleted,msg:"user deleted"})
    }catch (error){
        res.send(error.message)
    }
})


module.exports=router