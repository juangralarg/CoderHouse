
 
 /**
 * FUNCION REGISTRO DE USUARIOS
 * @returns usuarios registrados
 */
        let registro = function () {    

            let nom=document.querySelector('#SetNombre').value;//
            let ape=document.querySelector('#SetApellido').value;//
            let mai=document.querySelector('#SetMail').value;//
            let usu=document.querySelector('#SetUsuario').value;//
            let pas=document.querySelector('#SetPassword').value;//
             
            const datosU=[{
                    nombre: nom,
                    apellido: ape,
                    email: mai,
                    usuario: usu,
                    pass: pas
                }]
                
        /**
         * PRUEBAS JSON
         */       
            
          // Obtener los datos existentes en localStorage (si existen)
          let usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];
        
          // Agregar el nuevo usuario al array de usuarios
          usuarios.push(datosU);
        
          // Guardar el array actualizado en localStorage
          localStorage.setItem('usuarios', JSON.stringify(usuarios));
        
          // Limpiar los campos del formulario
          document.querySelector('#SetNombre').reset();
          document.querySelector('#SetApellido').reset();
          document.querySelector('#SetMail').reset();
          document.querySelector('#SetUsuario').reset();
          document.querySelector('#SetPassword').reset();
        
           //Envia mensaje a DIV con ID "mensajeRegistro" en el documento
           document.querySelector('#SetPassword').innerText = "Usuario y password REGISTRADO";
        
        
        
        return registroUsuarios;
        }
        
        
        /**
         * EFECTO EN FORMULARIOS CON BOTONES
         */
        function mostrarLogin() {
            let docuLogin = document.getElementById('contenido');
            document.getElementById('contenido').innerHTML =`
                <div id="formlogin">
                    <h2>Iniciar Sesión</h2>
                    <form action="#">
                            <input type="text" id="GetUsuario" placeholder="Usuario" required>
                            <input type="password" id="GetPass" placeholder="Contraseña" required>
                            <input type="submit" id="login" value="Iniciar Sesión" onclick="validacion()">
                            <div id="mensajeLogin"></div>
                    </form>
                    </div>
            `;
            
        /*
        * OPERADOR TERNARIO
        */
            (docuLogin!=null)
            ?document.getElementById('formlogin').style.display = 'block'
            : document.getElementById('formregistro').style.display = 'none';
          
        
        
        }
        
        
        function mostrarRegistro() {
        let docuRegister= document.getElementById('contenido');

            document.getElementById('contenido').innerHTML = `            
            <div id="formregistro">
                <h2>Crea tu Cuenta</h2>
                <form action="#">
                    <input type="text" id="SetNombre" placeholder="Nombre" required>
                    <input type="text" id="SetApellido" placeholder="Apellido" required>
                    <input type="email" id="SetMail" placeholder="Correo Electronico" required>
                    <input type="text" id="SetUsuario" placeholder="Usuario" required>
                    <input type="password" id="SetPassword" placeholder="Contraseña" required>
                    <input type="submit" id="register" value="Registrarse" onclick="registro()" >
                </form>
            </div>
        `;
        
        /*
        * OPERADOR TERNARIO
        */
        (docuRegister!=null)
        ? document.getElementById('formregistro').style.display = 'block'
         :document.getElementById('formlogin').style.display = 'none';


        }
        
        
        /**
         * FUNCION PARA VALIDACIONES USUARIO
         */
        let validacion = function(){
           
           let usr=document.querySelector('#GetUsuario').value;//Toma valor ingresado en campo Usuario
           let pas=document.querySelector('#GetPass').value;//Toma valor ingresado en campo PAssword

           let usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];//Lee localstorage para tomar informacion de USR y PASS
                  
            let [[{ usuario, pass }]]= usuarios; //Desestructura informacion para tomar valores USR Y PASS
        
            // VARIFICACION: Imprime para corrobar los valores de usuario y pass
            console.log('Usuario:', usuario); //
            console.log('Contraseña:', pass); //
           
               

           if (usr==usuario && pas==pass){
            //Envia mensaje a <DIV> con ID "mensajeLogin" en el documento
            document.querySelector('#mensajeLogin').innerText = "Usuario y password correcto";
            window.location.href='./principal.html';//redirecciona a pagina. NO FUNCIONA AUN
        }else{
            document.querySelector('#mensajeLogin').innerText = "Datos incorrectos";
        }

        }
    