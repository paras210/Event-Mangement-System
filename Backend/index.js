const express=require('express');
const app=express();
const cors=require('cors');

app.use(cors());

app.get("/api/back",(req,res)=>{
    res.send("Working at Backend");
})

app.listen(9000,(req,res)=>{
    console.log("Working on Loacal host 9000");
})