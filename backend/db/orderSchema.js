const mongoose=require('mongoose');

const orderSchema=new mongoose.Schema({
    pname:{
        type: String,
        required:true,
    },
    image:{
        type:String,
        required:true
    },
    quantity:{
        type:Number,
        required:true,
    },
    price:{
       type:Number,
       required:true,

    }
})

module.exports=mongoose.model('cart',orderSchema)