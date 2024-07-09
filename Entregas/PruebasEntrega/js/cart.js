const contenedorProductos = document.getElementById("item-producto");
const numeroCarrito = document.getElementById("numero-carrito");


document.addEventListener('DOMContentLoaded', () => {
 
  ListarProductosStock();
  //listarProductosCarrito();
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
    event.preventDefault()
    numeroCarrito.textContent = cantidad;
  }


  
/**
 * NUMERO DE ITEMS EN EL CARRITO
 */
function nroItemsCarrito(){
    numeroCarrito.innerHTML=`${carrito.length}`;
  
}

