const path =require("path");
const express = require('express');
const bodyParser=require('body-parser');
const app = express();

app.use(bodyParser.urlencoded({extended:false}))
app.get('/',(req,resp)=>{
resp.sendFile(path.join(__dirname,"/index.html"));
})
app.post('/processing',(req,resp)=>{
console.log(req.body);
if(req.body.userEmail==='admin@gmail.com' && req.body.userPassword==="admin@123")
resp.redirect("/success")

else
    resp.redirect("failed")

})
app.get('/failed',(req,resp)=>{
    resp.send("sorry, your request is failed");
    })
 app.get('/success',(req,resp)=>{
        resp.send("successfully");
        })
app.listen(4000)
    

