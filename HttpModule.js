//esto nos permite crear un web server con node js

const http = require('http');
const server = http.createServer((request,response)=>{
    if(request.url==='/'){
    response.write('Hello world from node js');
    response.end();
    }
    else{
        response.write('You are in another url');
        response.end();
    }
});

server.on('request',(req,res)=>{
    console.log('fdgsdfgdsg')
    
})

server.listen('3000');