
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
        this.datosU={
            nombre: this.nombre,
            apellido: this.apellido,
            cedula:this.cedula,
            usuario: this.usuario,
            pass: this.pass
        }
       }
    ingresoDatos (){
/**
 * USANDO PROMPT PARA INGRESO DE DATOS
 */
            // this.nombre=prompt("Ingrese Nombre: ");
            // this.apellido=prompt("Ingrese Apellido: ");
            // this.cedula=prompt("Ingrese Cedula: ");
            // this.usuario=prompt("Ingrese Usuario: ");
            // this.pass=prompt("Ingrese Password: ");
            // this.datosU=[{
            //     nombre: this.nombre,
            //     apellido: this.apellido,
            //     cedula:this.cedula,
            //     usuario: this.usuario,
            //     pass: this.pass
            // }]
/**
 * USANDO UN FOR..IN PARA INGRESO DE DATOS
 */
                const datosU={
                    nombre: this.nombre,
                    apellido: this.apellido,
                    cedula:this.cedula,
                    usuario: this.usuario,
                    pass: this.pass
                }
                for (const property in datosU) {
                   datosU[property] = prompt('Ingrese '+property+': ');
                }
                console.log(datosU);    
            return this.datosU=datosU;
            }
    
    // Método para obtener el nombre de usuario
/*     darUsuario() {
        return this.datosU.usuario;
    }

    // Método para obtener la contraseña
    darPass() {
        return this.pass;
    } */
   

     login (){
        let x=true; let y=true;
        console.log("DENTRO DEL LOGIN: "+ this.datosU.usuario);
    
        if(this.datosU.usuario===null){
            alert("DEBE REGISTRAR USUARIO");
            this.ingresoDatos();
        }
        while (x) {
            console.log("USUARIO en WHILE(x): "+this.datosU.pass);
            let user=prompt("INGRESE USUARIO O X PARA MENU: ");
                if(user ==="X" || user==="x"){
                    x=false;
                    y=false;
                    break;
                } else if (user===this.datosU.usuario){
                    //NO HAY ACCIONES AQUI,SI VALIDA user, SALTA A BLOQUE WHILE(y) A VALIDAR PASSWORD
                    break;
                }else {alert("INGRESE USUARIO VALIDO")}
        }
        while (y) {
            console.log("PASS en el WHILE(y): "+this.datosU.pass);
            let user=prompt("PASSWORD: ");
                if (user===this.datosU.pass){
                    alert("Validacion correcta!! \n SIGA SIGA")
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
            u.ingresoDatos();//Pide registro de datos usuario
        break;
        case 1:
            u.login();//Pide Login usando datos ingresados
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