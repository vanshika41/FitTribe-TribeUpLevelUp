import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import User from "../models/User.js";

/* REGISTER USER*/
export const register = async(req,res)=>{
    try{
        const {
            firstName,
            lastName,
            email,
            password,
            picturePath,
            friends,
            location,
            occupation,
            goal
        } = req.body;

        const salt = await bcrypt.genSalt();
        const passwordHash = await bcrypt.hash(password,salt);

        const newUser = new User({
            firstName,
            lastName,
            email,
            password: passwordHash,
            picturePath,
            friends,
            location,
            occupation,
            goal,
            viewedProfile: Math.floor(Math.random()*10000),
            impressions: Math.floor(Math.random()*10000)
        });
        const savedUser = await newUser.save();
        // 201 = something new is created
        // json(savedUser) = gives the front end the saved user in correct format
        res.status(201).json(savedUser);
    }catch(err){
        res.status(500).json({error: err.message});
    }
}   

/*LOGGING IN */

export const login = async(req,res)=> {
    try{
        const {email, password}=req.body;
        const user = await user.findOne({email:email});
        if(!user) return res.status(400).json({msg: "User does not exist. "});

        const isMatch = await bcrypt.compare(password, user.password);
        if(!isMatch) return res.status(400).json({msg : "Invalid Credentials. "});

        const token = jwt.sign({_id : user._id}, process.env.JWT_SECRET);
        delete user.password;
        res.status(200).json({token,user});
    }catch(err) {
        res.status(500).json({error : err.message});
    }
}
