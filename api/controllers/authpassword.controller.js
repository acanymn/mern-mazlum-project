import env from "dotenv";
import mainTable from "../models/maintable.model.js";
import {errorHandler} from '../utils/error.js'
env.config();

export const authPasswordController = async (req,res, next) => {
    try {
        res.json({message:"true"});
        console.log(req.body);
    } catch (error) {
        next(error);
    }
};