//Biblioteca para utilizar el local storage
const {LocalStorage}= require('node-localstorage');

//Creamos una instancia del local storage
var localStorage = new LocalStorage('./scratch');

//localStorage.setItem('Edad','32');
//localStorage.setItem('Correo','vsosa@tec.mx')

console.log(localStorage.getItem('Nombre'));
console.log(localStorage.getItem('Edad'));
console.log(localStorage.getItem('Correo'));


