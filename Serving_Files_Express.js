//aqui vamos a ver como servir archivos en express y tambien como hacer hhtp post con el module body parser
//validar la data que viene del form que viene con JOI
const express = require('express');
const path = require('path');
const bodyParser= require('body-parser');
const app = express();
const Joi = require('joi');

//middlewares
app.use('/public',express.static(path.join(__dirname,'static')));//esto indica que estamos usando un middleware
app.use(bodyParser.urlencoded({extended:false}));
//routes
app.get('/',(request,response)=>{
    response.sendFile(path.join(__dirname,'static','index2.html'))
});

app.post('/postTest',(request,response)=>{
    //console.log(request.body);
    const schema = Joi.object().keys({
        email:Joi.string().trim().email().required(),
        password:Joi.string().min(5).max(10).required()
    });
    Joi.validate(request.body,schema,(err,result)=>{
        if(err){
            response.send('error with the server');
            console.log(err);
        }
        console.log(result);
        response.send('your data was sucess posted');
    });
    //database work and functions
  
});

app.listen(3000);