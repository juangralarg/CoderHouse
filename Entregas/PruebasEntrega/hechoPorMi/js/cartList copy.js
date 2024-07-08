
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
            <tr>
                <TD> ${producto.nombre} </TD>
                <TD> ${producto.precio} $ </TD>
                <TD> ${producto.cantidad} </TD>
                <TD> ${total} $ </TD>
            </tr>
         </tbody>

        
    `;
    carritoContainer.appendChild(productoElemento);
});
totalCarrito()
}
/**
 * Lo saue del inner de arriba:
 * 
 *             <td class="cantidadBTN">
                            <button onclick="bajaCantidad()"> BAJAR </button>
                            <button onclick="subirCantidad()"> SUBIR </button>
                        </td>
 */



function totalCarrito(){
    let IVA=22;
    let carrito = JSON.parse(localStorage.getItem('carrito')) || [];

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