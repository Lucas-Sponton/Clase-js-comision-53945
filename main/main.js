let totalCarrito = 0

class Helado {
    constructor(tamaño, precio) {
        this.tamaño = tamaño
        this.precio = precio
    }
}
let vainilla = "Vainilla"
let chocolate = "Chocolate"
let fresa = "Fresa"
let menta = "Menta"
let limón = "Limón"
let café = "Café"
let coco = "Coco"
let banana = "Banana"
let frambuesa = "Frambuesa"
let mango = "Mango"
let tiramisú = "Tiramisú"
let dulceDeLeche = "DulceDeLeche"
let piña = "Piña"
let maracuyá = "Maracuyá"

let cuarto = new Helado("Cuarto de kilo", 1200)
let medio = new Helado("Medio kilo de helado", 1700)
let kilo = new Helado("Kilo de helado", 2300)

const arrayPedido = [cuarto, medio, kilo]
const arraySabor = [vainilla, chocolate, fresa, menta, limón, café, coco, banana, frambuesa, mango, tiramisú, dulceDeLeche, piña, maracuyá]

function elegirSabor() {
    let sabores = parseInt(prompt(`Eliga sus sabores por su número: \n1- ${arraySabor[0]}\n2- ${arraySabor[1]}\n3- ${arraySabor[2]}\n4- ${arraySabor[3]}\n5- ${arraySabor[4]}\n6- ${arraySabor[5]}\n7- ${arraySabor[6]}\n8- ${arraySabor[7]}\n9- ${arraySabor[8]}\n10- ${arraySabor[9]}\n11- ${arraySabor[10]}\n12- ${arraySabor[11]}\n13- ${arraySabor[12]}\n14- ${arraySabor[13]}`))

    while (sabores < 1 || sabores > 14) {
        sabores = parseInt(prompt(`Eliga sus sabores por su número: \n1- ${arraySabor[0]}\n2- ${arraySabor[1]}\n3- ${arraySabor[2]}\n4- ${arraySabor[3]}\n5- ${arraySabor[4]}\n6- ${arraySabor[5]}\n7- ${arraySabor[6]}\n8- ${arraySabor[7]}\n9- ${arraySabor[8]}\n10- ${arraySabor[9]}\n11- ${arraySabor[10]}\n12- ${arraySabor[11]}\n13- ${arraySabor[12]}\n14- ${arraySabor[13]}`))
    }
    let gustos;
    if (sabores == 1) {
        gustos = arraySabor[0]
    }
    else if (sabores == 2) {
        gustos = arraySabor[1]
    }
    else if (sabores == 3) {
        gustos = arraySabor[2]
    }
    else if (sabores == 4) {
        gustos = arraySabor[3]
    }
    else if (sabores == 5) {
        gustos = arraySabor[4]
    }
    else if (sabores == 6) {
        gustos = arraySabor[5]
    }
    else if (sabores == 7) {
        gustos = arraySabor[6]
    }
    else if (sabores == 8) {
        gustos = arraySabor[7]
    }
    else if (sabores == 9) {
        gustos = arraySabor[8]
    }
    else if (sabores == 10) {
        gustos = arraySabor[9]
    }
    else if (sabores == 11) {
        gustos = arraySabor[10]
    }
    else if (sabores == 12) {
        gustos = arraySabor[11]
    }
    else if (sabores == 13) {
        gustos = arraySabor[12]
    }
    else if (sabores == 14) {
        gustos = arraySabor[13]
    }
    
    let sabores2 = parseInt(prompt(`Eliga otro sabor por su número: \n1- ${arraySabor[0]}\n2- ${arraySabor[1]}\n3- ${arraySabor[2]}\n4- ${arraySabor[3]}\n5- ${arraySabor[4]}\n6- ${arraySabor[5]}\n7- ${arraySabor[6]}\n8- ${arraySabor[7]}\n9- ${arraySabor[8]}\n10- ${arraySabor[9]}\n11- ${arraySabor[10]}\n12- ${arraySabor[11]}\n13- ${arraySabor[12]}\n14- ${arraySabor[13]}`))
    while (sabores2 < 1 || sabores2 > 14){
        sabores2 = parseInt(prompt(`Eliga otro sabor por su número: \n1- ${arraySabor[0]}\n2- ${arraySabor[1]}\n3- ${arraySabor[2]}\n4- ${arraySabor[3]}\n5- ${arraySabor[4]}\n6- ${arraySabor[5]}\n7- ${arraySabor[6]}\n8- ${arraySabor[7]}\n9- ${arraySabor[8]}\n10- ${arraySabor[9]}\n11- ${arraySabor[10]}\n12- ${arraySabor[11]}\n13- ${arraySabor[12]}\n14- ${arraySabor[13]}`))
    }
    let gustos2;
    if (sabores2 == 1){
        gustos2 = arraySabor[0]
    }
    else if (sabores2 == 2){
        gustos2 = arraySabor[1]
    }
    else if (sabores2 == 3) {
        gustos2 = arraySabor[2]
    }
    else if (sabores2 == 4) {
        gustos2 = arraySabor[3]
    }
    else if (sabores2 == 5) {
        gustos2 = arraySabor[4]
    }
    else if (sabores2 == 6) {
        gustos2 = arraySabor[5]
    }
    else if (sabores2 == 7) {
        gustos2 = arraySabor[6]
    }
    else if (sabores2 == 8) {
        gustos2 = arraySabor[7]
    }
    else if (sabores2 == 9) {
        gustos2 = arraySabor[8]
    }
    else if (sabores2 == 10) {
        gustos2 = arraySabor[9]
    }
    else if (sabores2 == 11) {
        gustos2 = arraySabor[10]
    }
    else if (sabores2 == 12) {
        gustos2 = arraySabor[11]
    }
    else if (sabores2 == 13) {
        gustos2 = arraySabor[12]
    }
    else if (sabores2 == 14) {
        gustos2 = arraySabor[13]
    }

    let sabores3 = parseInt(prompt(`Eliga otro sabor por su número: \n1- ${arraySabor[0]}\n2- ${arraySabor[1]}\n3- ${arraySabor[2]}\n4- ${arraySabor[3]}\n5- ${arraySabor[4]}\n6- ${arraySabor[5]}\n7- ${arraySabor[6]}\n8- ${arraySabor[7]}\n9- ${arraySabor[8]}\n10- ${arraySabor[9]}\n11- ${arraySabor[10]}\n12- ${arraySabor[11]}\n13- ${arraySabor[12]}\n14- ${arraySabor[13]}`))
    while (sabores3 < 1 || sabores3 > 14){
        sabores3 = parseInt(prompt(`Eliga otro sabor por su número: \n1- ${arraySabor[0]}\n2- ${arraySabor[1]}\n3- ${arraySabor[2]}\n4- ${arraySabor[3]}\n5- ${arraySabor[4]}\n6- ${arraySabor[5]}\n7- ${arraySabor[6]}\n8- ${arraySabor[7]}\n9- ${arraySabor[8]}\n10- ${arraySabor[9]}\n11- ${arraySabor[10]}\n12- ${arraySabor[11]}\n13- ${arraySabor[12]}\n14- ${arraySabor[13]}`))
    }
    let gustos3;
    if (sabores3 == 1){
        gustos3 = arraySabor[0]
    }
    else if (sabores3 == 2){
        gustos3 = arraySabor[1]
    }
    else if (sabores3 == 3) {
        gustos3 = arraySabor[2]
    }
    else if (sabores3 == 4) {
        gustos3 = arraySabor[3]
    }
    else if (sabores3 == 5) {
        gustos3 = arraySabor[4]
    }
    else if (sabores3 == 6) {
        gustos3 = arraySabor[5]
    }
    else if (sabores3 == 7) {
        gustos3 = arraySabor[6]
    }
    else if (sabores3 == 8) {
        gustos3 = arraySabor[7]
    }
    else if (sabores3 == 9) {
        gustos3 = arraySabor[8]
    }
    else if (sabores3 == 10) {
        gustos3 = arraySabor[9]
    }
    else if (sabores3 == 11) {
        gustos3 = arraySabor[10]
    }
    else if (sabores3 == 12) {
        gustos3 = arraySabor[11]
    }
    else if (sabores3 == 13) {
        gustos3 = arraySabor[12]
    }
    else if (sabores3 == 14) {
        gustos3 = arraySabor[13]
    }

    let seleccion = confirm(`Usted eligió ${gustos}, ${gustos2} y ${gustos3}. ¿Es correcto?`)
    if (seleccion == true) {
        alert(`Perfecto, estos son sus sabores seleccionados: \n${gustos}, ${gustos2} y ${gustos3}.`)
    }
    else {
        alert("Por favor, elija sus sabores!")
        elegirSabor()
    }
}



