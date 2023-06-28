//QuerySelector

const heading = document.querySelector(".header__texto h2"); //retorna 0 o 1 elementos

// heading.textContent = "Nuevo heading"; //?Se modifica el texto
// heading.classList.add("Nueva-clase");

console.log(heading); //?Retorna el primer elemento

//QuerySelectorAll

const enlaces = document.querySelectorAll(".navegacion a");
console.log(enlaces);

// getElementById

const heading2 = document.getElementById("prueba");
console.log(heading2);

//------------------------------------------------------------------------------------------------------------//
//Generar nuevo enlace
const nuevoEnlace = document.createElement("A");
//Add href
nuevoEnlace.href = "https://www.google.com";
//Add texto
nuevoEnlace.textContent = "Nuevo enlace";
//Add clase
nuevoEnlace.classList.add("navegacion__enlace");
//Add to document
const navegacion = document.querySelector(".navegacion");
navegacion.appendChild(nuevoEnlace);

console.log(nuevoEnlace);
