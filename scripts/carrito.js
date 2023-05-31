//Menu con cateogrias ->visible
const abrirMenu = document.querySelector("#abrir-menu");
const cerrarMenu = document.querySelector("#cerrar-menu");
const aside = document.querySelector("aside");

abrirMenu.addEventListener("click", () =>{
    aside.classList.add("aside-visible");
})

cerrarMenu.addEventListener ("click", () =>{
    aside.classList.remove("aside-visible");
})

//Traigo el array guardado en el local storage
let itemsEnCarrito = localStorage.getItem("items-en-carrito");
itemsEnCarrito = JSON.parse(itemsEnCarrito);


const contenedorCarritoVacio = document.querySelector("#carrito-vacio");
const contenedorCarritoItems = document.querySelector("#carrito-items");
const contenedorCarritoAcciones = document.querySelector("#carrito-acciones");
const contenedorCarritoComprado = document.querySelector("#carrito-comprado");
const contenedorCarritoAhorro = document.querySelector("#carrito-ahorro")
let botonesEliminar = document.querySelectorAll("#item-eliminar");
const botonVaciar = document.querySelector("#acciones-vaciar");
const contenedorTotal = document.querySelector("#total");
const contenedorAhorro = document.querySelector("#totalahorro");
const botonComprar = document.querySelector("#acciones-comprar");



function cargarItemsCarrito() {
  if (itemsEnCarrito && itemsEnCarrito.length > 0) {

    contenedorCarritoVacio.classList.add("disabled");
    contenedorCarritoItems.classList.remove("disabled");
    contenedorCarritoAcciones.classList.remove("disabled");
    contenedorCarritoComprado.classList.add("disabled");
    contenedorCarritoAhorro.classList.remove("disabled");

    contenedorCarritoItems.innerHTML = "";

    itemsEnCarrito.forEach(item => {
     
      const div = document.createElement("div");
      div.classList.add("carrito-item");
      div.innerHTML = `
      <img src="${item.imagen}" alt="${item.titulo}" class="carrito-item-imagen">
              
      <div class="carrito-item-titulo">
        <small>Titulo</small>
        <h3>${item.titulo}</h3>
      </div>
              
      <div class="carrito-item-cantidad">
        <small>Cantidad</small>
        <p>${item.cantidad}</p>
      </div>
              
      <div class="carrito-item-precio" id="precio">
        <small>Precio</small>
        <p>$${item.precio}</p>
      </div>

      <div class="carrito-item-subtotal" id="subtotal">
        <small>Subtotal</small>
        <p>$${item.precio * item.cantidad}</p>
      </div>
              
      <button class="item-eliminar" id="${item.id}"><i class="bi bi-trash3-fill" style="color:red;"></i></button>
      `;

      contenedorCarritoItems.append(div);
    });
  
  } else {
    contenedorCarritoVacio.classList.remove("disabled");
    contenedorCarritoItems.classList.add("disabled");
    contenedorCarritoAcciones.classList.add("disabled");
    contenedorCarritoComprado.classList.add("disabled");
    contenedorCarritoAhorro.classList.add("disabled");

  }
  actualizarBotonesEliminar();
  actualizarTotal();
  
}


cargarItemsCarrito();

function actualizarBotonesEliminar() {
  botonesEliminar = document.querySelectorAll(".item-eliminar");

  botonesEliminar.forEach(boton => {
    boton.addEventListener("click", eliminarItem);
  });
}

function eliminarItem(e) {
  const idBoton = e.currentTarget.id;
  const index = itemsEnCarrito.findIndex(item => item.id === idBoton);
  itemsEnCarrito.splice(index, 1);

  cargarItemsCarrito();

  localStorage.setItem("items-en-carrito", JSON.stringify(itemsEnCarrito));

}

botonVaciar.addEventListener("click", vaciarCarrito);

function vaciarCarrito() {

  itemsEnCarrito.length = 0;
  localStorage.setItem("items-en-carrito", JSON.stringify(itemsEnCarrito));
  cargarItemsCarrito();
}

//Mostrar el monto total
function actualizarTotal() {
  totalParcial = itemsEnCarrito.reduce((acc, item) => acc + ((item.precio * item.cantidad)), 0);

  document.getElementById("efectivo").addEventListener("click", pagoEfectivo);

  function pagoEfectivo(e) {
    e.target.removeEventListener(e.type, pagoEfectivo);
    //Si el total es 10000 y paga en efectivo, se realiza un descuento del 10%
    if (totalParcial > 10000) {

      totalParcial -= totalParcial * 0.15;
      total.innerText = `$${totalParcial}`;
      var ahorro = document.createElement("div");
      var textoAhorro = document.createTextNode(`Estas ahorrando $${totalParcial * 0.15}`);
      ahorro.appendChild(textoAhorro);
      ahorro.classList.add("infoahorro");

      document.getElementById("carrito-ahorro").appendChild(ahorro);
    }
    else {

      var aviso = document.createElement("div");
      var textoAviso = document.createTextNode(`El descuento solo es valido para montos superiores a 10000`);
      aviso.appendChild(textoAviso);
      aviso.classList.add("infoahorro");

      document.getElementById("carrito-ahorro").appendChild(aviso);

    }
    
  }
  total.innerText = `$${totalParcial}`;
}
//boton de comprar
botonComprar.addEventListener("click", comprarCarrito);

function comprarCarrito() {

  itemsEnCarrito.length = 0;
  localStorage.setItem("items-en-carrito", JSON.stringify(itemsEnCarrito));

  contenedorCarritoVacio.classList.add("disabled");
  contenedorCarritoItems.classList.add("disabled");
  contenedorCarritoAcciones.classList.add("disabled");
  contenedorCarritoComprado.classList.remove("disabled");
  contenedorCarritoAhorro.classList.add("disabled");
}

