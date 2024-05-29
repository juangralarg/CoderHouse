


class User {
    constructor(nombre, apellido, cedula, usuario,pass){
        this.nombre= nombre;
        this.apellido= apellido;
        this.cedula= cedula;
        this.usuario= usuario;
        this.pass=pass ;
       }
    SetDatos (){
            this.nombre=prompt("Ingrese Nombre: ");
            this.apellido=prompt("Ingrese Apellido: ");
            this.cedula=prompt("Ingrese Cedula: ");
            this.usuario=prompt("Ingrese Usuario: ");
            this.pass=prompt("Ingrese Password: ");
            return;

    }
    }

class Login {
    constructor(usuario,pass){
        this.usuario= usuario;
        this.pass=pass ;
       }
    login (){
        let x=true;
        while (x) {
            user=prompt("Ingrese un Usuario: ");
        
            
            if (usuario === null) {// Verificar si el input es nulo (el usuario canceló el prompt)
              alert("Ingrese opcion valida.");
            }else if (usuario !== "") {
                let indice = userdb.includes(usuario);//user es valor buscado en array userdb
              
                if (indice !== -1 && user===userdb[3][1]) {               
      
                    alert("BIENVENIDO AL SISTEMA ");
                    console.log("EL USUARIO ES: "+ userdb[3][1]);
                    x=false;
                 }
            }
        }
      }
}
    const u = new User(); 

    u.SetDatos();

    console.log(u);
    console.log("EL USUARIO ES: "+u.usuario);

