import UserModel from "../Models/User.model.js";
import bcrypt from 'bcrypt';
import Jwt from "jsonwebtoken";

export const Register = async (req, res) => {
    try{
        const {name,surname,day,month,year,gender,email,password,confirmPass} = req.body;

        if(!name || !password || !confirmPass || !email || !gender || !day || !month || !year) 
        {return res.status(401).json({success:false, message:'All fields are mandatory'});}

        const hashedPassword = await bcrypt.hash(password,10);
        
        const user = new UserModel({
            name,
            surname,
            day,
            month,
            year,
            password:hashedPassword,
            email,
            gender
        });

        await user.save();

        return res.status(200).json({success:true, message:'Registration successfull!', user: req.body});
    }catch(error){
        return res.status(500).json({success:false, message:error.message});
    }
    
}

export const Login = async (req,res) => {
    try{
        const {email, password} = req.body;
        if(!email || !password) return res.status(401).json({success:false, message:'Email or Password missing'});

        const user = await UserModel.findOne({email:email});
        if(!user) return res.status(401).json({success:false, message:'User not found'});

        const checkPassword = await bcrypt.compare(password,user.password);
        if(!checkPassword) return res.status(401).json({success:false, message:'Password does not match'});

        const token = await Jwt.sign({id:user._id}, process.env.JWT_SECRET)

        return res.status(200).json({success:true, message:'Login successfull', user:user, token});

    }catch(error){
        return res.status(500).json({success:false, message:error.message});
    }
}

export const GetCurrentUser = async (req,res) => {
    try{
        const {token} = req.query;
        if(!token) return res.status(401).json({success:false, message:"Token not provided"});

        const userId = Jwt.verify(token, process.env.JWT_SECRET);
        
        const user = await UserModel.findById(userId.id);
        if(!user) return res.status(404).json({success:false, message:"User not found"});
        // console.log(user);

        return res.status(200).json({success:true, user});

    }catch(error){
        return res.status(500).json({success:false, message:error.message});
    }
}