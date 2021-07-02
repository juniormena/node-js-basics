//Aqui vamos a trabajar con el hhtp post request en express y body parser module con json data

const express = require('express');
const path = require('path');
const bodyParser= require('body-parser');
const app = express();
const joi = require('joi');

//middlewares
app.use('/public',express.static(path.join(__dirname,'static')));//esto indica que estamos usando un middleware
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
//routes
app.get('/',(request,response)=>{
    response.sendFile(path.join(__dirname,'static','index.html'))
});

app.post('/postTest',(req,res)=>{
    console.log(req.body);
    res.json({success:true});
})

app.listen(3000);