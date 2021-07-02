//el event module nos permite agregar los eventos a node js veremos el event emitter class
const EventEmitter = require('events');//traemos la clase desde events module
const eventEmitter = new EventEmitter();
//aqui lo que hacemos es emitir un evento con la clase eventEmitter creamos que este codigo solo se va ejecutar
//cuando se dispare el evento tutorial que asi fue que lo asignamos
eventEmitter.on('tutorial', (num,num1)=>{
    console.log('tutotrial event has occured',num+num1)
});
//De esta forma es que podemos pasar los parametros que esta en la funcion on para emitir el evento la pasamos
//en el emit pasamos en nombre del evento y los aprametros de la funcion
eventEmitter.emit('tutorial',1,2);

class Person extends EventEmitter{
    constructor(name){
        super();
        this._name=name
    }

    get_name(){
        return this._name;
    }
}

let pedro = new Person('Pedro');
let christina = new Person('Christina');
pedro.on('name',()=>{
    console.log('my name is ', pedro._name)
})
christina.on('name',()=>{
    console.log('my name is ', christina._name)
})
//estos eventos se ejecutan de manera sincrona, en la forma que son emitidos asi mismo salen sus salidas 
//el que se emitio primero sale primero
pedro.emit('name');
christina.emit('name');