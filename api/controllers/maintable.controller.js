import env from "dotenv";
import mainTable from "../models/maintable.model.js";
import {errorHandler} from '../utils/error.js'
env.config();

export const mainTableController = async (req,res, next) => {
     try {

          if(req.query.apiKey === process.env.API_KEY){
               
               const {id_table,name_table} = req.body;

               const date_table = new Date();

               if(!id_table || !name_table || !date_table || id_table === '' || name_table === '' || date_table === ''){
                    next(errorHandler(400, 'All fields are required!'));
               }else{
                    
                   try {
                    const newMainTable = new mainTable({
                         id_table,
                         name_table,
                         date_table,
                    });
     
                    await newMainTable.save();
                    res.json({message:"Table created successfully!"});

               } catch (error) {
                    next(error);
               }
          }

          }else{
               next(errorHandler(400, "Authentication error!"));
          }

     } catch (error) {
          next(error);
     }

};