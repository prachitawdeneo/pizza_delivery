const express=require('express')
// const mongoose=require('mongoose')
const router=express.Router();
// const db="mongodb://localhost:27017/pizza_delivery";
const jwt=require('jsonwebtoken')
const jwtSecret='aaef4765879adfg579769e';
var nodemailer = require('nodemailer');


const pizzaModel=require('../db/pizzaMenuSchema');
const orderModel=require('../db/orderSchema');
const myOrderModel=require('../db/myOrdersSchema');
var orders=[];

myOrderModel.find({},(err,data)=>{
    if (err) throw err
    orders=data;
})

var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
    user: 'prachivt@gmail.com',
    pass: 'Vrujay@1997'
  }
});

var mailOptions = {
  from: 'prachivt@gmail.com',
  to: 'prachivt@gmail.com',
  subject: 'Pizza Order Confirmed',
  html :`<table>
  <thead>
      <tr>
          <th>Sr. No</th>
          <th>Name</th>
          <th>Image</th>
          <th>Quantity</th>
          <th>Price</th>
      </tr>
  </thead>
  <tbody>
      ${orders.map((ord,index)=>
          `<tr>
              <td>{index+1}</td>
              <td>{ord.pname}</td>
              <td><img src={ord.image} alt="" height="100px" width="100px"/></td>
              <td>{ord.quantity}</td>
              <td>{ord.price}</td>
              
          </tr>`
          )}
          <tr>
              <td colSpan="4">Total</td>
              <td>{total}</td>
          </tr>  
  </tbody>
</table>`
};


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

router.get('/menu',autenticateToken,(req,res)=>{
    console.log("Menu")
    pizzaModel.find({},(err,data)=>{
        if (err) throw err
        console.log(data)
        res.json(data);
    })
})

router.get('/getorders',(req,res)=>{
    orderModel.find({},(err,data)=>{
        if (err) {
            res.json({"err":1,"msg":"Something went wrong"})
        }
        else if(data===null && data.length<=0){
            res.json({"err":1,"msg":"Nothing to add"})
        }
        else{
            orders=data;
            res.json({"err":0,"orderData":data})
        }
    })
})

router.post('/addcart/:id?',(req,res)=>{
    let id=req.params.id;
    // pizzaModel.find({},(err,data)=>{
    //     if(err){
    //         console.log(err)
    //     }
    //     else{
    //         let arr=data;
    //         console.log(arr)
    //         let ins=new orderModel({pname:arr[id].pname,image:arr[id].image,price:arr[id].price,quantity:1})
    //         ins.save((err)=>{
    //             if (err) throw err
    //             console.log("Added to Cart")
    //         })
    //     }
        
    // })
   
    pizzaModel.findOne({_id:id},(err,data)=>{
        if(err){
            console.log(err)
        }
        else{
            console.log(data);
            let ins=new orderModel({pname:data.pname,image:data.image,price:data.price,quantity:1})
            ins.save((err)=>{
                if (err) throw err
                console.log("Aded to Cart")
            })
        }
    })

})

router.put(`/addqty/:id`,(req,res)=>{
    let id=req.params.id;
    let quantity=0;
    let pname='';
    let image='';
    let price=0;
    
    orderModel.find({_id:id},(err,data)=>{
        quantity=data.quantity
        pname=data.pname
        image=data.image
        price=data.price
        console.log(quantity)
    })
    orderModel.updateOne({_id:id},{_id:id,quantity:quantity+1,pname:pname,image:image,price:price},(err,result)=>{
        if(err) throw err
        console.log(result)
    })
})

router.post('/placeorder',(req,res)=>{
    console.log(req.body);
    ins=new myOrderModel({credit:req.body.credit,quantity:req.body.quantity,price:req.body.price})
    ins.save((err)=>{
        if (err) throw err
        console.log("Order Placed")
        
        
        transporter.sendMail(mailOptions, function(error, info){
          if (error) {
            console.log(error);
          } else {
            console.log('Email sent: ' + info.response);
          }
        });
    })
   

})

router.get('/myorders',(req,res)=>{
    myOrderModel.find({},(err,data)=>{
        if (err) {
            res.json({"err":1,"msg":"Something went wrong"})
        }
        else if(data===null && data.length<=0){
            res.json({"err":1,"msg":"Nothing to add"})
        }
        else{
            res.json({"err":0,"myOrder":data})
        }
    })
})
module.exports=router;