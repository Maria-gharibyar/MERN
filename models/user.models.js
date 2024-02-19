// First_step
const mongoose=require('mongoose');


//secound_step creating Datbase collections

const userSchems=new mongoose.Schema({

           setup:{
                type:String
           },
           punchline:{
            type:String
       },
})

// this is for collections name and collection documents.
const user=mongoose.model("Newtable",userSchems)

// this is for exporting collection you csn use onther part of applications
module.exports=user;