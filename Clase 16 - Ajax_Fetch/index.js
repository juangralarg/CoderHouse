
/**
 * CLASE 16
 */

//PASO 1
//fetch('productos.json')
//    .then((datos) => console.log(datos)); //aQUI RECIBE LA RESPONSE, PERO NO DA LOS DATOS. aUN NO ENTIENDE LA INFORMACION PORQUE VIENE SERIALIZADA.

//PASO 2
// Con esto tomo los datos del archivo JSON y lo envio a consola
// pero recibe un PROMISE PENDING,

/* fetch('productos.json')
   .then((datos) => console.log(datos.json())); */



//PASO 3
// y por eso se debe concatener otro then()
/* fetch('productos.json')
   .then((datos) => datos.json())
   .then((res) => console.log(res)); */

/**
 * PASO 4
 * Como recibe el objeto, se puede hacer un DESTRUCTURIG y traer la info que quiera
 */


/* fetch('productos.json')
   .then((datos) => datos.json())
   .then((res) => {
         res.forEach((item) => {
            console.log(item.nombre);
            console.log(item.precio);
         })        
    
}); */

/**
 * PROBANDO CON EL DOM 
 */
const contenedorProductos = document.getElementById("item-producto");

fetch('productos.json')
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
    
