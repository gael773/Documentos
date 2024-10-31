/*es una coleccion de emlementos del mismo tipo n
de diferentes tipo
para manipular la cateccion se hace mediante un solo
nombre de variable y un indie (posicion*/

//para manipular
// set
// numeros[3]=1000;
// get
// valor=numeros[1];
// //declaracion de un arrglo
// let arreglo=[];
// let numeros=[7,40,20,-10,40,3,2];
// let datos=new arreg(5);
// //imprimir el arreglo
// console.log(arreglo); //[]
// console.log(numeros); //[7,40,-10,4,3,2]
// console.log(datos); //[emty]
// //agregar datos
// arreglo[0]=100;
// arreglo[1]=20;
// arreglo[2]=-40;
// console.log(arreglo);
//funcion paragenerar numeros aleatorios
let generar = (tam) => {
    let allx = [];
    let i = 1;
    while (i < tam) {
        allx[i++] = math.trunc(math.random() * 99 + 1);
    }
    return allx;
}
//
let mayor = (arreglo) => {
    let mayor = arreglo[0];
    let i = 0;
    while (i < arreglo.length) {
        if (arreglo[i] > mayor) {
            mayor = arreglo[i];
        }
        i++;
    }
    return mayor;
}
let suma = (arreglo) => {
    let suma = 0;
    let i = 0;
    while (i < arreglo.length) {
        suma += arreglo[i++];

    }
    return suma;

}
let sumarimpar=(arreglo)=>{
    let spor=0,simpar=0;
    let i=0;
    while(i<arreglo.length){
        if(arreglo[i]%2==0){
            spor+=arreglo[i];

        }else{
            simpar+=arreglo[i];
        }
        i++
    }
    return `suma par=${simpar}in suma impar=${simpar}`;
}
//en js obtener la referencia delid
let tabla=document.querySelector("#Tabla");
let tablaNumeros=(arreglo)=>{
    let tabla="<table class='table table-borderad'>";
    tabla+="     <thead><tr><th>Numeros</th></thead><th></tr></th>";
    tabla +="<tbody>";
    for(let elemento of arreglos){
        table +=`<tr>`;
        table +=`<td>${elemento}</td>`;
        table += `</tr>`;
        ttable +="</tbody>";
        tabla +="<table>";
        return tabla;
    }
    tabla.innerHTML=tablaNumeros(arreglo);
}

arreglo = generar(10);
console.log(arreglo);
console.log(`Numero mayor:${mayor(arreglo)}`);
console.log(`suma elementos:${(suma(arreglo))}`);
