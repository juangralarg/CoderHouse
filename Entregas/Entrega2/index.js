//SEGUNDA ENTREGA
//ARRAY

/**
 * PIDE INGRESAR LOS DATOS DE PERSONAS EN UN ARRAY
 * 
 */

//CREO MATRIZ

//PIDE INGRESAR LOS DATOS AL ARRAY

let head = ['Nombre', 'Apellido','Cedula'];
let x = head.length; //Cuenta los datos a solicitar (Array "head")
let matriz=[]; //Crea natriz vacia "matriz"

//USANDO FOR
/* for (let i = 0; i < x; i++) {
  dato=prompt("Ingrese "+head[i]+": ");
  matriz.push([head[i],dato]);
} */
//console.log(matriz);


// USANDO FOR..OF
for (let d of head) {
  dato=prompt("Ingrese "+d+": ");
  matriz.push([d,dato]);
}
console.log(matriz);