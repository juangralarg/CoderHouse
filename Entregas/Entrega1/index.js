//PRIMERA ENTREGA
//Login basico usando una version con SWITCH y otra con sentencias IF, IF ELSE y WHILE 



//-------------------------------------------------
//FUNCION LOGIN DE USUARIO
//-------------------------------------------------
function login (){
    let user=prompt("Ingrese un Usuario: ");
    if (user==""){
        alert("Debe ingresar usuario valido.");
    } else {
    alert("BIENVENIDO AL SISTEMA "+ user);
    log=false;} //Para salir del while
}

//-------------------------------------------------
//REALIZADO CON SENTENCIAS switch, if, else y while
//-------------------------------------------------
let log = true;
while(log){
let option = parseInt(prompt("REALIZADO CON SENTENCIAS switch, if, else y while\n\n Opcion: \n 0. Login. \n 1.Salir"));
     switch(option){
        case 0:
            login();
            break;
        case 1:
            alert("Vuelva Pronto"); 
            log=false;
            break;
        default:
            alert("Ingrese Opcion Correcta");
            break;
            }}

//--------------------------------------------
//REALIZADO CON SENTENCIAS if, if else y while
//--------------------------------------------
log = true;
while(log){
    let option = parseInt(prompt("REALIZADO CON SENTENCIAS if, if else y while\n\n Opcion: \n 0. Login. \n 1.Salir"));
    if (option==0){
        login();
        } else if (option==1) {
            alert("Vuelva Pronto"); 
            log=false;
        } else {
            alert("Ingrese Opcion Correcta");
            }}
console.log("Aqui continua el codigo ");




