const contenedorProductos = document.getElementById("item-producto");
const numeroCarrito = document.getElementById("numero-carrito");


document.addEventListener('DOMContentLoaded', () => {
 
  if (contenedorProductos) {
    ListarProductosStock();
    cargarCarritoDesdeLocalStorage();
  } /* else {
    console.log("Elemento con ID 'item-producto' no encontrado en el DOM.");
  } */
});

/**
 *FUNCIO LISTAR ARTICULOS DESDE ARCHIVO .JSON 
 */ 
function ListarProductosStock(){

  fetch('../db/productos.json')
    .then((datos) => datos.json())
      .then((productos) => {
            productos.forEach((producto) => {
              const nuevoProducto = document.createElement('div');
              nuevoProducto.classList.add('tarjeta-producto');
              nuevoProducto.innerHTML= `
                    <img src="../../img/producto${producto.id}.png" alt="${producto.nombre}">
                    <h3> ${producto.nombre} </h3>
                    <P> ${producto.precio} </P>
                    <button>Comprar</button>
                    `;
              contenedorProductos.appendChild(nuevoProducto);
              nuevoProducto.getElementsByTagName("button")[0].addEventListener("click", ()=>agregarAlCarrito(producto))
            });
      }) 
}

/**
 * FUNCIONES CARRITO
 */

  function agregarAlCarrito(producto) {
    event.preventDefault();
    nroItemsCarrito();
    let carrito = obtenerCarritoDeLocalStorage();
    carrito.push(producto);
    localStorage.setItem('carrito', JSON.stringify(carrito)); //Guardar carrito en localStorage
    actualizarNumeroCarrito(carrito.length);
    popupToastifyAddCart()
  }
  
  function obtenerCarritoDeLocalStorage() {
    let carrito = JSON.parse(localStorage.getItem('carrito')) || [];
    return carrito 
  }
  

  function cargarCarritoDesdeLocalStorage() {
    let carrito = obtenerCarritoDeLocalStorage();
    actualizarNumeroCarrito(carrito.length);
  }
  
  function actualizarNumeroCarrito(cantidad) {
    if (numeroCarrito) {  // Verifica si numeroCarrito no es null
      numeroCarrito.textContent = cantidad;
    } else{}
  }


  
/**
 * NUMERO DE ITEMS EN EL CARRITO
 */
function nroItemsCarrito(){
  if (numeroCarrito) {  // Verifica si numeroCarrito no es null
    numeroCarrito.innerHTML = `${carrito.length}`;
  }
}

function popupToastifyAddCart() {

 Toastify({
    text: `Producto agregado`,
    className: "info",
    duration: 2000,
    oldestFirst: true,
    escapeMarkup: true,
    offset: {
      x: 0, // horizontal axis - can be a number or a string indicating unity. eg: '2em'
      y: 60 // vertical axis - can be a number or a string indicating unity. eg: '2em'
    },
    style: {
      background: "linear-gradient(to right,#0082ac, #013A66,#0082ac)",
      
    }
  }).showToast();   }
