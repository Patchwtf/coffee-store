//QuerySelector

const heading = document.querySelector(".header__texto h2"); //retorna 0 o 1 elementos

// heading.textContent = "Nuevo heading"; //?Se modifica el texto
// heading.classList.add("Nueva-clase");

// console.log(heading); //?Retorna el primer elemento

//QuerySelectorAll

const enlaces = document.querySelectorAll(".navegacion a");
// console.log(enlaces);

// getElementById

const heading2 = document.getElementById("prueba");
// console.log(heading2);

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
// console.log(nuevoEnlace);

//------------------------------------------------------------------------------------------------------------//
// Eventos
// console.log(1);

window.addEventListener("load", function () {
  //Load espera a que el js y los archivos que dependen del HTML esten listos
  // console.log(2);
});

window.onload = function () {
  // console.log(3);
};

document.addEventListener("DOMContentLoaded", function () {
  //Load espera a que el HTML este listo
  // console.log(4);
});

// console.log(5);

//------------------------------------------------------------------------------------------------------------//

//Seleccionar elementos y asociar eventos

// const btnEnviar = document.querySelector(".boton--primario");
// btnEnviar.addEventListener("click", function (event) {
//   console.log(event);
//   event.preventDefault(); //? Hace que al momento de enviar un submit, no se recargue la página
//   console.log("Enviando formulario (Click)");
// });

//------------------------------------------------------------------------------------------------------------//
//Eventos de los inputs y text area

const datos = {
  nombre: "",
  email: "",
  mensaje: "",
};

const nombreInput = document.querySelector("#nombre");
const emailInput = document.querySelector("#email");
const msgInput = document.querySelector("#mensaje");

nombreInput.addEventListener("input", readText);
emailInput.addEventListener("input", readText);
msgInput.addEventListener("input", readText);

function readText(event) {
  datos[event.target.id] = event.target.value;
  // console.log(datos);
}

//------------------------------------------------------------------------------------------------------------//

//Evento de submit

const formulario = document.querySelector(".formulario");

formulario.addEventListener("submit", function (event) {
  event.preventDefault(); //? Hace que al momento de enviar un submit, no se recargue la página

  // Validar formulario

  const { nombre, email, mensaje } = datos;

  if (nombre === "" || email === "" || mensaje === "") {
    mostrarError("Todos los campos son obligatorios");
    return; //corta la ejecución del codigo
  }

  // Envioar formulario
  console.log("Enviando formulario (Submit)");
  mostrarExito("Se enviaron los datos correctamente");
});

// Mostarar un error en pantalla

function mostrarError(mensaje) {
  document.querySelector(".formulario .exito") ? document.querySelector(".formulario .exito").remove() : null;
  document.querySelector(".formulario .error") ? document.querySelector(".formulario .error").remove() : null;

  const error = document.createElement("P");
  error.textContent = mensaje;
  error.classList.add("error");
  formulario.appendChild(error);

  setTimeout(() => {
    error.remove();
  }, 5000);
}

//eliminar mensaje
function mostrarExito(mensaje) {
  document.querySelector(".formulario .error") ? document.querySelector(".formulario .error").remove() : null;
  document.querySelector(".formulario .exito") ? document.querySelector(".formulario .exito").remove() : null;

  const exito = document.createElement("P");
  exito.textContent = mensaje;
  exito.classList.add("exito");
  formulario.appendChild(exito);

  setTimeout(() => {
    exito.remove();
  }, 5000);
}
