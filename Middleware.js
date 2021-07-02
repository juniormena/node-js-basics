//aqui vamos a ver como funciona un middleware y como podemos hacer uno nuestro

//un middleware no es mas que un codigo o funcion que se ejecuta entre la peticion del cliente al servidor

const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.json());
//custom middleware
//para que el middleware solo se ejecute cuando hago request a uno url en especifico
//app.use('/example',(req,res,next)
app.use((req,res,next)=>{
    //next method debe estar en cada custom middleware que hagamos
    //este next methd se encarga de decirle al middleware ya termine de procesar este request del cliente
    //podemos procesar datos tambien en el middleware asi
    req.name='Junior Mena'
    console.log(`url= ${req.url} - method used= ${req.method}`);
    if(req.url!='/'){
        console.log('User intentando entrar en otra url');
    }
    next();
})

app.get('/',(req,res)=>{
    //console.log('Server is running');
    res.send(`this is middleware training ${req.name}`)
}).listen(3000);