const mongoose=require('mongoose');

const userLogSchema=new mongoose.Schema({
    email:{
        type: String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true,
        unique:true
    }
})

module.exports=mongoose.model('userLog',userLogSchema)