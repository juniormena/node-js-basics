//Este modulo nos permite poder trabajar con el sistema, como leer archivos, copiar escribir, crear carpetas y cosas asi veamos

const fs =  require('fs');//llamamos el module file system
//create a file

/*fs.writeFile('example.txt','esto es para escribir al en el arachivo',(err)=>{
    if(err){
        console.log(err);
    }
    else{
        console.log('File successfully created');
        //cuando no expresas un coding type se te imprime algo parecido
        //<Buffer 65 73 74 6f 20 65 73 20 70 61 72 61 20 65 73 63 72 69 62 69 72 20 61 6c 20 65 6e 20 65 6c 20 61 72 61 63 68 69 76 6f>
        //esto porque no puede leer  el archivo
        fs.readFile('example.txt','utf8',(err,file)=>{
                if(err)
                    console.log(err)
                else    
                    console.log(file);
        })
    }
});*/
//esto es para renombrar un archivo
/*fs.rename('example.txt','example2.txt',(err)=>{
    if(err)
        console.log(err);
    else
        console.log('file renamed it')
})*/
//agregar data a un archivo
/*fs.appendFile('example.txt','some data being appended', (err)=>{
    if(err)
        console.log(err)
    else    
        console.log('data was appended')
})*/

fs.unlink('example2.txt',(err)=>{
    if(err)
        console.log(err)
})
