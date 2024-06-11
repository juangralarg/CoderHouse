$('.toggle').click(function(){
    $('.formulario').animate({
        height: "toggle",
        'padding-top': 'toggle',
        'padding-bottom': 'toggle',
        opacity: 'toggle'
    }, "slow");
});

class LoginSystem{

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

validacion(){
    //Datos que ingresa usuario desde login page
let usr=document.querySelector('#GetUsuario').value;//Toma valor ingresado en campo Usuario
let pas=document.querySelector('#GetPass').value;//Toma valor ingresado en campo Contraseña

console.log("Metodo en LoginSystem "+usr);

}
   
}//fin clase loginSystem

const l=new LoginSystem(nombre, apellido, cedula, usuario,pass);

let log=l.validacion();
