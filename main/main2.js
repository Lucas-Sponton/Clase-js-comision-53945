

class Tamaño {
    constructor(id, nombre, precio, img) {
        this.id = id;
        this.nombre = nombre;
        this.precio = precio;
        this.img = img;
        this.cantidad = 1;
    }
}
class Sabores {
    constructor(id, nombre, img) {
        this.id = id;
        this.nombre = nombre;
        this.img = img;
    }
}

const cuarto = new Tamaño(1, "1/4 de kilo", 1200, "multimedia/img-tamaños/cuarto-de-helado-1.png");
const medio = new Tamaño(2, "1/2 de kilo", 1700, "multimedia/img-tamaños/cuarto-de-helado-1.png");
const kilo = new Tamaño(3, "1 kilo", 2200, "multimedia/img-tamaños/cuarto-de-helado-1.png");

const sabor1 = new Sabores(4, "Chocolate con almendras", "multimedia/img/img-sabores/sabor-chocolate-almendras.jpg")
const sabor2 = new Sabores(5, "Chocolate blanco", "multimedia/img/img-sabores/sabor-chocolate-blanco.jpg")
const sabor3 = new Sabores(6, "Chocolate", "multimedia/img/img-sabores/sabor-chocolate.jpg")
const sabor4 = new Sabores(7, "Crema americana", "multimedia/img/img-sabores/sabor-crema-americana.jpg")
const sabor5 = new Sabores(8, "Dulce de leche granizado", "multimedia/img/img-sabores/sabor-dulce-de-leche-granizado.jpg")
const sabor6 = new Sabores(9, "Dulce de leche", "multimedia/img/img-sabores/sabor-dulce-de-leche.jpg")
const sabor7 = new Sabores(10, "Frutilla al agua", "multimedia/img/img-sabores/sabor-frutilla-agua.jpg")
const sabor8 = new Sabores(11, "Frutos rojos", "multimedia/img/img-sabores/sabor-frutos-rojos.jpg")
const sabor9 = new Sabores(12, "Granizado", "multimedia/img/img-sabores/sabor-granizado.jpg")
const sabor10 = new Sabores(13, "Limón", "multimedia/img/img-sabores/sabor-limon.jpg")
const sabor11 = new Sabores(14, "Maracuyá", "multimedia/img/img-sabores/sabor-maracuya.jpg")
const sabor12 = new Sabores(15, "Menta granizada", "multimedia/img/img-sabores/sabor-menta-granizada.jpg")
const sabor13 = new Sabores(16, "Naranja", "multimedia/img/img-sabores/sabor-naranja.jpg")
const sabor14 = new Sabores(17, "Pistacho", "multimedia/img/img-sabores/sabor-pistacho.jpg")
const sabor15 = new Sabores(18, "Sambayón", "multimedia/img/img-sabores/sabor-sambayon.jpg")
const sabor16 = new Sabores(19, "Tiramisú", "multimedia/img/img-sabores/sabor-tiramisu.jpg")
const sabor17 = new Sabores(20, "Tramontana", "multimedia/img/img-sabores/sabor-tramontana.jpg")
const sabor18 = new Sabores(21, "Vainilla", "multimedia/img/img-sabores/sabor-vainilla.jpg")

//sabores:
const sabor = [sabor1, sabor2, sabor3, sabor4, sabor5, sabor6, sabor7, sabor8, sabor9, sabor10, sabor11, sabor12, sabor13, sabor14, sabor15, sabor16, sabor17, sabor18]

let cajaSabores = [];

if(localStorage.getItem("cajaSabores")) {
    cajaSabores = JSON.parse(localStorage.getItem("cajaSabores"));
}

const contenedorSabores = document.getElementById("contenedorSabores");

const mostrarSabores = () => {
    sabor.forEach( sabores => {
        const card = document.createElement("div");
        card.classList.add("col-xl-3", "col-md-6", "col-xs-12");
        card.innerHTML = `
                <div class="card">
                    <img src="${sabores.img}" class="card-img-top imgSabores" alt="${sabores.nombre}">
                    <div class= "card-body">
                        <h5 class="nombrePosicion"> ${sabores.nombre}</h5>
                        <button class="btn estiloBoton" id="boton${sabores.id}">Añadir sabor </button>
                    </div>
                </div>
                        `
        contenedorSabores.appendChild(card);

        const boton1 = document.getElementById(`boton${sabores.id}`);
        boton1.addEventListener("click", () => {
            agregarSabor(sabores.id);
        })
    })
}

mostrarSabores();

const agregarSabor = (id) => {
    const sabores = sabor.find(sabores => sabores.id === id);
    cajaSabores.push(sabores);

    localStorage.setItem("cajaSabores", JSON.stringify(cajaSabores));
}

const contenedorSaboresPedidos = document.getElementById("contenedorSaboresPedidos");
const verSabores = document.getElementById("verSabores");

verSabores.addEventListener("click", () => {
    mostrarSaborElegido();
})

