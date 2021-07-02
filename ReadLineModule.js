//Estaremos trabajando( con el readline module que permite recibir y leer los input de los usuarios

const readline=require('readline');

const rl = readline.createInterface({input:process.stdin, output:process.stdout});//creamos un interface para usar nuestro
//readline object y esto sirve para poder crear nuestra entradas(input) y salidas(output)

let num1 = Math.floor((Math.random()*10)+1);
let num2 = Math.floor((Math.random()*10)+1);//generar un numero entre 0 y 10
let answer = num1+num2;
//ahora le podemos preguntar al usuario a que son iguales estos numeros

rl.question(`What is ${num1} + ${num2}? \n`,(userInput)=>{
    if(userInput.trim()==answer){
        rl.close();
    }
    else{
        rl.setPrompt('Incorrect response please try again \n');
        rl.prompt();
        rl.on('line',(userInput)=>{
            if(userInput.trim()==answer){
                rl.close();
            }
            else{
                rl.setPrompt(`your ansmer ${userInput} is incorrect, try it again \n`);
                rl.prompt();
            }
        })
    }
});
//esto lo usamos para crear un escuchar de eventos, este evento no lo tienes que emitir porque se emite solo
//porque usamos el mismo nombre que el metodo close, cuando se emite el metodo close
rl.on('close', ()=>{
    console.log('you got the correct answer')
});