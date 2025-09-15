const mongoose =require("mongoose");

function connectionToDB(){
    mongoose.connect(process.env.DB_CONNECT,{userNewUrlParser:true,useUnifiedTopoplogy:true}).then(()=>{
       console.log('connected to DB');
    }).catch(err=>console.log(err));
}
module.exports=connectionToDB;