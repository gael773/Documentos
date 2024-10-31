/*objtos, un tipo de dato que esta conformada por
propiedades y valores*/
//Declaracion de un objeto
let persona={
    nombre:"Jose Alfredo",
    edad:25,
    genero:"Masclino",
};
console.log(persona);
//definir un arreglo de objetos
let personas=[
    {
        nombre:"Jose Alfredo",
        edad:25,
        genero:"Masculino",
    },
    {
        nombre:"Estefania",
        edad:17,
        genero:"Femenino",
    },
    {
        nombre:"Nicol",
        edad:16,
        genero:"Femenino",
    },
    {
        nombre:"Jibran",
        edad:17,
        genero:"Masculino",
    },
];
console.log(personas);
console.log(personas[1].nombre);
console.log(personas[1].edad);
console.log(personas[1].genero);
let tabla=document.querySelector("#tabla");
let imprimirtabla=(personas)=>{
    let msg="<table class='table table-bordered table-striped'>"
    msg+="<thead> <tr> <th> No</th><th>Nombre</th>";
    msg+="<th>edad</th> <th>Genero</th> </tr> </thead>";
    msg+="<tbody>"; let i=0;
    for(let persona of personas){
        msg+="<tr>"
        msg+=`<td>${i+1}</td><td>${personas[i].nombre}</td>`;
        msg+=`<td>${personas[i].edad}</td>`;
        msg+=`<td>${personas[i++].genero}</td> `
        msg+="</tr>" 
    }
    msg+="</tbody></table>";
    return msg;
    
}
let imprimir=()=>{
    tabla.innerHTML=imprimirtabla(personas);
}
let ordenar=()=>{
    personas.sort(function (a,b){
        if(a.nombre<b.nombre){
            return -1;
        }else{
            return 1
        }
    });
    imprimir();
}

let eliminar_inicio=()=>{
    personas.shift();
    imprimir();
}
let eliminar_final=()=>{
    personas.pop();
    imprimir();
}
//etiqueta 
let formulario=document.querySelector("#formulario");
formulario.addEventListener("submit",(event)=>{
    //console.log("Datos Procesados");
    //referencia para los datos 
    let n=document.querySelector("#nombre").value;
    let e=document.querySelector("#edad").value;
    let g=document.querySelector("#genero").value;
    //console.log(n);
    //console.log(e);
    //console.log(g);
    //crear un objeto de tipo persona

    let persona={
        nombre:n,
        edad:e,
        genero:g,
    };
    console.log(persona);
    //hacer que no se repitan datoss
    let limpiar=( )=>{
        document.querySelector("#nombre").value="";
        document.querySelector("#edad").value="";
        document.querySelector("#genero").value="Selecciona...";
    }
    //agregar a la tabla
    personas.push(persona);
    imprimir();
    limpiar(n,e,g);
    if(n.length().trim()===0||e.length().trim()===0){
        let persona={
            nombre:n,
            edad:e,
            genero:g
        }
    }else{
        console.log("Nose admiten vacios")
    }
    event.preventDefault();//etiqueta que evita que se recargue la pagina
});