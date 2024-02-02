import env from "dotenv";
import mainTable from "../models/maintable.model.js";
env.config();

export const mainTableController = async (req,res) => {
     try {

          if(req.query.apiKey === process.env.API_KEY){
               
               const {id_table,name_table} = req.body;

               const date_table = new Date();

               if(!id_table || !name_table || !date_table || id_table === '' || name_table === '' || date_table === ''){
                    return res.status(400).json({message:"All fields are required."});
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
                    res.status(500).json({message:error.message})
               }
          }


          }else{
               res.json({error: 'Non Authorized API User!'});
          }

     } catch (error) {
          res.json({error:'An error occured!'});
          console.log(error);
     }

};