//QuerySelector

const heading = document.querySelector(".header__texto h2"); //retorna 0 o 1 elementos

// heading.textContent = "Nuevo heading";
// heading.classList.add("Nueva-clase");

console.log(heading); //?Retorna el primer elemento

//QuerySelectorAll

const enlaces = document.querySelectorAll(".navegacion a");
console.log(enlaces);

// getElementById

const heading2 = document.getElementById("prueba");
console.log(heading2);
