//PARA SEGUNDA ENTREGA
//Pide ingresar datos que van a un Array y luego con ese usuario habilita acceder a sistema
let userdb=[]; //Crea matriz vacia "userdb"
let u; //Variable de pruebas

/**==========================
 * FUNCIONES QUE SE EJECUTAN:
 *===========================*/

registro();
login();


/**===================================
 * FUNCION REGISTRO USUARIO CON ARRAY
 *====================================*/
function registro (){
    
  let head = ['Nombre', 'Apellido','Cedula','usuario','Password'];
  let dato;
  //let x = head.length; //Cuenta los datos a solicitar (Array "head")

  // USANDO FOR..OF
  for (let d of head) {
    dato=prompt("Ingrese "+d+": ");
      if (dato === null){ 
        alert("Debe ingresar dato");
        d=--d;//Esto restaria uno para que vuelva a contar para repetir el prompt de "dato"
        } else{
              userdb.push([d,dato])};
  }

  return userdb;
}

/**====================
* FUNCION LOGIN USUARIO
*======================*/
function login (){
  let user;let x=true;
  console.log(userdb);
  while (x) {
      user=prompt("Ingrese un Usuario: ");
  
      
      if (user === null) {// Verificar si el input es nulo (el usuario canceló el prompt)
        alert("Ingrese opcion valida.");
      }else if (user !== "") {
          let indice = userdb.includes(user);//user es valor buscado en array userdb
        
          if (indice !== -1 && user===userdb[3][1]) {               

              alert("BIENVENIDO AL SISTEMA ");
              console.log("EL USUARIO ES: "+ userdb[3][1]);
              x=false;
           }
      }
  }
}
  

