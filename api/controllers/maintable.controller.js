import env from "dotenv";
env.config();

export const mainTableController = (req,res) => {
     try {

          if(req.query.apiKey === process.env.API_KEY){
               console.log(req.body);
               res.json(req.body);
          }else{
               res.json({error: 'Non Authorized API User!'});
          }

     } catch (error) {
          res.json({error:'An error occured!'});
     }

};