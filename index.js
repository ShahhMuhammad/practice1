const express=require('express')
const mongoose=require("mongoose")
require('./DB_connection/DB')
const user=require('./Model/users')
const app=express()
app.use(express.json())
const port=3000;
app.use(require('./Router/auth'))
const middleware=(req,res,next)=>{
    console.log('Hello Middleware');
    next();
}
app.get('/about',middleware,(req,res)=>{
    res.send('Hello From About')
    
})

app.listen(port,(req,res)=>{
    console.log(`Working on port ${port}`);
})