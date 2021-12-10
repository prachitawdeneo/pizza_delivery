const mongoose=require('mongoose');

const myOrdersSchema=new mongoose.Schema({
    credit:{
        type:Number,
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

module.exports=mongoose.model('order',myOrdersSchema)