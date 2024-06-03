require('dotenv').config();
const express=require("express");
const connectDB=require("./db/conn");
const app=express();
connectDB();
app.use(express.json());
app.use('/students', require('./routes/students'));



const PORT=process.env.PORT || 5000;
app.listen(process.env.PORT ,()=>{
    console.log(`Server Listen at Port  ${PORT}`)
})

