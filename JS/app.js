/*function saludar(){
    let nombreIngresado;
    do{
        nombreIngresado= prompt("Ingresa tu nombre");
        if(!nombreIngresado){
            alert("El nombre no puede estar vacio")
        }
    }while(!nombreIngresado);
        alert("Hola " + nombreIngresado + " Bienvenido a Nicakes")
    }

saludar();
let carrito = 0;

function comprar(carrito){
    let primerMenu= prompt("ingrese la opcion deseada \n 1-cupcakes \n 2-budines \n 3-bizcochuelo \n 4-Dejar de comprar");
    switch(primerMenu){
        case "1":
            cupcakes(carrito);
            break;
        case "2":
            budines(carrito);
            break;
        case "3":
            bizcochuelo(carrito);    
            break;
        case "4":
            alert("tu compra fue de un total de " + carrito + " gracias por comprar en Nicakes");
            break;
        default:
            alert("Por favor, ingresa un número válido.");
            comprar(carrito);
            break;}
    }
function cupcakes(carrito){
    let secCupcakes = prompt("ingrese la opcion deseada \n 1-chocolate $4700 \n 2-naranja $3200 \n 3-limon $3200");
    switch(secCupcakes){
        case "1":
            carrito= carrito + 4700
            comprar(carrito);
            break;
        case "2":
            carrito= carrito + 3200
            comprar(carrito);
            break;
        case "3":
            carrito= carrito + 3200
            comprar(carrito);
            break;
        default:
            alert("Por favor, ingresa un número válido.");
            cupcakes(carrito);}
    }
function budines(carrito){
    let secbudines = prompt("ingrese la opcion deseada \n 1-chocolate $3200 \n 2-naranja $2500 \n 3-limon $2500");
    switch(secbudines){
        case "1":
            carrito= carrito + 3200
            comprar(carrito);
            break;
        case "2":
            carrito= carrito + 2500
            comprar(carrito);
            break;
        case "3":
            carrito= carrito + 2500
            comprar(carrito);
            break;
        default:
            alert("Por favor, ingresa un número válido.");
            budines(carrito);}
    }
function bizcochuelo(carrito){
    let secBizcochuelo = prompt("ingrese la opcion deseada \n 1-vainilla $2700 \n 2-integral $3000");
    switch(secBizcochuelo){
        case "1":
            carrito= carrito + 2700
            comprar(carrito);
            break;
        case "2":
            carrito= carrito + 3000
            comprar(carrito);
            break;
        default:
            alert("Por favor, ingresa un número válido.");
            bizcochuelo(carrito);}
    }
comprar(carrito);*/
function saludar(){
    let nombreIngresado;
    do{
        nombreIngresado= prompt("Ingresa tu nombre");
        if(!nombreIngresado){
            alert("El nombre no puede estar vacio")
        }
    }while(!nombreIngresado);
        alert("Hola " + nombreIngresado + " Bienvenido a Nicakes")
    }

saludar();
let carrito = 0;

function cupcakes(tipo, precio){
    this.tipo = tipo;
    this.precio = parseInt(precio);
}

const cupcakesChocolate = new cupcakes(chocolate, 4700);
const cupcakesNaranja = new cupcakes(naranja, 3200);
const cupcakesLimon = new cupcakes(limon, 3200);

function budines(tipo, precio){
    this.tipo = tipo;
    this.precio = parseInt(precio);
}

const budinesChocolate = new budines(chocolate, 4700);
const budinesNaranja = new budines(naranja, 3200);
const budinesLimon = new budines(limon, 3200);

function bizcochuelo(tipo, precio){
    this.tipo = tipo;
    this.precio = parseInt(precio);
}

const bizcochueloVainilla = new bizcochuelo(vainilla, 4700);
const bizcochueloIntegral = new bizcochuelo(integral, 3200);
