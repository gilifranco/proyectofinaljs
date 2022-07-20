const productos = [
    {
      id: 1,
       nombre: 'Shampoo Neutro Bidon',
       valor:  3000,
       cantidad: 25,
       imagen: './img/producto1.jpg'
    },
    {
      id: 2,
      nombre: 'Shampoo 1l Colores',
      valor: 750,
       cantidad: 25,
       imagen: './img/producto2.jpg'
    },
    {
      id: 3,
       nombre: 'Shampoo Argan',
       valor: 900,
       cantidad: 25,
       imagen: './img/producto3.jpg'
    },
    {
      id: 4,
       nombre: 'Shampoo 1l Colores',
       valor: 750,
       cantidad: 25,
       imagen: './img/producto4.jpg'
    },
    {
      id: 5,
       nombre: 'Shampoo 1l Colores',
       valor: 750,
       cantidad: 25,
       imagen: './img/producto5.jpg'
    },
    {
      id: 6,
       nombre: 'Shampoo 1l Colores',
       valor: 750,
       cantidad: 25,
       imagen: './img/producto6.jpg'
    },
    {
      id: 7,
       nombre: 'Shampoo 1l Colores',
       valor: 750,
       cantidad: 25,
       imagen: './img/producto7.jpg'
    },
    {
      id: 8,
       nombre: 'Shampoo 1l Colores',
       valor: 750,
       cantidad: 25,
       imagen: './img/producto 8.jpg'
    },
    {
      id: 9,
       nombre: 'Shampoo Acido en 5 Litros',
       valor: 3000,
       cantidad: 25,
       imagen: './img/producto9.jpg'
    }
  ];

const carrito = []

const contenedor = document.getElementById('contenedor');
const contenedorCarrito = document.getElementById('carrito');

const renderProducts = (products, target) => {
    let acumulador = '';

    products.map(product => {
        acumulador += `
        <div class="card m-2 productosorden " style="width: 15rem;">
            <img src="${product.imagen}" class="card-img-top" alt="${product.nombre}">
            <div class="card-body cardsproductos">
                <h5 class="card-title">${product.nombre}</h5>
                <p class="card-text">Cantidad: ${product.cantidad}</p>
                <p class="card-text">Precio: $${product.valor}</p>
                <button ref=${product.id} class="btn btn-primary button">Comprar</button>
            </div>
        </div>
        `
    })

    target.innerHTML = acumulador;

    const buttons = document.querySelectorAll('.button');
    buttons.forEach(button => button.addEventListener('click', handleClick));
}

const handleClick = (event) => {
    const id = parseInt(event.target.getAttribute('ref'));
    const product = productos.find(producto => producto.id === id);
    Swal.fire({
      position: 'center',
      icon: 'success',
      title: 'Agregado al carrito',
      showConfirmButton: false,
      timer: 1500
    });
    
    if (carrito.some(el => el.id === product.id)) {
        const posicion = carrito.findIndex(el => el.id === product.id)
        carrito[posicion].cantidad = carrito[posicion].cantidad + 1;
    } else {
        carrito.push({
            id: product.id,
            nombre: product.nombre,
            valor: product.valor,
            cantidad: 1,
            imagen: product.imagen
        })
    }
    renderProducts(carrito, contenedorCarrito);
}

const buscador = (array, texto) => {
    return array.filter(producto => producto.nombre.toLowerCase().includes(texto.toLowerCase()))
}
const form = document.getElementById('form');
const input = document.getElementById('searchInput');

const buscar = (e) => {
    e.preventDefault();

    renderProducts(buscador(productos, input.value), contenedor);
}

input.addEventListener('input', buscar);

renderProducts(productos, contenedor);


