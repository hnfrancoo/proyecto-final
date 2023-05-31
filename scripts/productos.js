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

//CARGA DE PRODUCTOS
const items = [
    //Remeras
    {
        id:"remeras-01",
        titulo:"Musculosa",
        imagen: "../img/remeras/remera-1.jpg",
        categoria: {
            nombre: "Remeras",
            id: "remeras"
        },
        precio: 5500,
    },
    {
        id:"remeras-02",
        titulo:"Remera roja",
        imagen: "../img/remeras/remera-2.jpg",
        categoria: {
            nombre: "Remeras",
            id: "remeras"
        },
        precio: 5500
    },
    {
        id:"remeras-03",
        titulo:"Chomba Taverniti",
        imagen: "../img/remeras/remera-3.jpg",
        categoria: {
            nombre: "Remeras",
            id: "remeras"
        },
        precio: 5500
    },
    {
        id:"remeras-04",
        titulo:"Remera Taverniti C",
        imagen: "../img/remeras/remera-4.jpg",
        categoria: {
            nombre: "Remeras",
            id: "remeras"
        },
        precio: 5500
    },
    {
        id:"remeras-05",
        titulo:"Remera 05",
        imagen: "../img/remeras/remera-5.jpeg",
        categoria: {
            nombre: "Remeras",
            id: "remeras"
        },
        precio: 5500
    },
    {
        id:"remeras-06",
        titulo:"Chomba b&w",
        imagen: "../img/remeras/remera-6.jpeg",
        categoria: {
            nombre: "Remeras",
            id: "remeras"
        },
        precio: 5500
    },
    //Pantalones
    {
        id:"pantalon-01",
        titulo:"Joggin",
        imagen: "../img/pantalones/pantalon-1.jpeg",
        categoria: {
            nombre: "Pantalones",
            id: "pantalones"
        },
        precio: 8000
    },
    {
        id:"pantalon-02",
        titulo:"Jean recto",
        imagen: "../img/pantalones/pantalon-2.jpeg",
        categoria: {
            nombre: "Pantalones",
            id: "pantalones"
        },
        precio: 8000
    },
    {
        id:"pantalon-03",
        titulo:"Pantalon 03",
        imagen: "../img/pantalones/pantalon-3.jpeg",
        categoria: {
            nombre: "Pantalones",
            id: "pantalones"
        },
        precio: 8000
    },
    {
        id:"pantalon-04",
        titulo:"Jean elastizado",
        imagen: "../img/pantalones/pantalon-4.jpeg",
        categoria: {
            nombre: "Pantalones",
            id: "pantalones"
        },
        precio: 8000
    },
    {
        id:"pantalon-05",
        titulo:"Pantalon 05",
        imagen: "../img/pantalones/pantalon-5.jpeg",
        categoria: {
            nombre: "Pantalones",
            id: "pantalones"
        },
        precio: 8000
    },
    {
        id:"pantalon-06",
        titulo:"Jean gabardina",
        imagen: "../img/pantalones/pantalon-6.jpeg",
        categoria: {
            nombre: "Pantalones",
            id: "pantalones"
        },
        precio: 8000
    },
    //Camperas
    {
        id:"campera-01",
        titulo:"Campera negra",
        imagen: "../img/camperas/campera-1.jpeg",
        categoria: {
            nombre: "Camperas",
            id: "camperas"
        },
        precio: 12000
    },
    {
        id:"campera-02",
        titulo:"Campera algodon",
        imagen: "../img/camperas/campera-2.jpeg",
        categoria: {
            nombre: "Camperas",
            id: "camperas"
        },
        precio: 12000
    },
    {
        id:"campera-03",
        titulo:"Campera cuero",
        imagen: "../img/camperas/campera-3.jpeg",
        categoria: {
            nombre: "Camperas",
            id: "camperas"
        },
        precio: 12000
    },
    {
        id:"campera-04",
        titulo:"Campera 04",
        imagen: "../img/camperas/campera-4.jpeg",
        categoria: {
            nombre: "Camperas",
            id: "camperas"
        },
        precio: 12000
    },
    {
        id:"campera-05",
        titulo:"Campera jean",
        imagen: "../img/camperas/campera-5.jpeg",
        categoria: {
            nombre: "Camperas",
            id: "camperas"
        },
        precio: 12000
    },
    {
        id:"campera-06",
        titulo:"Campera 06",
        imagen: "../img/camperas/campera-6.jpeg",
        categoria: {
            nombre: "Camperas",
            id: "camperas"
        },
        precio: 12000
    },
    //Buzos
    {
        id:"buzo-01",
        titulo:"Buzo 01",
        imagen: "../img/buzos/buzo-1.jpeg",
        categoria: {
            nombre: "Buzos",
            id: "buzos"
        },
        precio: 10000
    },
    {
        id:"buzo-02",
        titulo:"Buzo 02",
        imagen: "../img/buzos/buzo-2.jpeg",
        categoria: {
            nombre: "Buzos",
            id: "buzos"
        },
        precio: 10000
    },
    {
        id:"buzo-03",
        titulo:"Buzo 03",
        imagen: "../img/buzos/buzo-3.jpeg",
        categoria: {
            nombre: "Buzos",
            id: "buzos"
        },
        precio: 10000
    },
    {
        id:"buzo-04",
        titulo:"Buzo taverniti",
        imagen: "../img/buzos/buzo-4.jpeg",
        categoria: {
            nombre: "Buzos",
            id: "buzos"
        },
        precio: 10000
    },
    {
        id:"buzo-05",
        titulo:"Buzo taverniti",
        imagen: "../img/buzos/buzo-5.jpeg",
        categoria: {
            nombre: "Buzos",
            id: "buzos"
        },
        precio: 10000
    },
    {
        id:"buzo-06",
        titulo:"Buzo 06",
        imagen: "../img/buzos/buzo-6.jpeg",
        categoria: {
            nombre: "Buzos",
            id: "buzos"
        },
        precio: 10000
    },
    //Calzados
    {
        id:"calzado-01",
        titulo:"Zapatillas Jaguar",
        imagen: "../img/calzado/calzado-1.jpeg",
        categoria: {
            nombre: "Calzado",
            id: "calzado"
        },
        precio: 14000
    },
    {
        id:"calzado-02",
        titulo:"Calzado 02",
        imagen: "../img/calzado/calzado-2.jpeg",
        categoria: {
            nombre: "Calzado",
            id: "calzado"
        },
        precio: 14000
    },
    {
        id:"calzado-03",
        titulo:"Zapatillas Narrow",
        imagen: "../img/calzado/calzado-3.jpeg",
        categoria: {
            nombre: "Calzado",
            id: "calzado"
        },
        precio: 14000
    },
    {
        id:"calzado-04",
        titulo:"Zapatillas topper",
        imagen: "../img/calzado/calzado-4.jpeg",
        categoria: {
            nombre: "Calzado",
            id: "calzado"
        },
        precio: 14000
    },
    {
        id:"calzado-05",
        titulo:"Calzado 05",
        imagen: "../img/calzado/calzado-5.jpeg",
        categoria: {
            nombre: "Calzado",
            id: "calzado"
        },
        precio: 14000
    },
    {
        id:"calzado-06",
        titulo:"Zapatillas Bando",
        imagen: "../img/calzado/calzado-6.jpeg",
        categoria: {
            nombre: "Calzado",
            id: "calzado"
        },
        precio: 14000
    },
    //Accesorios
    {
        id:"accesorio-01",
        titulo:"Accesorio 01",
        imagen: "../img/accesorios/accesorio-1.jpeg",
        categoria: {
            nombre: "Accesorios",
            id: "accesorios"
        },
        precio: 10000
    },
    {
        id:"accesorio-02",
        titulo:"Billeteras taveniti",
        imagen: "../img/accesorios/accesorio-2.jpeg",
        categoria: {
            nombre: "Accesorios",
            id: "accesorios"
        },
        precio: 1000
    },
    {
        id:"accesorio-03",
        titulo:"Gorras Mistral",
        imagen: "../img/accesorios/accesorio-3.jpeg",
        categoria: {
            nombre: "Accesorios",
            id: "accesorios"
        },
        precio: 1000
    },
    {
        id:"accesorio-04",
        titulo:"Mochila Agustino",
        imagen: "../img/accesorios/accesorio-4.jpeg",
        categoria: {
            nombre: "Accesorios",
            id: "accesorios"
        },
        precio: 8000
    },
    {
        id:"accesorio-05",
        titulo:"Reloj Taverniti",
        imagen: "../img/accesorios/accesorio-5.jpeg",
        categoria: {
            nombre: "Accesorios",
            id: "accesorios"
        },
        precio: 14000
    },
    {
        id:"accesorio-06",
        titulo:"Gorro Lana",
        imagen: "../img/accesorios/accesorio-6.jpeg",
        categoria: {
            nombre: "Accesorios",
            id: "accesorios"
        },
        precio: 1000
    },
    
];

