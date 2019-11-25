const express=require('express')
const app=express()
// function uzzu(req,res){
//     res.send('hello world')

app.get('/',(req,res)=>{
    res.send('hello world myself Rishabh Singh')
})
app.listen(process.env.PORT,()=>(console.log("server started"+process.env.PORT)))