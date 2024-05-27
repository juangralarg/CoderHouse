
let userdb=[]; //Crea natriz vacia "matriz"

/**
 * FUNCION REGISTRO USUARIO
 */

function registro (){
    
    let head = ['Nombre', 'Apellido','Cedula','usuario','Password'];
    let x = head.length; //Cuenta los datos a solicitar (Array "head")

    // USANDO FOR..OF
    for (let d of head) {
      dato=prompt("Ingrese "+d+": ");
      userdb.push([d,dato]);
    }
    return userdb;
    
    }
/**
 * FUNCION LOGIN USUARIO
 */
/* function login (){
    let user=prompt("Ingrese un Usuario: ");
    let indice = userdb.indexOf(user);//user es valor buscado en array userdb
    if (user==""){
        alert('No Ingreso nada');
    } else if (indice !== -1) {
        alert(`Valor encontrado en el índice ${indice}`);
        alert("BIENVENIDO AL SISTEMA ");
        log=false;//Para salir del while
    } else {
        alert("Debe ingresar usuario registrardo.");
    }  */

    
registro();