//Variables y funciones
const containerItems = document.querySelector("#container-items");
const botonesCategorias = document.querySelectorAll(".boton-categoria");
const tituloPrincipal = document.querySelector("#titulo-principal");
let botonesAgregar = document.querySelectorAll (".item-agregar");
const numero = document.querySelector("#numero");



function cargarProductos(itemsElegidos){

    containerItems.innerHTML ="";

    itemsElegidos.forEach( item => {
        const div = document.createElement("div");
        div.classList.add("item");
        div.innerHTML = `
        <figure>
         <img src="${item.imagen}" alt="${item.titulo}" class="item-imagen">
         </figure>
         <div class="info">
            <h2 class="item-titulo">${item.titulo}</h2>
            <p class="price">$${item.precio}</p>
            <button class="item-agregar" id="${item.id}">Añadir al carrito</button>
         </div>
          `;

          containerItems.append(div);
    })

    actualizarBotonesAgregar();
}


cargarProductos(items);

botonesCategorias.forEach(boton => {
    boton.addEventListener("click", (e) => {

        botonesCategorias.forEach(boton => boton.classList.remove("active"));
        e.currentTarget.classList.add("active");
        
        if (e.currentTarget.id != "todos"){
            const itemCategoria = items.find(item => item.categoria.id === e.currentTarget.id);
            tituloPrincipal.innerText = itemCategoria.categoria.nombre;


        const itemsBoton = items.filter(item => item.categoria.id === e.currentTarget.id);
        cargarProductos(itemsBoton);
        }
        else{
            tituloPrincipal.innerText = "Todos los productos";
            cargarProductos(items);
        }
        aside.classList.remove("aside-visible");
    })


});



