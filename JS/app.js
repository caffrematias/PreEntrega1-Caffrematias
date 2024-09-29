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
const productos = [
    {id:1, nombre: "cupcakesChocolate", precio: 4700, categoria: "cupcakes"},
    {id:2, nombre: "cupcakesNaranja", precio: 3200, categoria: "cupcakes"},
    {id:3, nombre: "cupcakesLimon", precio: 3200, categoria: "cupcakes"},
    {id:4, nombre: "budinesChocolate", precio: 4700, categoria: "budines"},
    {id:5, nombre: "budinesNaranja", precio: 3200, categoria: "budines"},
    {id:6, nombre: "budinesLimon", precio: 3200, categoria: "budines"},
    {id:7, nombre: "bizcochueloVainilla", precio: 4700, categoria: "bizcochuelo"},
    {id:8, nombre: "bizcochueloIntegral", precio: 3200, categoria: "bizcochuelo"},
];
function renderProduct(productos){
    let container = document.getElementById('container');
    let content = '';
    let etiquetaselection = document.createElement('selection');
    productos.map(elemento => {
    let etiquetadiv = document.createElement('div');
        content += `
        <h1>${elemento.nombre}</h1>
        <p>${elemento.precio}</p>
        <p>${elemento.categoria}</p>
        <button>Agregar al carrito</button>
    `;
    document.body.appendChild(etiquetadiv);
    })
    container.innerHTML = content;
    document.body.appendChild(etiquetaselection);
}
renderProduct(productos);

//me quede en 17:17

