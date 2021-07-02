//este el tutorial module utilizado para exportar funciones
//y poder usarlas en otros archivos de nuestra aplicacion

const sum = (num1,num2)=>num1 + num2;

const PI = 3.14;

class SomeMathObject{
    constructor(){
        console.log('object created');
    }
}
//esto es untilizado para exportar una sola cosa en node js
module.exports = sum
//una manera de pasar muchos mas cosas es creando objecto para module y luego utilizarlos en nuestra app

module.exports.sum=sum
module.exports.PI=PI
module.exports.SomeMathObject=SomeMathObject

//la otra manera de hacerlo es creando el objeto en si like this y esto funciona de igual manera que lo que hicimos arriba

module.exports = {sum:sum,PI:PI,SomeMathObject:SomeMathObject}//tambien podias usar un solo nombre y javascript asume esto por defecto