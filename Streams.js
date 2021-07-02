// los streams nos permiten escrbir y leer data de una manera mas eficiente por lee y escribe la data por chunk
//en vez de hacerlo todo d euna vez

const fs = require('fs');
//si no especificamos un unicode que podamos entender pues, nos devolvera todos los bytes que estamos leyendo
//nos los devuelve de manera natural
const writeStream = fs.createWriteStream('example2.txt')
const readStream=fs.createReadStream('./example.txt','utf8');
//stream extends de la clase event emitter por eso podemos escuhar el evento data que es cuando estamos leyendo data de un archivo en especifico
 readStream.on('data',(chunk)=>{
        writeStream.write(chunk);//aqui escribimos chunk en un nuevo archivo mientras leemos otro archivo
        console.log(chunk);//estos datos vienen en bytes 
 })

 //ventaja de leer en streams y en chunk
 /*
 1-no debemos esperar todo el archivo para poder manipularlo porque nos envia datos a primera mano
 es una como una especie de buffer
 2-podemos ir enviando estos datos que van leyendo mientras a la vez continuo leyendo el archivo
 */ 
