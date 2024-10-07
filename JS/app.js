const productos = [
    {id:1, nombre: "cupcakes de chocolate", precio: 4700, categoria: "cupcakes"},
    {id:2, nombre: "cupcakes de naranja", precio: 3200, categoria: "cupcakes"},
    {id:3, nombre: "cupcakes de limon", precio: 3200, categoria: "cupcakes"},
    {id:4, nombre: "budines de chocolate", precio: 4700, categoria: "budines"},
    {id:5, nombre: "budines de naranja", precio: 3200, categoria: "budines"},
    {id:6, nombre: "budines de limon", precio: 3200, categoria: "budines"},
    {id:7, nombre: "bizcochuelo de vainilla", precio: 4700, categoria: "bizcochuelo"},
    {id:8, nombre: "bizcochuelo integral", precio: 3200, categoria: "bizcochuelo"},
];

let carrito = [];
function agregarAlCarrito(producto) {
    let carrito = JSON.parse(localStorage.getItem('carrito')) || [];
    let productoEnCarrito = carrito.find(item => item.id === producto.id);
    if (productoEnCarrito) {
        productoEnCarrito.cantidad++;}
        else{
        carrito.push({...producto, cantidad: 1});}
    localStorage.setItem('carrito', JSON.stringify(carrito));
    actualizarModalCarrito();
}
function renderProduct(productos){
    let container = document.getElementById('container');
    let content = '';
    productos.forEach(elemento => {
        content += `
            <div class="producto">
                <h1>${elemento.nombre}</h1>
                <p>$${elemento.precio}</p>
                <p>${elemento.categoria}</p>
                <button class="btn-agregar" data-id="${elemento.id}">Agregar al carrito</button>
            </div>
        `;
    });
    container.innerHTML = content;
    document.querySelectorAll('.btn-agregar').forEach(btn => {
        btn.addEventListener('click', (e) => {
            let productoId = parseInt(e.target.getAttribute('data-id'));
            let productoSeleccionado = productos.find(p => p.id === productoId);
            agregarAlCarrito(productoSeleccionado);
        });
    });
}
let modalCarrito = `
    <div class="modal fade" id="carritoModal" tabindex="-1" aria-labelledby="carritoModalLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="carritoModalLabel">Carrito de Compras</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <!-- Aquí se mostrarán los productos del carrito -->
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
                    <button type="button" class="btn btn-primary">Finalizar Compra</button>
                </div>
            </div>
        </div>
    </div>
`;
let botonCarrito = `
    <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#carritoModal">
        Ver Carrito
    </button>
`;
document.body.insertAdjacentHTML('beforeend', botonCarrito + modalCarrito);
renderProduct(productos);
function finalizarCompra() {
    let carrito = JSON.parse(localStorage.getItem('carrito')) || [];
        let total = carrito.reduce((sum, producto) => sum + producto.precio * producto.cantidad, 0);
        alert(`¡Gracias por tu compra! El total es: $${total}`);
        localStorage.removeItem('carrito');
        actualizarModalCarrito();
        let modalElement = document.getElementById('carritoModal');
        let modal = bootstrap.Modal.getInstance(modalElement);
        modal.hide();
    }
document.querySelector('.modal-footer .btn-primary').addEventListener('click', finalizarCompra);
function limpiarCarrito() {
    carrito = []; // Vacía el array del carrito
    localStorage.removeItem('carrito'); // Elimina el carrito del almacenamiento local
    actualizarCarritoUI(); // Actualiza la interfaz del carrito
}
let botonLimpiar = `
    <button type="button" class="btn btn-danger" id="limpiarCarrito">
        Limpiar Carrito
    </button>
`;
document.querySelector('.modal-footer').insertAdjacentHTML('afterbegin', botonLimpiar);
document.getElementById('limpiarCarrito').addEventListener('click', limpiarCarrito);
function actualizarCarritoUI() {
    let carritoContenido = document.querySelector('.modal-body');
    if (carrito.length === 0) {
        carritoContenido.innerHTML = '<p>El carrito está vacío</p>';
    } 
}
actualizarCarritoUI();
function actualizarModalCarrito() {
    let carrito = JSON.parse(localStorage.getItem('carrito')) || [];
    let modalBody = document.querySelector('.modal-body');
    modalBody.innerHTML = '';
    
    let total = 0;
    
    carrito.forEach(producto => {
        let subtotal = producto.precio * producto.cantidad;
        total += subtotal;
        modalBody.innerHTML += `
            <div class="producto-carrito">
                <p>${producto.nombre} - Cantidad: ${producto.cantidad} - Precio: $${subtotal}</p>
            </div>
        `;
    });
    
    modalBody.innerHTML += `
        <div class="total-carrito">
            <strong>Total: $${total}</strong>
        </div>
    `;
}
document.getElementById('carritoModal').addEventListener('show.bs.modal', actualizarModalCarrito);
