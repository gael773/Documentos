

let arreglo=[];

let numeros = [7, 40, 20, -10, 40, 3, 2];

let datos= new Array(5);

console.log(arreglo);
console.log(numeros);
console.log(datos);


arreglo [0]=100;
arreglo [1]=20;
arreglo [2]=-40;

console.log(arreglo);

let generar =(tam)=>{
 let aux=[];
 let i=0;
 while(i<tam){
 aux[i++]=Math.trunc(Math.random()*99+1)
 }
 return aux;
}

arreglo=generar(10)
console.log(arreglo);


let mayor =(arreglo)=>{
    let mayor=arreglo[0];
    let i=0;
    while (i< arreglo.length){
        if(arreglo[i]>mayor){
            mayor =arreglo[i]
        }
        i++
    }
    return mayor;
}

console.log(mayor(arreglo));

let suma =(arreglo)=>{
    let suma=arreglo[0];
    let i=0;
    while (i< arreglo.length){
        suma+=arreglo[i++];
    }
    return suma;
}

console.log(suma(arreglo));

let sumapar =(arreglo)=>{
    let sumapar=arreglo[0];
    let i=0;
    let inpar=0;
    while (i< arreglo.length){
        if(arreglo[i]%2==0){
            sumapar+=arreglo[i];
        }
        else{
            inpar+=arreglo[i];
        }
        i++
    }
    return `sumapar =${sumapar}\n inpar= ${inpar}`;
}


console.log(sumapar(arreglo));



let tabla = document.querySelector("#tabla");

let binario=(numero)=>{
    let bin="";
    let digito=0;
    while(numero>0){
        digito=numero%2;
        numero=Math.trunc(numero/2);
        bin=bin+digito;
    }
    return bin;
}
let raiz=(numero)=>{
    return Math.sqrt(numero);
}
let tablanum = (arreglo)=>{
    let tabla ="<table class='table table-bordered'>";
    tabla+="<thead> <tr> <th> Numeros </th><th>Raiz</th><th>Binario</th><th>Cubo</th><th>octal</th></tr></thead>"
    tabla+="<tbody>"
    for (let elemento of arreglo){
        tabla+=`<tr>`;
        tabla+= `<td>${elemento}</td>`;
        tabla+= `<td>${raiz(elemento)}</td>`;
        tabla+= `<td>${binario(elemento)}</td>`;
        tabla+= `</tr>`;
    }
    tabla+="</tbody>";
    tabla+="</table>"
    return tabla;
}

tabla.innerHTML=tablanum(arreglo);