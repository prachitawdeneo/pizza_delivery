const express=require('express');
const router=express.Router();
const jwt=require('jsonwebtoken')
const jwtSecret='aaef4765879adfg579769e'
const userModel=require('../db/userRegSchema')
const logModel=require('../db/userLogSchema')

function autenticateToken(req,res,next){
    const authHeader=req.headers['authorization'];
    const token=authHeader && authHeader.split(' ')[1];
    console.log(token)
    if(token==null){
        res.json({"err":1,"msg":"Token not match"})
    }
    else {
        jwt.verify(token,jwtSecret,(err,data)=>{
            if(err){
                res.json({"err":1,"msg":"Token incorrect"})
            }
            else {
                console.log("Match")
                next();
            }
        })
    }
}

router.get('/getuser',(req,res)=>{
    userModel.find({},(err,data)=>{
        if (err) {
            res.json({"err":1,"msg":"Something went wrong"})
        }
        else if(data===null && data.length<=0){
            res.json({"err":1,"msg":"Nothing to add"})
        }
        else{
            res.json({"err":0,"regUser":data})
        }
    })
})

router.post('/adduser',(req,res)=>{
    let name=req.body.name;
    let email=req.body.email
    let mobile=req.body.mobile;
    let address=req.body.address;
    let password=req.body.password;
    let con_password=req.body.con_password;
    //insert data
    let ins=new userModel({name:name,email:email,mobile:mobile,address:address,password:password,con_password:con_password});
    ins.save((err)=>{
        if(err){ res.send(err)}
        else{
        console.log("User Added!")
        // res.redirect('/login')
        }
    })
})
router.post('/loguser',(req,res)=>{
    let email=req.body.email;
    let password=req.body.password;
    userModel.findOne({email:email,password:password},(err,data)=>{
        console.log(email);
        if(err){
            res.json({"err":1,"msg":"Email or password is not correct"})
        }
        else if(data==null)
        {
            res.json({"err":1,"msg":"Email or password is not correct"})
        }
        else {
            let payload={
                uid:email
            }
            const token=jwt.sign(payload,jwtSecret,{expiresIn:360000})
            res.json({"err":0,"msg":"Login Success","token":token})
        }
        
    })
})

module.exports=router;