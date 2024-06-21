/**
 * CODIGO PARA TOGGLE ENTRE LOGIN Y REGISTRO
 */
$('.toggle').click(function(){
    $('.formulario').animate({
        height: "toggle",
        'padding-top': 'toggle',
        'padding-bottom': 'toggle',
        opacity: 'toggle'
    }, "slow");
});

/**
 * FUNCION REGISTRO DE USUARIOS
 * @returns usuarios registrados
 */
let registro = function () {    
    let registroUsuarios=[];
    let nom=document.querySelector('#SetNombre').value;//
    let ape=document.querySelector('#SetApellido').value;//
    let mai=document.querySelector('#SetMail').value;//
    let usu=document.querySelector('#SetUsuario').value;//
    let pas=document.querySelector('#SetPassword').value;//
    const datosU={
        nombre: nom,
        apellido: ape,
        email: mai,
        usuario: usu,
        pass: pas
    }
    registroUsuarios.push(datosU);
      
return registroUsuarios;
}
  
// /**
//  * FUNCION PARA VALIDACIONES USUARIO
//  */
// let validacion = function(){
//     //Informacion del registro de Usuario
//     let reg = registro();
//     let usuario = reg[0]["usuario"];
//     let pass= reg[0]["pass"];

//     //Datos que ingresa usuario desde login page
//     let usr=document.querySelector('#GetUsuario').value;//Toma valor ingresado en campo Usuario
//     let pas=document.querySelector('#GetPass').value;//Toma valor ingresado en campo PAssword

//     console.log("Validado Usuario: "+usuario);
//     console.log("Validado Usuario: "+pass);
//     console.log(registro());

//     if (usr==usuario && pas==pass){
//         //Envia mensaje a DIV con ID "mensajeLogin" en el documento
//         document.querySelector('#mensajeLogin').innerText = "Usuario y password correcto";
//         window.location.href='https://juangralarg.github.io/CoderHouse/Entregas/PruebasEntrega/principal.html';//redirecciona a pagina. NO FUNCIONA AUN
//     }else{
//         document.querySelector('#mensajeLogin').innerText = "Datos incorrectos";
//     }
// }

// let listadoUsuarios = function () {
//     let reg = registro();
//       console.log(reg)
      

// }