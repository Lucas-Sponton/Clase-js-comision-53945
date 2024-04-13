//¿Qué funcionalidad debe tener un carrito de compras?

//1) Mostrar productos en el HTML de forma dinámica. 
//2) Agregar productos en el carrito. 
//3) Evitar la carga de productos repetidos en el carrito. 
//4) Mostrar el carrito en el HTML de forma dinámica. 
//5) Eliminar productos del carrito. 
//6) Calcular el total de la compra. 
//7) Vaciar el carrito.  
//8) Guarda el carrito en el localStorage.


class Tamaño {
    constructor(id, nombre, precio, img) {
        this.id = id;
        this.nombre = nombre;
        this.precio = precio;
        this.img = img;
        this.cantidad = 1;
    }
}
/*class Sabores {
    constructor(id, nombre, img) {
        this.id = id;
        this.nombbre = nombre;
    }
}*/

const cuarto = new Tamaño(1, "1/4 de kilo", 1200, "multimedia/img-tamaños/cuarto-de-helado-1.png");
const medio = new Tamaño(2, "1/2 de kilo", 1700, "multimedia/img-tamaños/cuarto-de-helado-1.png");
const kilo = new Tamaño(3, "1 kilo", 2200, "multimedia/img-tamaños/cuarto-de-helado-1.png");

//creamos un array con todo nuestro catalogo de productos:
const productos = [cuarto, medio, kilo];
//creamos el array del carrito.
let carrito = [];
//cargar carrito desde el localstorage.
//si hay algo en el local, lo cargamos en el carrito.
if(localStorage.getItem("carrito")){
    carrito = json.parse(localStorage.getItem("carrito"));
}
//modificamos el dom mostrando los productos:
const contenedorProductos = document.getElementById("contenedorProductos");


const mostrarProductos = () => {
    productos.forEach( tamaño => {
        const card = document.createElement("div");
        card.classList.add("col-xl-3", "col-md-6", "col-xs-12");
        card.innerHTML = `
                <div class="card">
                    <img src="${tamaño.img}" class="card-img-top imgProductos" alt="${tamaño.nombre}">
                    <div class= "card-body">
                        <h5>${tamaño.nombre}</h5>
                        <p> ${tamaño.precio} </p>
                        <button class="btn colorBoton" id="boton${tamaño.id}" > Agregar al carrito </button>
                    </div>
                </div>
                        `
        contenedorProductos.appendChild(card);
//agregar productos al carrito
        const boton = document.getElementById(`boton${tamaño.id}`);
        boton.addEventListener("click", () => {
            agregarAlCarrito(tamaño.id);
        })
    })
}

mostrarProductos();
//creamos la funcion agregar al carrito
const agregarAlCarrito = (id) => {
    const tamañoEnCarrito = carrito.find(tamaño => tamaño.id === id);
    if(tamañoEnCarrito) {
        tamañoEnCarrito.cantidad++;
    } else {
        const tamaño = productos.find(tamaño => tamaño.id === id);
        carrito.push(tamaño)
    }
    //trabajamos con el localstorage:
    localStorage.setItem("carrito", JSON.stringify(carrito));
    calcularTotal();
}
//mostrar el carrito de compras:
const contenedorCarrito = document.getElementById("contenedorCarrito");
const verCarrito = document.getElementById("verCarrito");

verCarrito.addEventListener("click", () => {
    mostrarCarrito();
})
//funcion para mostrar el carrito:
const mostrarCarrito = () => {
    contenedorCarrito.innerHTML = "";

    carrito.forEach(tamaño => {
        const card = document.createElement("div");
        card.classList.add("col-xl-3", "col-md-6", "col-xs-12");
        card.innerHTML = `
                <div class="card">
                    <img src="${tamaño.img}" class="card-img-top imgProductos" alt="${tamaño.nombre}">
                    <div class="card-body">
                        <h5>${tamaño.nombre}</h5>
                        <p> ${tamaño.precio} </p>
                        <p> ${tamaño.cantidad} </p>
                        <button class="btn colorBoton" id="eliminar${tamaño.id}">Eliminar producto</button>
                    </div>
                </div>
                        `
        contenedorCarrito.appendChild(card);
//eliminar productos del carrito
        const boton = document.getElementById(`eliminar${tamaño.id}`);
        boton.addEventListener("click", () => {
            eliminarDelCarrito(tamaño.id);
        })
    })
    calcularTotal();
}
//funcion que elimina el producto del carrito:

const eliminarDelCarrito = (id) => {
    const tamaño = carrito.find(tamaño => tamaño.id === id);
    const indice = carrito.indexOf(tamaño);
    carrito.splice(indice, 1);
    mostrarCarrito();

    //trabajamos en el localstorage
    localStorage.setItem("carrito", JSON.stringify(carrito));
}

//vaciamos todo el carrito de compras.

const vaciarCarrito = document.getElementById("vaciarCarrito");

vaciarCarrito.addEventListener("click", () => {
    eliminarTodoElCarrito();
})

//funcion que elimina todo el carrito:
const eliminarTodoElCarrito = () => {
    carrito = [];
    mostrarCarrito();

    //local storage:
    localStorage.clear();
}

//mostramos mensaje con el total de la compra

const total = document.getElementById("total");

const calcularTotal = () => {
    let totalCompra = 0;
    carrito.forEach(tamaño => {
        totalCompra += tamaño.precio * tamaño.cantidad;
        //+= es igual a poner total compra = total compa + producto.precio * producto.cantidad
    })
    total.innerHTML = `Total: $${totalCompra}`;
}