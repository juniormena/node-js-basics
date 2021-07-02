const express =require('express');
const path=require('path');
const app=express();

app.use('/public',express.static(path.join(__dirname,'static')));
//para poner de donde van a provenir nuestros templates
app.set('view engine','ejs');
//routes

const peopleroutes = require('./routes/peopleroutes');

app.use('/people',peopleroutes);

app.listen(3000);