function actualizarBotonesAgregar (){
    botonesAgregar = document.querySelectorAll (".item-agregar");

    botonesAgregar.forEach(boton => {
        boton.addEventListener ("click", agregarAlCarrito);
    });
}

let itemsEnCarrito;

let itemsEnCarritoLS = localStorage.getItem("items-en-carrito");


if(itemsEnCarritoLS){
    itemsEnCarrito =  JSON.parse(itemsEnCarritoLS);
    actualizarNumero();
} else{
    itemsEnCarrito = [];

}


function agregarAlCarrito (e){

    const idBoton = e.currentTarget.id;
    const itemAgregado = items.find (item => item.id === idBoton);

    if (itemsEnCarrito.some(item => item.id === idBoton)){
        const index = itemsEnCarrito.findIndex(item => item.id === idBoton);
        itemsEnCarrito[index].cantidad++;
    } else {
        itemAgregado.cantidad = 1;
        itemsEnCarrito.push(itemAgregado);
    }
    actualizarNumero();

    localStorage.setItem("items-en-carrito", JSON.stringify(itemsEnCarrito));
}

function actualizarNumero() {
    let nuevoNumero = itemsEnCarrito.reduce((acc, item) => acc + item.cantidad, 0);
    numero.innerText = nuevoNumero;
}
