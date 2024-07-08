
listarProductosCarrito();

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
       <tbody>
            <TR>
                <TD> ${producto.nombre} </TD>
                <TD> ${producto.precio}$ </TD>
                <TD> ${producto.cantidad} </TD>
                <TD> ${total} </TD>
            </TR>
         </tbody>

        
    `;
    carritoContainer.appendChild(productoElemento);
});
/**
 * Lo saue del inner de arriba:
 * 
 *             <td class="cantidadBTN">
                            <button onclick="bajaCantidad()"> BAJAR </button>
                            <button onclick="subirCantidad()"> SUBIR </button>
                        </td>
 */
}