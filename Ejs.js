const express =require('express');
const path=require('path');
const app=express();

app.use('/public',express.static(path.join(__dirname,'static')));
//para poner de donde van a provenir nuestros templates
app.set('view engine','ejs');

app.get('/:userQuery',(req,res)=>{
    //res.sendFile(path.join(__dirname,'static','index.htmlS'))
    res.render('index',{data:{userQuery:req.params.userQuery, searchResult:['book1','book2','book3'],loggedIn:true,username:'Junior Mena'}});//esto es para renderizar tu ejs template
})

app.listen(3000);