//vamos hacer request y devolver static files
const http = require('http');
const fs = require('fs');

http.createServer((request,response)=>{
    //el content-type va a variar dependiendo de lo que estemos mandando hacia el cliente
    const readStream = fs.createReadStream('./static/Maimon.jpg');
    response.writeHead(200,{'Content-type':'image/png'});//el header de un html nos permite ver que data o que tipo de data o archivo se esta recibiendo
    readStream.pipe(response);

}).listen(3000);