const express=require("express");
const app=express();
const PORT=4000;

app.get("/api",(req,res)=>{
    res.send({
        msg:"api call success"
    });
});

app.listen(PORT,()=>{
   console.log(`server running on ${PORT}`);
});