

listarProductosCarrito();
obtenerCarritoDeLocalStorage();

function listarProductosCarrito(){
  
    let carrito = obtenerCarritoDeLocalStorage() // Obtener el carrito desde localStorage. En cart.js
    let productosAgrupados = carrito.reduce((agrupar, producto) => {// Agrupar los productos por id
        
    if (!agrupar[producto.id]) {
            agrupar[producto.id] = { ...producto, cantidad: 0 };
        }
        agrupar[producto.id].cantidad += 1;
        return agrupar;
        }, {});

    productosAgrupados = Object.values(productosAgrupados);// Convertir el objeto en un array 

    const carritoContainer = document.getElementById('carrito-items');// Obtener el contenedor del carrito


    productosAgrupados.forEach(producto => {// Mostrar los productos agrupados en el contenedor

    const total = producto.precio*producto.cantidad;
    const productoElemento = document.createElement('tr');
    
        productoElemento.innerHTML = `
            <tbody>
                <tr>
                    <TD> ${producto.nombre} </TD>
                    <TD> ${producto.precio} $ </TD>
                    <TD> ${producto.cantidad} </TD>
                    <TD> ${total} $ </TD>
                    <td> <button onclick="borrarItem(${producto.id},-1)"> Quitar </button> 
                </tr>
            </tbody>
        `;

        carritoContainer.appendChild(productoElemento);
    });
   /*  console.log(productosAgrupados); */
    if(productosAgrupados.length<=0){
       
        const productoElemento = document.createElement('tr');
         productoElemento.innerHTML = `
            <tbody>
                 <Tr>
                    <td colspan="5">CARRITO VACIO</td>
                </Tr>
            </tbody>
        `;
        carritoContainer.appendChild(productoElemento);
    }

    totalCarrito()
}

function obtenerCarritoDeLocalStorage() {
    let carrito = JSON.parse(localStorage.getItem('carrito')) || [];
    return carrito 
  }


/**
 * INSTRUCCIONES AL TERMINAR LA COMPRA
 */
function comprarCarrito(){
    event.preventDefault();
    let carrito = obtenerCarritoDeLocalStorage()
    let total = 0;
    let IVA=22;

    carrito.forEach(item => {
        total += item.precio;});

    let aPagar=total+(total*(IVA)/100);

    popupSwalPago(aPagar); 
        /* return aPagar; */
}



    
      

function totalCarrito(){
    
    let IVA=22;
    let carrito = obtenerCarritoDeLocalStorage()
    const carritoTtoal = document.getElementById('carrito-values');// Obtener el contenedor del carrito
                        
// Calcular total 
    let total = 0;
        carrito.forEach(item => {
            total += item.precio; });

    if (carrito !=0 ){
        const tabla = document.createElement('tr');
        let itemsCarrito = carrito.length;
        let aPagarSinRedondear=(total+(total*(IVA)/100));
        let aPagar= aPagarSinRedondear.toFixed(2);//DEVUELVE EN FORMATO STRING
            tabla.innerHTML = `
                    <tbody>
                        <Tr>
                            <Td> ${itemsCarrito} </Td>
                            <Td>  ${total}</Td>
                            <Td>  ${IVA}% </Td>
                            <Td> ${aPagar}  </Td>
                        </Tr>
                    </tbody>
                `;
    /*    carritoTtoal.innerHTML = '';//VERIFICACION DE VALORES */
        carritoTtoal.appendChild(tabla);
            } else {
                const tabla = document.createElement('tr');
                tabla.innerHTML = `
                <tbody>
                    <Tr>
                        <td colspan="4">SIN ITEMS PARA SUMAR</td>
                    </Tr>
                </tbody>
            `;

    carritoTtoal.appendChild(tabla);
            }
  
}
        

function borrarItem(id){
    event.preventDefault();
    let carrito = localStorage.getItem('carrito');
    if (carrito){
        carrito=JSON.parse(carrito);

        const indice= carrito.findIndex(producto=>producto.id=== id);

        if (indice !== -1){
            carrito.splice(indice,1);

            localStorage.setItem('carrito',JSON.stringify(carrito))
            location.reload();
           
            } else {
                //console.log(`No s eencontro el id: ${id}`);
                location.reload();
            }; 
         
        }else {
            //console.log(`No exite elemento`);
            location.reload();
        }
    }
    
    /* **********************************
    * ALERTAS USANDO SWEET ALERT
    *************************************/

    function alertaLogout() {
        const swalWithBootstrapButtons = Swal.mixin({
            customClass: {
              confirmButton: "btn btn-success",
              cancelButton: "btn btn-danger"
            },
            buttonsStyling: false
          });
          swalWithBootstrapButtons.fire({
            title: "LOGOUT",
            text: "Desea Salir del sistema?",
            icon: "warning",
            showCancelButton: true,
            confirmButtonText: "Yes",
            confirmButtonColor: "#0082AC",
            cancelButtonText: "No",
            reverseButtons: true
          }).then((result) => {
            if (result.isConfirmed) {
              swalWithBootstrapButtons.fire({
                title: "Gracias",
                text: "Vuelva pronto",
                icon: "success"
              });
              {
                window.location.href = '../../index.html';
            }
            } else if (
              result.dismiss === Swal.DismissReason.cancel
            ) {
              swalWithBootstrapButtons.fire({
                title: "Logout cancelado",
                text: "Puede seguir comprando",
                icon: "error"
              });
            }
          });
    }
/*
 * POPUP PAGO TOTAL
 */
    function popupSwalPago(valor){
        Swal.fire({
        title: `Abonarà ${valor} $`,
        width: 600,
        padding: "3em",
        color: "#716add",
        background: "#fff url(/images/trees.png)"
        });
    }

    //FIN DEL SCRIPT
   