function comprar() {
    let opciones = parseInt(prompt(`Pulse 1 si desea llevar un ${arrayPedido[0].tamaño} por $${arrayPedido[0].precio}\nPulse 2 si desea llevar ${arrayPedido[1].tamaño} por $${arrayPedido[1].precio}\nPulse 3 si desea llevar un ${arrayPedido[2].tamaño} por $${arrayPedido[2].precio}`))

    while (opciones < 1 || opciones > 3) {
        opciones = parseInt(prompt(`Pulse 1 si desea llevar un ${arrayPedido[0].tamaño} por $${arrayPedido[0].precio}\nPulse 2 si desea llevar ${arrayPedido[1].tamaño} por $${arrayPedido[1].precio}\nPulse 3 si desea llevar un ${arrayPedido[2].tamaño} por $${arrayPedido[2].precio}`))
    }
    let pedidoElegido;
    if (opciones == 1) {
        pedidoElegido = arrayPedido[0]
        totalCarrito += arrayPedido[0].precio
    }
    else if (opciones == 2) {
        pedidoElegido = arrayPedido[1]
        totalCarrito += arrayPedido[1].precio
    }
    else if (opciones == 3) {
        pedidoElegido = arrayPedido[2]
        totalCarrito += arrayPedido[2].precio
    }

    let confirmacion = confirm(`Usted eligió ${pedidoElegido.tamaño} y sale $${pedidoElegido.precio}, desea agregarlo al carrito?`)
    if (confirmacion == true) {
        elegirSabor()
        let confirmacion2 = confirm("El producto se agregó al carrito, ¿Desea comprar algo más?")
        if (confirmacion2 == true) {
            comprar()
        } else {
            let confirmacion3 = confirm(`El total es de ${totalCarrito}, ¿Desea pagar?`)
            if (confirmacion3 == true) {
                alert("Gracias por su compra")
            } else {
                alert("De acuerdo, se ha cancelado su pedido.")
            }
        }
    } else {
        let confirmacion4 = confirm("¿Quiere seguir comprando?")
        if (confirmacion4 == true) {
            comprar()
        } else {
            alert("De acuerdo, esperamos su pedido!")
        }
    }
}

comprar()




