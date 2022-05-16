//aca estamos accediendo por nombre de etiqueta
let h2 = document.getElementsByTagName("h2")[0];
console.log(h2);

//aca accedemos por nombre de la clase
const titulo = document.getElementsByClassName("titulo")[0];
console.log(titulo);

//aca accedemos por el id, que es unico y el que mas se usa en js
const camino = document.getElementById("camino");
console.log(camino);

//let ingreso = prompt("Ingresa tu nombre");

//con innertext vamos a modificar elementos del dom
//entonces desde aca ya estamos creando contenido dinamico
//camino.innerText = "Hola " + ingreso;

const divContenedor = document.getElementById("contenedor");
divContenedor.className = "green";

divContenedor.innerHTML = "<p> Esto es texto dinamico<p>";

//CREACION DE ELEMENTOS document.createElement()
//paso 1)
let parrafo = document.createElement("p");

parrafo.innerHTML = "Hola Belen <strong> como estas<strong>";

//paso 2)
//Un metodo para agregar es usando append
//document.body.append(parrafo);
//otro metodo es usando appendChild
divContenedor.appendChild(parrafo);

//ELIMINACION DE ELEMENTOS
parrafo.remove();
//-----------------------------------------------
//OBTENER DATOS DE INPUT

/*CODIGO JS*/

const inputNombre = document.getElementById("nombre");

inputNombre.value = "Juan";

//TAMBIEN SE PUEDE ACCEDER A LOS ATRIBUTOS
//console.log(inputNombre.getAttribute("class"));

//Tambien se puede setear los atributos del input
inputNombre.setAttribute("type", "");

// PLANTILLAS LITERALES `${ }`

let producto = {
  nombre: "Arroz",
  precio: 234,
};
let concatenado =
  "Nombre producto: " + producto.nombre + " precio: " + producto.precio;

let plantilla = `Nombre producto: ${producto.nombre} precio: ${producto.precio}`;
//El valor es idéntico pero la construcción de la plantilla es màs sencilla
console.log(concatenado);
console.log(plantilla);

//PLANTILLAS LITERALES E innerHTML (usar esto para la presentacion)

divContenedor.innerHTML = `<h3>Nombre producto</h3> ${producto.nombre}
<p>Precio: $ ${producto.precio}</p> `;

//OTRO EJEMPLO USANDO ARRAYS
const productos = [
  { id: 1, nombre: "Arroz", precio: 125 },
  { id: 2, nombre: "Fideo", precio: 70 },
  { id: 3, nombre: "Pan", precio: 50 },
  { id: 4, nombre: "Flan", precio: 100 },
];

for (const producto of productos) {
  let contenedor = document.createElement("div");
  //Definimos el innerHTML del elemento con una plantilla de texto
  contenedor.innerHTML = `<h3> ID: ${producto.id}</h3>
                            <p>  Producto: ${producto.nombre}</p>
                            <b> $ ${producto.precio}</b>`;
  document.body.appendChild(contenedor);
}

//AGREGAR UNA IMAGEN
const img = document.createElement("img");

img.setAttribute(
  "src",
  "https://s3.eu-west-3.amazonaws.com/claritycomic.com/wp-content/uploads/2021/12/03054631/nombres-para-perritos-french-poodle-930x620.jpg"
);
document.body.appendChild(img);

//QUERY SELECTOR
//es como usar csss
