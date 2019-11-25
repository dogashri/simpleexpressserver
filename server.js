const express=require('express')
const app=express()
// function uzzu(req,res){
//     res.send('hello world')

app.get('/api/timestamp/:date_string?',(req,res)=>{
    let c=req.params.date_string
    let k=new Date(c)
    let dic={}
    dic.unix=k.getTime()
    dic.utc=k.toUTCString()
    res.send(JSON.stringify(dic))
})
app.listen(7800,()=>(console.log("server started")))