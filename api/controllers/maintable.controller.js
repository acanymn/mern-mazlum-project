import env from "dotenv";
import mainTable from "../models/maintable.model.js";
import {errorHandler} from '../utils/error.js'
env.config();

export const mainTableController = async (req,res, next) => {
               
try {
     
     const {tablename, datepicker} = req.body;

     if(!tablename || !datepicker || tablename === '' || datepicker === ''){
          next(errorHandler(400, 'All fields are required!'));
     }else{
          
         try {
          const newMainTable = new mainTable({
               name_table: tablename,
               date_table: datepicker,
          });

          await newMainTable.save();
          res.json({message:"Table created successfully!"});

               } catch (error) {
                    next(error);
               }
} } 
catch (error) {
     next(error);
}

};