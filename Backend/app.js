const express= require('express');
const app=express();
const bodyParser=require('body-parser');
const cors=require('cors');
require('dotenv').config();
const carRoute=require('./routes/carRoute');
app.use(express.json());
app.use('/api/cars',carRoute);
const PORT=process.env.PORT||5000;
app.listen(PORT,()=>{
    console.log(`server is running on ${PORT}`);
});