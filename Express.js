const express = require('express');

const app = express();

app.get('/',(request,response)=>{
    response.send('Hello World');
});

app.get('/example',(req,res)=>{
    res.send('this is example route')
});

//route params
app.get('/example/:name/:age',(req,res)=>{
    console.log(req.params);
    console.log(req.query);
    res.send('route with params')
})

app.listen(5000);