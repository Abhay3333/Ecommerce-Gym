import { comparePassword, hashPassword } from "../helpers/authHelpers.js";
import userModel from "../models/userModel.js";
import Jwt from "jsonwebtoken";

export const registerController = async(req, res) => {
    try {
        const {name,email,password,phone} = req.body
        //validations
        if(!name){
            return res.send({message:'Name is required'})
        }
        if(!email){
            return res.send({message:'Email is required'})
        }
        if(!password){
            return res.send({message:'Password is required'})
        }
        if(!phone){
            return res.send({message:'Phone is required'})
        }
        //check user
        const existinguser = await userModel.findOne({email})
        //existing user
        if(existinguser){
            return res.status(200).send({
                success:false,
                message:'Already Registered please login',
            })
        }

        //register user
        const hashedPassword = await hashPassword(password);

        const user = await new userModel({
            name,
            email,
            password:hashedPassword,
            phone
            }).save();

        res.status(201).send({
            success:true,
            message:'User Registered Successfully',
            user
        })


    } catch (error) {        
        console.log(error)
        res.status(500).send({
            success:false,
            message:'Error in Registration',
            error
        })
    }
};

// POST LOGIN
export const loginController = async (req,res) => {
    try {
        const {email,password} = req.body
        //validation
        if (!email || !password) {
            return res.status(404).send({
                success:false,
                message:'Invalid Username or password'
            })
            
        }
        //check user
        const user = await userModel.findOne({email})
        if(!user){
            return res.status(404).send({
                success:false,
                message:'Email is not registered'
            })
        }
        const match = await comparePassword(password,user.password)
        if(!match){
            return res.status(200).send({
                success:false,
                message:'Invalid Password'
            })
        }
        //token
        const token = await Jwt.sign({_id:user._id}, process.env.Jwt_secret, {
            expiresIn: "7d",
        });
        res.status(200).send({
            success:true,
            message:'login successfull',
            user:{
                name: user.name,
                email: user.email,
                phone: user.phone,
            },
            token,
        });
    } catch (error) {
        console.log(error)
        res.status(500).send({
            success:false,
            message:'Error in login',
            error
        })
        
    }
}

//forgotpassword
export const forgotPasswordController = async (req,res) => {
    try {
        const {email,question,newPassword} = req.body
        if(!email){
            res.status()
        }
    } catch (error) {
        console.log(error)
        res.status(500).send ({
        success:false,
        message:'Something went wrong',
        error
        })
    }
}; 

//test controller
export const testController = (req,res) => {
    res.send('protected Route');
};