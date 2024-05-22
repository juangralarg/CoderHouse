//PRIMERA ENTREGA
//Login basico usando Sentencias IF, IF ELSE y WHILE 
let login = true;
while(login){
    option = prompt("Opcion: \n 0. Login. \n 1.Salir");
        if (option==0){
            let user=prompt("Ingrese un Usuario: ");
            if (user==""){
                alert ("Debe ingresar usuario valido.");
            } else {
            alert("BIENVENIDO AL SISTEMA "+ user);
            login=false;} //Para salir del while
        } else if (option==1) {
            alert("Vuelva Pronto"); 
            login=false;
        } else if (option=="" || option>1) {
            prompt("Ingrese Opcion Correcta: \n 0. Login. \n 1.Salir"); 
        }
}
console.log("continua el codigo");




