//PRIMERA ENTREGA
//Login basico usando una version con SWITCH y otra con sentencias IF, IF ELSE y WHILE 





//-------------------------------------------------
//Menu Inicial
//-------------------------------------------------
let userdb=[]; //Crea natriz vacia "matriz"
let log = true;
while(log){
let option = parseInt(prompt(" Opcion: \n 0. Login. \n 1.Salir \n 2.Registrarse"));
     switch(option){
        case 0:
            login();
            break;
        case 1:
            alert("Vuelva Pronto"); 
            log=false;
            break;
        case 2:
            registro();
            break;
        default:
            alert("Ingrese Opcion Correcta");
            break;
            }}


console.log("Aqui continua el codigo ");

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
function login (){
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
    } 
}


