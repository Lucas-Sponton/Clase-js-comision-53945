
let totalCarrito = 0

const producto = [{ id: 1, nombre: 'Cuarto kilo de helado', precio: 1200 },
{ id: 2, nombre: 'Medio kilo de helado', precio: 1700 },
{ id: 3, nombre: 'Un kilo de helado', precio: 2300 }]

const sabores = [{ id: 1, nombre: "Vainilla" },
{ id: 2, nombre: "Chocolate" },
{ id: 3, nombre: 'Fresa' },
{ id: 4, nombre: 'Menta' },
{ id: 5, nombre: 'Limón' },
{ id: 6, nombre: 'Café' },
{ id: 7, nombre: 'Coco' },
{ id: 8, nombre: 'Banana' },
{ id: 9, nombre: 'Frambuesa' },
{ id: 10, nombre: 'Mango' },
{ id: 11, nombre: 'Tiramisú' },
{ id: 12, nombre: 'DulceDeLeche' },
{ id: 13, nombre: 'Piña' },
{ id: 14, nombre: 'Maracuyá' },
]

const pedido = producto.map((el) => {
    return el.id + '- ' + el.nombre + '; ' + el.precio + '\n'
})

const eleccion = sabores.map((el) => {
    return el.id + '- ' + el.nombre + '\n'
})

let total = [];
let pedidoFinal = []
let pedidoFinalPrecio = []

alert("Bienvenido a heladería Himalaya! \n A continuación puede hacer su pedido");
function eleccionTamaño() {
    let tamaño = parseInt(prompt("Elija el tamaño de su pedido por el número: \n" + pedido));
    while (tamaño < 1 || tamaño > 3 || isNaN(tamaño)) {
        alert("Por favor, indique su pedido por el número indicado!");
        tamaño = parseInt(prompt("Elija el tamaño de su pedido por el número: \n" + pedido));
    }
    if (tamaño >= 1 || tamaño <= 3) {
        let seleccionTamaño = producto.find((el) => el.id === tamaño);
        pedidoFinal.push(seleccionTamaño.nombre);
        pedidoFinalPrecio.push(seleccionTamaño.precio)
        alert("Usted eligio " + pedidoFinal + ' y sale: $' + pedidoFinalPrecio);
        if (tamaño == 1 ) {
            alert("En el cuarto entran hasta 3 sabores, si desea solo dos, o uno, seleccione el mismo sabor la cantidad de veces necesaria.")
            eleccionSabores()
            eleccionSabores()
            eleccionSabores()
        }
        else if (tamaño == 2) {
            alert("En el medio entran hasta 4 sabores, si desea solo tres o dos o uno, seleccione el mismo sabor la cantidad de veces necesaria.")
            eleccionSabores()
            eleccionSabores()
            eleccionSabores()
            eleccionSabores()
        }
        else if (tamaño == 3) {
            alert("En el kilo entran hasta 5 sabores, si desea solo cuatro o tres o dos o uno, seleccione el mismo sabor la cantidad de veces necesarias.")
            eleccionSabores()
            eleccionSabores()
            eleccionSabores()
            eleccionSabores()
            eleccionSabores()
        }
    }
}
eleccionTamaño()

function cantidadSabores() {
    if (tamaño == 1 ) {
        alert("En el cuarto kilo de helado entran hasta 3 sabores, si desea solo dos, o uno, seleccione el mismo sabor la cantidad de veces necesaria.")
        eleccionSabores()
        eleccionSabores()
        eleccionSabores()
    }
    else if (tamaño == 2) {
        alert("En el medio kilo de helado entran hasta 4 sabores, si desea solo tres o dos o uno, seleccione el mismo sabor la cantidad de veces necesaria.")
        eleccionSabores()
        eleccionSabores()
        eleccionSabores()
        eleccionSabores()
    }
    else if (tamaño == 3) {
        alert("En el kilo de helado entran hasta 5 sabores, si desea solo cuatro o tres o dos o uno, seleccione el mismo sabor la cantidad de veces necesarias.")
        eleccionSabores()
        eleccionSabores()
        eleccionSabores()
        eleccionSabores()
        eleccionSabores()
    }
}

function eleccionSabores() {
    let eligio = parseInt(prompt("Elija un sabor por su número: \n" + eleccion));
    while (isNaN(eligio) || eligio < 1 || eligio > 14) {
        alert("Por favor, indique bien su sabor a elegir por su número.");
        eligio = parseInt(prompt("Elija un sabor por su número: \n" + eleccion));
    }
    if (eligio >= 1 || eligio <= 14) {
        let seleccion = sabores.find((el) => el.id === eligio);
        total.push(" " + seleccion.nombre);
    }
}
alert("Sus sabores son: \n" + total);

let confirmacion = confirm(`Usted eligió ${pedidoFinal} y sale $${pedidoFinalPrecio}, ¿Desea pagar?`)
if (confirmacion == true) {
    alert("Gracias por su compra")
} else {
    alert("De acuerdo, se ha cancelado su pedido.")
}



