const express = require('express');

const route = express.Router();
//usar iddleware en estas rutas
route.use((req,res,next)=>{
    console.log('middleware being used');
    next();
})

route.get('/',(req,res)=>{
    res.send('/ being hit');
});

route.get('/example',(req,res)=>{
    res.send('/example being hit');
});

module.exports = route;