const mongoose=require('mongoose');


mongoose.connect('mongodb://127.0.0.1:27017/MongoDB_Secound',{
    useNewUrlParser:true,
    useUnifiedTopology:true
})

.then(()=>console.log("the connection successfuly establish"))
.catch((err)=>console.log("there is something to connections",err));



// this is Just for connections