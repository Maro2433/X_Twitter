/* ------- INPUT CAMBIO DE COLOR ----------*/

var elementoClicable = document.getElementById("elementoClicable");
var input = elementoClicable.querySelector("input");

document.addEventListener("click", function(event) {
    if (event.target !== input && event.target !== elementoClicable) {
        elementoClicable.classList.remove("clickeado");
    }
});

elementoClicable.addEventListener("click", function() {
    elementoClicable.classList.toggle("clickeado");
});



