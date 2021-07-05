import express from "express"
import User from "../Models/userSchema.js"
import { data } from "../Seed/data.js";
import bcrypt from "bcryptjs"

import { generateToken, isAuth } from "../utils.js";


const userRoute = express.Router();

userRoute.get("/seed",async(req,res) => {

    const insertedData = await User.insertMany(data.users);

    res.send(insertedData);

})

userRoute.post("/login",async(req,res) => {
    const user = await User.findOne({username : req.body.username});
    if(!user){
        res.status(401).send({message : "User not found !"});
    }


    if(bcrypt.compareSync(req.body.password,user.password)){


    res.send({
        _id : user._id,
        username : user.username,
        name : user.name,
        isAdmin : user.isAdmin,
        email : user.email,
        token : generateToken(user)
    });

    }else{
        res.status(401).send({message : "Wrong login info !"});
    }


})


userRoute.post("/register",async (req,res) => {

    const user = {
        username : req.body.username,
        email : req.body.email,
        name : req.body.name,
        password : bcrypt.hashSync(req.body.password,8)
    };

    const newUser = new User(user);

    const createdUser = await newUser.save();

    res.send({
        _id : createdUser._id,
        username : createdUser.username,
        token : generateToken(createdUser),
        email : createdUser.email,
        isAdmin : createdUser.isAdmin
    });
})


export default userRoute;