//PRIMERA ENTREGA
//Login basico usando una version con SWITCH y otra con sentencias IF, IF ELSE y WHILE 

let login = true;


//-------------------------------------------------
//REALIZADO CON SENTENCIAS switch, if, else y while
//-------------------------------------------------
while(login){

let option = parseInt(prompt("REALIZADO CON SENTENCIAS switch, if, else y while\n\n Opcion: \n 0. Login. \n 1.Salir"));

     switch(option){
        case 0:
            let user=prompt("Ingrese un Usuario: ");
            if (user==""){
                alert ("Debe ingresar usuario valido.\nVuelva a intentarlo");
            } else {
            alert("BIENVENIDO AL SISTEMA "+ user);
            login=false;} //Para salir del while PROVISORIO
            break;
        case 1:
            alert("Vuelva Pronto"); 
            login=false;
            break;
        default:
            alert("Ingrese Opcion Correcta");
            break;
            }}

//--------------------------------------------
//REALIZADO CON SENTENCIAS if, if else y while
//--------------------------------------------
login = true;
while(login){
    let option = parseInt(prompt("REALIZADO CON SENTENCIAS if, if else y while\n\n Opcion: \n 0. Login. \n 1.Salir"));

    if (option==0){
            let user=prompt("Ingrese un Usuario: ");
            if (user==""){
                alert("Debe ingresar usuario valido.");
            } else {
            alert("BIENVENIDO AL SISTEMA "+ user);
            login=false;} //Para salir del while
        
        } else if (option==1) {
            alert("Vuelva Pronto"); 
            login=false;
        
        } else {
        
            alert("Ingrese Opcion Correcta");
    
            }}



console.log("Aqui continua el codigo ");




