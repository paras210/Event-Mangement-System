const express = require("express");
const app = express();
const port=5000;
const cors=require("cors");

app.use(cors());
app.use(express.json());

app.get("/api/hello",(req,res)=>{
    res.send("HI from the API")
});

app.listen(port,(req,res)=>{
    console.log("Server Running on 5000")
});