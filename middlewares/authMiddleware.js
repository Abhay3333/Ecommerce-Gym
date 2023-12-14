import Jwt from "jsonwebtoken";
import userModel from "../models/userModel.js";

//Protected Routes token base
export const requireSignIn = async (req,res,next) => {
    try {
        const decode = Jwt.verify(req.headers.authorization, process.env.Jwt_secret);
        req.user = decode;
        next();
    } catch (error) {
        console.log(error)
    }
};

//admin access
export const isAdmin = async (req,res) => {
    try {
        const user = await userModel.findById(req.user._id)
        if(user.role !==1) {
            return res.status(403).send({
                success: false,
                message: 'You are not authorized to perform this action'})
        }
    } catch (error) {
        console.log(error)
        res.status(401).send ({
            success : false,
            error,
            message : 'Error in admin middleware'

        })
    }    
}