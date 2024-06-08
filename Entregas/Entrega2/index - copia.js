
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
 * USANDO PROMPT  Y VARIABLES SIMPLES PARA INGRESO DE DATOS
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
 * USANDO OBJETO y FOR..IN PARA INGRESO DE DATOS
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
    
     login (){
        let x=true; let y=true;
        console.log("DENTRO DEL LOGIN: "+ this.usuario);//LINEA PARA VERIFICACION EN CONSOLA
            if(this.datosU.usuario===null){
                alert("DEBE REGISTRAR USUARIO");
                this.ingresoDatos();
            }
            while (x) {
            console.log("USUARIO en WHILE(x): "+this.pass);//LINEA PARA VERIFICACION EN CONSOLA
                let user=prompt("INGRESE USUARIO O X PARA SALIR: ");
                    if(user ==="X" || user==="x"){
                        x=false;
                        y=false;
                        break;
                    } else if (user===this.datosU.usuario){
                        //NO HAY ACCIONES AQUI,SI VALIDA user, SALTA A BLOQUE WHILE(y) A VALIDAR PASSWORD
                        break;
                    }else {alert("INGRESE USUARIO VALIDO O DEBE REGISTRARSE")}
            }
            while (y) {
                let user=prompt("PASSWORD: ");
                    if (user===this.datosU.pass){
                        alert("Validacion correcta!! \n SIGA SIGA");
                        x=false;
                        y=false;opcion=false;
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
alert("USTED ESTA SALIENDO DEL LOGIN");