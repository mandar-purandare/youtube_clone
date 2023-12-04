import UserModel from "../Models/User.model.js";
import bcrypt from 'bcrypt';

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

        return res.status(200).json({success:true, message:'Login successfull', user:user});

    }catch(error){
        return res.status(500).json({success:false, message:error.message});
    }
}