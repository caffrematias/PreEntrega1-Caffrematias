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
debugger
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

comprar(carrito);
/*if(primerMenu==1){
    let compras= prompt("ingrese la opcion deseada \n 1-cupcakes \n 2-budines \n 3-bizcochuelo");
    if(compras==1){
        let cupcakes = prompt("ingrese la opcion deseada \n 1-chocolate $4700 \n 2-naranja $3200 \n 3-limon $3200");
        if(cupcakes==1){
            alert("Gracias por su compra de cupcakes de chocolate, el precio final es de $4700");
        }
        if(cupcakes==2){
            alert("Gracias por su compra de cupcakes de naranja, el precio final es de $3200");
        }
        if(cupcakes==3){
            alert("Gracias por su compra de cupcakes de limon , el precio final es de $3200");
        }
    }
    if(compras==2){
        let budines = prompt("ingrese la opcion deseada \n 1-chocolate $3200 \n 2-naranja $2500 \n 3-limon $2500");
            if(budines==1){
                alert("Gracias por su compra de budin de chocolate, el precio final es de $3200");
            }
            if(budines==2){
                alert("Gracias por su compra de budin de naranja, el precio final es de $2500");
            }
            if(budines==3){
                alert("Gracias por su compra de budin de limon , el precio final es de $2500");
            }
        }
    if(compras==3){
        let bizcochuelo = prompt("ingrese la opcion deseada \n 1-vainilla $2700 \n 2-integral $3000");
        if(bizcochuelo==1){
            alert("Gracias por su compra de bizcochuelo de vainilla, el precio final es de $2700");
        }
        if(bizcochuelo==2){
            alert("Gracias por su compra de bizcochuelo integral, el precio final es de $3000");
        }
        }
}*/