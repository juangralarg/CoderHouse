const contenedorProductos = document.getElementById("item-producto");
const numeroCarrito = document.getElementById("numero-carrito");


document.addEventListener('DOMContentLoaded', () => {

  ListarProductosStock();
  listarProductosCarrito();
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
    nroItemsCarrito();
    let carrito = obtenerCarritoDeLocalStorage();
    carrito.push(producto);
    guardarCarritoEnLocalStorage(carrito);
    actualizarNumeroCarrito(carrito.length);
  }
  
  function obtenerCarritoDeLocalStorage() {
    let carrito = localStorage.getItem('carrito');
    return carrito ? JSON.parse(carrito) : [];
  }
  
  function guardarCarritoEnLocalStorage(carrito) {
    localStorage.setItem('carrito', JSON.stringify(carrito));
  }

  function cargarCarritoDesdeLocalStorage() {
    let carrito = obtenerCarritoDeLocalStorage();
    actualizarNumeroCarrito(carrito.length);
  }
  
  function actualizarNumeroCarrito(cantidad) {
    numeroCarrito.textContent = cantidad;
  }


  
/**
 * NUMERO DE ITEMS EN EL CARRITO
 */
function nroItemsCarrito(){
    numeroCarrito.innerHTML=`${carrito.length}`;
  
}

function listarProductosCarrito(){
  
  // Obtener el carrito desde localStorage
  let carrito = JSON.parse(localStorage.getItem('carrito')) || [];
  
  // Agrupar los productos por id
  let productosAgrupados = carrito.reduce((acc, producto) => {
      if (!acc[producto.id]) {
          acc[producto.id] = { ...producto, cantidad: 0 };
      }
      acc[producto.id].cantidad += 1;
      return acc;
  }, {});
  
  // Convertir el objeto en un array 
  productosAgrupados = Object.values(productosAgrupados);
  
  // Obtener el contenedor del carrito
  const carritoContainer = document.getElementById('carrito-items');
  
  // Mostrar los productos agrupados en el contenedor
  productosAgrupados.forEach(producto => {
  
      const total = producto.precio*producto.cantidad;
      const productoElemento = document.createElement('tr');
      
      productoElemento.innerHTML = `
         
                  <TD> ${producto.nombre} </TD>
                  <TD> ${producto.precio}$ </TD>
                  <TD> ${producto.cantidad} </TD>
                  <TD> ${total} </TD>
                  
              <td class="cantidadBTN">
                              <button onclick="bajaCantidad()"> BAJAR </button>
                              <button onclick="subirCantidad()"> SUBIR </button>
                          </td>
          
      `;
      carritoContainer.appendChild(productoElemento);
  });

}