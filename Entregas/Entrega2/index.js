
/**
 * CLASE CON METODOS PARA REGISTRO Y ACCESO
 */

class User {
    constructor(nombre, apellido, cedula, usuario,pass){
        this.nombre= nombre;
        this.apellido= apellido;
        this.cedula= cedula;
        this.usuario= usuario;
        this.pass=pass ;
       }
    ingresoDatos (){
            this.nombre=prompt("Ingrese Nombre: ");
            this.apellido=prompt("Ingrese Apellido: ");
            this.cedula=prompt("Ingrese Cedula: ");
            this.usuario=prompt("Ingrese Usuario: ");
            this.pass=prompt("Ingrese Password: ");
            this.datosU=[{
                nombre: this.nombre,
                apellido: this.apellido,
                cedula:this.cedula,
                usuario: this.usuario,
                pass: this.pass
            }]
   }
}

class Login {
    u = new User();
    constructor(usuario,pass){
        this.usuario= usuario;
        this.pass=pass ;
       }
    login (){
        let x=true; let y=true;
        if(u.usuario===null){
            alert("DEBE REGISTRAR USUARIO");
            u.ingresoDatos();
        }
        while (x) {
            console.log(u.usuario);
            let user=prompt("INGRESE USUARIO O X PARA MENU: ");
        if(user ==="X" || user==="x"){
            x=false;
            y=false;
            break;
        } else if (user===u.usuario){
            //alert("Usuario Valido!! /n SIGA SIGA")
            break;
        }else {alert("INGRESE USUARIO VALIDO")}
            
        }
        while (y) {
            console.log(u.pass);
            let user=prompt("PASSWORD: ");
        if (user===u.pass){
            alert("Validacion correcta!! /n SIGA SIGA")
            break;
        }else {alert("Clave INCORRECTA")}
            
        }
    }
}

/**
 * CODIGO 
 */
let opcion=true;
const u = new User();
while(opcion){
let opt=parseInt(prompt ("INGRESE OPCION:\n   0. REGISTRO USUARIO\n   1.LOGIN\n   2.SALIR\n\n"));
    switch (opt) {
        case 0:
            //const u = new User(); 
            u.ingresoDatos();//Pide registro de datos usuario
        break;
        case 1:
            const l = new Login();
            l.login();//Pide Login usando datos ingresados
        break;
        case 2:
        opcion=false;
        break;
        default:
        alert("INGRSE VALOR VALIDO");
        break;
    }
}
alert("USTED SALIO DEL SISTEMA");