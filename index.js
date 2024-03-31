const express = require("express")
const app =express()

app.listen(5000,()=>{
    console.log("app running on port 5000")
})
app.get('/',(req,res)=>{
    res.send([1,2,3,4,5])
})