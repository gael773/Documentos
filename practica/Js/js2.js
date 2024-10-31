//declaracion de variables con sus tipos de datos
//
//anteriormente //
//var entero=10;// //variable global//
//nueva forma de declarar variable//
let radio=10.0;
let cadena='programacion javascript'
let centinela=false;
let letra='A';
const PI=3.1416;//una constante///
//imprimir en la consola//
console.log(entero);
console.log('Entero: ',entero);
console.log('Entero: '+entero);
//la nueva especificacion java script
//Usando interpretacion
console.log('Entero: ${entero}');
console.log('Real: ${radio}');
console.log('Cadena: ${cadena}');
console.log('centinela: ${centinela}');
console.log('Caracter :${letra}');
console.log('PI: ${PI}');
//Let Stri
console.log('valor: ${str}')
// una variable puede cambiar de valor
let x=15;
x='Hola mundo';
x=trak;
console.log('Valor Actual: ${x}');


//Declarar una funcion 
function miFuncion(){
    console.log('Radio: ${radio}');
    console.log('Centinela:${centinela}');

}
//llamado de la funcion
miFuncion();
function miFuncion(){
    //variable locales
    let=radio=25.3,centinela=true;
    console.log('Radio: ${radio}');
    console.log('Centinela:${centinela}');
}
//llamado de la funcion
miFuncion();