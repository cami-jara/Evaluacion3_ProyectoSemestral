window.onload = function () {
    // Variables
    let propiedades = [
        {
            id: 1,
            servicio: 'Arriendo',
            tipo: 'Casa',
            nombre: 'Sector norte de Villa Alemana',
            precio: '$460.000',
            imagen: 'img/casaarriendo1.jpg'
        },
        {
            id: 2,
            servicio: 'Arriendo',
            tipo: 'Casa',
            nombre: 'Sector de Peñablaca',
            precio: '$450.000',
            imagen: 'img/casaarriendo2.jpg'
        },
        {
            id: 3,
            servicio: 'Arriendo',
            tipo: 'Casa',
            nombre: 'Sector residencial de Peñablanca',
            precio: '$300.000',
            imagen: 'img/casaarriendo3.jpg'
        },
        {
            id: 4,
            servicio: 'Arriendo',
            nombre: 'Sector los Pinos Quilpué',
            precio: '$480.000',
            imagen: 'img/casaarriendo4.jpg'
        },
        {
            id: 5,
            servicio: 'Venta',
            nombre: 'Troncal Sur de Peñablanca',
            precio: '$59.000.000',
            imagen: 'img/casaventa1.jpg'
        },
        {
            id: 6,
            servicio: 'Venta',
            nombre: 'Condominio Las Acacias en Peñablanca',
            precio: '$100.000.000',
            imagen: 'img/casaventa2.jpg'
        },
        {
            id: 7,
            servicio: 'Venta',
            nombre: 'Casa en Condominio con Troncal Sur Limache Y Quillota',
            precio: '$95.000.000',
            imagen: 'img/casaventa3.jpg'
        },
        {
            id: 8,
            servicio: 'Venta',
            nombre: 'Casa en Troncal Sur de Peñablanca',
            precio: '$100.000.000',
            imagen: 'img/casaventa4.jpg'
        },
        {
            id: 9,
            servicio: 'Arriendo',
            nombre: 'Acogedor Departamento Villa Alemana',
            precio: '$300.000',
            imagen: 'img/deptoarriendo1.jpg'
        },
        {
            id: 10,
            servicio: 'Arriendo',
            nombre: 'Acogedor Departamento Peñablanca',
            precio: '$300.000',
            imagen: 'img/deptoarriendo2.jpg'
        },
        {
            id: 11,
            servicio: 'Arriendo',
            nombre: 'Acogedor Departamento Villa Alemana',
            precio: '$355.000',
            imagen: 'img/deptoarriendo3.jpg'
        },
        {
            id: 12,
            servicio: 'Arriendo',
            nombre: 'Departamento Villa Alemana',
            precio: '$350.000 , $600.000 los gastos comunes ',
            imagen: 'img/deptoarriendo4.jpg'
        }

    ]
    let $items = document.querySelector('#items');
    let total = 0;
    let $carrito = document.querySelector('#carrito');
    let $total = document.querySelector('#total');
    let $botonVaciar = document.querySelector('#boton-vaciar');

   
    // Funciones
    function renderItems() {
        for (let info of propiedades) {
            // Estructura
            let miNodo = document.createElement('div');
            miNodo.classList.add('card', 'col-sm-4' ,'p-4' ,'g-3' , 'shadow');
            // Body de Card
            let miNodoCardBody = document.createElement('div');
            miNodoCardBody.classList.add('card-body');
            // Direccion o ubicacion
            let miNodoBody = document.createElement('h5');
            miNodoBody.classList.add('card-body','text-dark','text-center');
            miNodoBody.textContent = info['nombre'];

            //Tipo de Servicio
            let miNodoTitle = document.createElement('h6');
            miNodoTitle.classList.add('card-title','bg-primary' ,'text-white','text-center');
            miNodoTitle.textContent = info['servicio'];
            // Imagen
            let miNodoImagen = document.createElement('img');
            miNodoImagen.classList.add('img-fluid');
            miNodoImagen.setAttribute('src', info['imagen']);
            // Precio
            let miNodoPrecio = document.createElement('h5');
            miNodoPrecio.classList.add('card-text' ,'text-center');
            miNodoPrecio.textContent = info['precio'];
            // Boton
            let miNodoBoton = document.createElement('button');
            miNodoBoton.classList.add('btn', 'btn-success' ,'float-center');
            miNodoBoton.textContent = 'Detalle';
            // Insertamos
            miNodoCardBody.appendChild(miNodoImagen);
            miNodoCardBody.appendChild(miNodoTitle);
            miNodoCardBody.appendChild(miNodoBody);
            miNodoCardBody.appendChild(miNodoPrecio);
            miNodoCardBody.appendChild(miNodoBoton);
            miNodo.appendChild(miNodoCardBody);
            $items.appendChild(miNodo);
        }
    }

    function vaciarCarrito() {
    }
    // Eventos
    //$botonVaciar.addEventListener('click', vaciarCarrito);

    // Inicio
    renderItems();
}
