const mongoose=require('mongoose');

const pizzaMenuSchema=new mongoose.Schema({
    pname:{
        type: String,
        required:true,
    },
    image:{
        type:String,
        required:true,
    },
    price:{
       type:Number,
       required:true,

    }
})

module.exports=mongoose.model('pizza',pizzaMenuSchema)