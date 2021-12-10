const mongoose=require('mongoose');

const userRegSchema=new mongoose.Schema({
    name:{
        type: String,
        required:'This field is required'
    },
    email:{
        type: String,
        required:true,
        unique:true
    },
    mobile:{
        type:String,
        required:true        
    },
    address:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true,
        unique:true
    },
    con_password:{
        type:String,
        required:true
    }

})

module.exports=mongoose.model('userReg',userRegSchema)