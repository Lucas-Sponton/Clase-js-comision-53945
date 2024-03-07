let nombre = prompt("Ingrese su nombre aquí!")


let cuarto = 1200;
let medio = 1700;
let kilo = 2300;

alert("Bienvenido/a " + nombre);

let pedir = prompt("¿Esta listo para hacer su pedido? Ingrese si o no");

if ((pedir === "no") || (pedir === "No") || (pedir === "NO") || (pedir === "nO")) {
    alert("Estaremos esperando por su pedido.")
}
else {
    let orden = prompt("Ingrese su pedido: cuarto / medio / kilo")


    switch (orden) {
        case "cuarto":
            alert("Gracias por su pedido, su total es de: $ " + cuarto);
            break;

        case "medio":
            alert("Gracias por su pedido, su total es de: $ " + medio);
            break;

        case "kilo":
            alert("Gracias por su pedido, su total es de: $ " + kilo);
            break;
    }
}

function agradecer () {
    alert ( nombre + ", ya hemos procesado tu pedido, ya lo estamos preparando y sera enviado.")
}
agradecer();



