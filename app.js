console.log('hello from node js');

//working with node js modules estos no son mas que javascript files que utilizamos para dividir nuestra aplicacion
/*
para poder usar funciones o variables creada en ptr modulo,
que no es mas que un archivo de javascript debemos exportarlo y luego
requerirlo donde lo queremos usar
*/
const tutorial = require('./tutorial')
console.log(tutorial)
//entonces debemos recurrir a utilizar nuestros objetos ya que no estamos exportando una sola cosas
console.log(tutorial.sum(1,3))
console.log(new tutorial.SomeMathObject());