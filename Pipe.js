//un pipe nos permite tomar un readable stream y enviarlo hacia su destino que es un wrtieable stream
const fs = require('fs');
const zlib = require('zlib');//este modulo es usado para compress data
const gzip =zlib.createGzip();
const ungzip =zlib.createGunzip();
const writeStream = fs.createWriteStream('uncrompressed.txt')//esto es para descomprimir un archivo y copiarlo luego con gunzip
const readStream=fs.createReadStream('./example2.txt.gzip');
//pip chaining o cadenas de pipe con gzip lo que hace comprime todo y luego lo copia
readStream.pipe(ungzip).pipe(writeStream);//esto es lo que hace copia lo que tengo en mi read lo copia o escribe en el write;
//para usar pipe necesitamos un origen de datos y un destino de estos datos
//para evitar todo esete codigo ahi una forma mejor que es usando pipe
/*
 readStream.on('data',(chunk)=>{
        writeStream.write(chunk);
        console.log(chunk); 
 })*/