let cajaSabores = []
const contenedorSabores = document.getElementById("contenedorSabores");

fetch("./data.json")
    .then(response => response.json())
    .then(data => {
        data.forEach(sabor => {
            const card = document.createElement("div");
            card.classList.add("col-xl-3", "col-md-6", "col-xs-12");
            card.innerHTML = `
                    <div class= "card">
                        <img src= "${sabor.img}" class= "card-img-top imgProductos" alt= "${sabor.nombre}">
                        <div class= "card-body">
                            <h5 class= "colorLetra">${sabor.nombre}</h5>
                            <button class= "btn estiloBoton" id= "boton${sabor.id}">Añadir sabor </button>
                        </div>
                    </div>
                            `
            contenedorSabores.appendChild(card);

            const boton1 = document.getElementById(`boton${sabor.id}`);
            boton1.addEventListener("click", () => {
                agregarSabor(sabor.id);
            })
        });
    })

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

    cajaSabores.forEach(sabor => {
        const card = document.createElement("div");
        card.classList.add("col-xl-3", "col-md-6", "col-xs-12");
        card.innerHTML = `
                <div class= "card">
                    <img src= "${sabor.img}" class= "card-img-top imgProductos" alt= "${sabor.nombre}">
                    <div class= card-body">
                        <h5 class= "nombrePosicion">${sabor.nombre}</h5>
                        <button class= "btn estiloBoton" id= "eliminar${sabor.id}">Eliminar sabor</button>
                    </div>
                </div>
                        `
        contenedorSaboresPedidos.appendChild(card);

        const boton2 = document.getElementById(`eliminar${sabor.id}`);
        boton2.addEventListener("click", () => {
            eliminarDeLaCajaSabores(sabor.id);
        })
    })
}

const eliminarDeLaCajaSabores = (id) => {
    const saborcito = cajaSabores.find(sabor => sabor.id === id);
    const indice = cajaSabores.indexOf(saborcito);
    cajaSabores.splice(indice, 1);
    mostrarSaborElegido()

    localStorage.setItem("cajaSabores", JSON.stringify(cajaSabores));
}

const vaciarCajaSabores = document.getElementById("vaciarCajaSabores");

vaciarCajaSabores.addEventListener("click", () => {
    eliminarTodosLosSabores();
})

const eliminarTodosLosSabores = () => {
    cajaSabores = []
    mostrarSaborElegido();

    localStorage.clear();
}
