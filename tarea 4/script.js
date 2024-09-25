// script.js

document.getElementById('agregar-carro-boton').addEventListener('click', function() {
    let product = prompt(`Seleccione un producto para agregar al carrito:
    1.- Camisa $50
    2.- Pantalón $100
    3.- Zapato $200
    4.- Sombrero $500
    6.- Salir`);

    if (product === null) {
        return; 
    }

    let opcion = parseInt(product);

    switch(opcion) {
        case 1:
            agregacarro("Camisa", 50);
            break;
        case 2:
            agregacarro("Pantalón", 100);
            break;
        case 3:
            agregacarro("Zapato", 200);
            break;
        case 4:
            agregacarro("Sombrero", 500);
            break;
        case 6:
            // Salir
            break;
        default:
            alert("Opción inválida");
    }
});

let carroproducto = [];
let totalCarro = 0;

function agregacarro(productoNam, precio) {
    carroproducto.push({ name: productoNam, precio: precio });
    totalCarro += precio;

   
    updateCartDisplay();
}

function updateCartDisplay() {
    let ListaCarro = document.getElementById('lista-carro');
    let TotalProduc = document.getElementById('total-carro');
    
    // Limpiar la lista 
    ListaCarro.innerHTML = '';

    // Agregar cada producto al HTML
    carroproducto.forEach(item => {
        let li = document.createElement('li');
        li.textContent = `${item.name}: $${item.precio}`;
        ListaCarro.appendChild(li);
    });

    // Mostrar el total actualizado
    TotalProduc.textContent = totalCarro;
}
