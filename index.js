const express = require('express')
const app = express()
const port = 3000

app.get("/", function(req,res){
    return res.send("chao the gioi");
})
app.listen(port, ()=> {})