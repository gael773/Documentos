/*un evento es una acccion que se puede generar en una pagina web o aplicacion
web y puede ser el hacer click en un boton o elemento html, mover el mosue, 
precionar o saltar una tecla al cargarb una pagina al validar un formulario */

/*2 formas de implementar los eventos
      °dentro del documento html
      °el codigo de java script      
*/
let texto=document.querySelector("#texto");
let parrafo=()=>{
    let nombre=`Natalia Elizabeth`;
    texto.innerHTML=nombre
}
let borrar=()=>{
    texto.innerHTML="";
}
