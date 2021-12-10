const express=require('express');
const cors=require('cors');
const mongoose=require('mongoose');
const PORT=8000;
const app=express();
app.use(express.json());
app.use(express.urlencoded({extended:false}))

app.use(cors());

//db connection
const db="mongodb://localhost:27017/pizza_delivery";
const connectDB=async()=>{
    try{
        await mongoose.connect(db,{useNewUrlParser:true});
        console.log("MOngoDB connected");
    }
    catch(err){
        console.log(err.message);
    }
}
connectDB();
//end

const userModel=require('./db/userRegSchema')
//routes
//load routes
const userRoutes=require('./routes/userRoutes');
const { urlencoded } = require('express');
app.use('/api/user',userRoutes);

const pizzaRoutes=require('./routes/pizzaRoutes');
// const { urlencoded } = require('express');
app.use('/api/pizza',pizzaRoutes);


app.listen(PORT,(err)=>{
    if (err) throw err
    console.log(`Work on ${PORT}`);
})