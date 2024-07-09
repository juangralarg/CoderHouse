
listarProductosCarrito();

function listarProductosCarrito(){
  
// Obtener el carrito desde localStorage
let carrito = obtenerCarritoDeLocalStorage()

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
            <tr>
                <TD> ${producto.nombre} </TD>
                <TD> ${producto.precio} $ </TD>
                <TD> ${producto.cantidad} </TD>
                <TD> ${total} $ </TD>
                <td> <button onclick="cambiarCantidad(${producto.id},-1)"> - </button> 
                 <button onclick="cambiarCantidad(${producto.id},1)"> + </button> 
            </td>
            </tr>
         </tbody>

        
    `;
    carritoContainer.appendChild(productoElemento);
});
totalCarrito()
}

/**
 * INSTRUCCIONES AL TERMINAR LA COMPRA
 */
function comprarCarrito(){
    let carrito = obtenerCarritoDeLocalStorage()
    let total = 0;
    let IVA=22;
carrito.forEach(item => {
    total += item.precio;
});
let aPagar=total+(total*(IVA)/100);
console.log(aPagar);
}


function totalCarrito(){
    let IVA=22;
    let carrito = obtenerCarritoDeLocalStorage()

    // Obtener el contenedor del carrito
const carritoTtoal = document.getElementById('carrito-values');
                        
// Calcular el total de los precios
let total = 0;
carrito.forEach(item => {
    total += item.precio;
});

// Crear la tabla HTML dinámicamente
const tabla = document.createElement('tr');
let aPagar=total+(total*(IVA)/100);
tabla.innerHTML = `
        <tbody>
            <Tr>
                <Td> ${total} </Td>
                <Td> ${IVA}% </Td>
                <Td>   </Th>
                <Td> ${aPagar}  </Td>
            </Tr>
        </tbody>
    `;
carritoTtoal.innerHTML = '';
carritoTtoal.appendChild(tabla);

}//FIN DEL SCRIPT



// Función para cambiar la cantidad de un producto en el carrito
function cambiarCantidad(productId, cambio) {
    // Obtener el carrito desde localStorage
    let carrito = obtenerCarritoDeLocalStorage()

    // Encontrar el producto en el carrito y cambiar su cantidad
    let productoIndex = carrito.findIndex(producto => producto.id === productId);

    if (productoIndex !== -1) {
        if (cambio > 0 || (cambio < 0 && carrito[productoIndex].cantidad > 1)) {
            carrito[productoIndex].cantidad = (carrito[productoIndex].cantidad || 1) + cambio;
        }
        
        // Si la cantidad es 0 o menor, eliminar el producto del carrito
        if (carrito[productoIndex].cantidad <= 0) {
            carrito.splice(productoIndex, 1);
        }

        // Guardar el carrito actualizado en localStorage
        localStorage.setItem('carrito', JSON.stringify(carrito));

        // Actualizar la vista del carrito
        listarProductosCarrito();
    }
}