//En el otro archivo trabajamos xon la manipulacion de archivos como fs module de node js
//en este trabajaremos con el fs module pero para la manipulacion de carpetas

const fs = require('fs');

/*fs.mkdir('tutorial',(err)=>{
    if(err){
        console.log(err)
    }
    else {
        fs.writeFile('./tutorial/exmple.txt','This is from the code',(err)=>{
            if(err)
                console.log(err)
            else   
                console.log('created')
        })
    }
        
})*/

/*
borrar una carpeta o directorio
fs.rmdir('tutorial',(err)=>{
            if(err)
                console.log(err)
            else
                console.log('deleted')
        })

*/
//borrar archivos dentro de una carpeta
fs.readdir('tutorial',(err,files)=>{
    if(err)
        console.log(err)
    else 
        files.forEach((file)=>{
            fs.unlink('./tutorial/'+file,(err)=>{
                if(err)
                    console.log(err)
                else    
                    console.log('file deleted')
            })
        })

})