const mostrarSaborElegido = () => {
    contenedorSaboresPedidos.innerHTML = "";

    cajaSabores.forEach(sabores => {
        const card = document.createElement("div");
        card.classList.add("col-xl-3", "col-md-6", "col-xs-12");
        card.innerHTML = `
                <div class="card">
                    <img src="${sabores.img}" class="card-img-top imgProductos" alt="${sabores.nombre}">
                    <div class="card-body">
                        <h5 class="nombrePosicion">${sabores.nombre}</h5>
                        <button class="btn estiloBoton" id="eliminar${sabores.id}">Eliminar sabor</button>
                    </div>
                </div>
                        `
        contenedorSaboresPedidos.appendChild(card);

        const boton2 = document.getElementById(`eliminar${sabores.id}`);
        boton2.addEventListener("click", () => {
            elimiarDeLaCajaSabores(sabores.id);
        })
    })
}

const elimiarDeLaCajaSabores = (id) => {
    const sabor = cajaSabores.find(sabores => sabores.id === id);
    const indice = cajaSabores.indexOf(sabor);
    cajaSabores.splice(indice, 1);
    mostrarSaborElegido()

    localStorage.setItem("cajaSabores", JSON.stringify(cajaSabores));
}

const vaciarCajaSabores = document.getElementById("vaciarCajaSabores");

vaciarCajaSabores.addEventListener("click", () => {
    eliminarTodosLosSabores();
})

const eliminarTodosLosSabores = () => {
    cajaSabores = [];
    mostrarSaborElegido();

    localStorage.clear();
}









//tamaño:


const productos = [cuarto, medio, kilo];

let carrito = [];

if(localStorage.getItem("carrito")){
    carrito = JSON.parse(localStorage.getItem("carrito"));
}

const contenedorProductos = document.getElementById("contenedorProductos");


const mostrarProductos = () => {
    productos.forEach( tamaño => {
        const card = document.createElement("div");
        card.classList.add("col-xl-3", "col-md-6", "col-xs-12");
        card.innerHTML = `
                <div class="card">
                    <img src="${tamaño.img}" class="card-img-top imgProductos" alt="${tamaño.nombre}">
                    <div class= "card-body">
                        <h5 class="colorLetra">${tamaño.nombre}</h5>
                        <p class="colorLetra"> ${tamaño.precio} </p>
                        <button class="btn colorBoton" id="boton${tamaño.id}" > Agregar al carrito </button>
                    </div>
                </div>
                        `
        contenedorProductos.appendChild(card);

        const boton = document.getElementById(`boton${tamaño.id}`);
        boton.addEventListener("click", () => {
            agregarAlCarrito(tamaño.id);
        })
    })
}

mostrarProductos();

const agregarAlCarrito = (id) => {
    const tamañoEnCarrito = carrito.find(tamaño => tamaño.id === id);
    if(tamañoEnCarrito) {
        tamañoEnCarrito.cantidad++;
    } else {
        const tamaño = productos.find(tamaño => tamaño.id === id);
        carrito.push(tamaño)
    }
    localStorage.setItem("carrito", JSON.stringify(carrito));
    calcularTotal();
}

const contenedorCarrito = document.getElementById("contenedorCarrito");
const verCarrito = document.getElementById("verCarrito");

verCarrito.addEventListener("click", () => {
    mostrarCarrito();
})

const mostrarCarrito = () => {
    contenedorCarrito.innerHTML = "";

    carrito.forEach(tamaño => {
        const card = document.createElement("div");
        card.classList.add("col-xl-3", "col-md-6", "col-xs-12");
        card.innerHTML = `
                <div class="card">
                    <img src="${tamaño.img}" class="card-img-top imgProductos1" alt="${tamaño.nombre}">
                    <div class="card-body">
                        <h5 class="colorLetra">${tamaño.nombre}</h5>
                        <p class="colorLetra"> ${tamaño.precio} </p>
                        <p class="colorLetra"> ${tamaño.cantidad} </p>
                        <button class="btn colorBoton3" id="eliminar${tamaño.id}">Eliminar producto</button>
                    </div>
                </div>
                        `
        contenedorCarrito.appendChild(card);

        const boton = document.getElementById(`eliminar${tamaño.id}`);
        boton.addEventListener("click", () => {
            eliminarDelCarrito(tamaño.id);
        })
    })
    calcularTotal();
}


const eliminarDelCarrito = (id) => {
    const tamaño = carrito.find(tamaño => tamaño.id === id);
    const indice = carrito.indexOf(tamaño);
    carrito.splice(indice, 1);
    mostrarCarrito();

    localStorage.setItem("carrito", JSON.stringify(carrito));
}



const vaciarCarrito = document.getElementById("vaciarCarrito");

vaciarCarrito.addEventListener("click", () => {
    eliminarTodoElCarrito();
})


const eliminarTodoElCarrito = () => {
    carrito = [];
    mostrarCarrito();

    localStorage.clear();
}


const total = document.getElementById("total");

const calcularTotal = () => {
    let totalCompra = 0;
    carrito.forEach(tamaño => {
        totalCompra += tamaño.precio * tamaño.cantidad;
    })
    total.innerHTML = `Total: $${totalCompra}`;
}