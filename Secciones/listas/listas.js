document.getElementById("more-options").addEventListener("click", function (event) {
    event.preventDefault();
    var window = document.getElementById("floating-window");
    if (window.style.display === "none" || window.style.display === "") {
        window.style.display = "block";
    } else {
        window.style.display = "none";
    }
    event.stopPropagation();
});

document.addEventListener("click", function (event) {
    var window = document.getElementById("floating-window");
        if (event.target !== window && event.target !== document.getElementById("more-options")) {
        window.style.display = "none";
    }
});

document.getElementById("btn1").addEventListener("click", function (event) {
    var content = document.getElementById("content1");
    var arrow = document.getElementById("img1");
        if (content.style.display === "none" || content.style.display === "") {
            content.style.display = "block";
            arrow.classList.add("rotated");
        } else {
            content.style.display = "none";
            arrow.classList.remove("rotated");
        }
    event.stopPropagation(); // Evita que el clic se propague al documento
});

document.getElementById("btn2").addEventListener("click", function (event) {
    var content = document.getElementById("content2");
    var arrow = document.getElementById("img2");
    if (content.style.display === "none" || content.style.display === "") {
        content.style.display = "block";
        arrow.classList.add("rotated");
    } else {
        content.style.display = "none";
        arrow.classList.remove("rotated");
    }
    event.stopPropagation(); // Evita que el clic se propague al documento
});

document.getElementById("btn3").addEventListener("click", function (event) {
    var content = document.getElementById("content3");
    var arrow = document.getElementById("img3");
    if (content.style.display === "none" || content.style.display === "") {
        content.style.display = "block";
        arrow.classList.add("rotated");
    } else {
        content.style.display = "none";
        arrow.classList.remove("rotated");
    }
  event.stopPropagation(); // Evita que el clic se propague al documento
});

document.addEventListener("click", function (event) {
    var content1 = document.getElementById("content1");
    var content2 = document.getElementById("content2");
    var content3 = document.getElementById("content3");

  // Comprueba si el clic ocurrió fuera de los contenidos y botones
        if (
            event.target !== content1 &&
            event.target !== content2 &&
            event.target !== content3 &&
            event.target !== document.getElementById("btn1") &&
            event.target !== document.getElementById("btn2") &&
            event.target !== document.getElementById("btn3")
        ) {
            content1.style.display = "none";
            content2.style.display = "none";
            content3.style.display = "none";
        }
});


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



/* ventanas flotantes de listas */

const followButton1 = document.getElementById("followButton1");

followButton1.addEventListener("click", function () {
    if (followButton1.textContent === "Seguir") {
        followButton1.textContent = "Siguiendo";
    } else {
        followButton1.textContent = "Seguir";
    }
});


var container = document.querySelector('.lisstitle1 span');
var ventana = document.getElementById('winslist1');
var timeoutId;

container.addEventListener('mouseenter', function() {
    clearTimeout(timeoutId); // Cancelar el cierre si ya estaba programado
    ventana.style.display = 'block';
});

container.addEventListener('mouseleave', function() {
    timeoutId = setTimeout(function() {
        ventana.style.display = 'none';
    }, 300); // Cierra la ventana después de 500 ms (0.5 segundos)
});

ventana.addEventListener('mouseenter', function() {
    clearTimeout(timeoutId); // Cancelar el cierre si el cursor está encima de la ventana
});

ventana.addEventListener('mouseleave', function() {
    ventana.style.display = 'none'; // Cierra la ventana si el cursor se aleja de ella
});

/*---------------------- VENTANA 2----------------------------*/

const followButton2 = document.getElementById("followButton2");

followButton2.addEventListener("click", function () {
    if (followButton2.textContent === "Seguir") {
        followButton2.textContent = "Siguiendo";
    } else {
        followButton2.textContent = "Seguir";
    }
});


var container2 = document.querySelector('.lisstitle2 span');
var ventana2 = document.getElementById('winslist2');
var timeoutId;

container2.addEventListener('mouseenter', function() {
    clearTimeout(timeoutId); // Cancelar el cierre si ya estaba programado
    ventana2.style.display = 'block';
});

container2.addEventListener('mouseleave', function() {
    timeoutId = setTimeout(function() {
        ventana2.style.display = 'none';
    }, 300); // Cierra la ventana después de 500 ms (0.5 segundos)
});

ventana2.addEventListener('mouseenter', function() {
    clearTimeout(timeoutId); // Cancelar el cierre si el cursor está encima de la ventana
});

ventana2.addEventListener('mouseleave', function() {
    ventana2.style.display = 'none'; // Cierra la ventana si el cursor se aleja de ella
});



/*--------------------- VENTANA 3---------------------------*/


const followButton3 = document.getElementById("followButton3");

followButton3.addEventListener("click", function () {
    if (followButton3.textContent === "Seguir") {
        followButton3.textContent = "Siguiendo";
    } else {
        followButton3.textContent = "Seguir";
    }
});

var container3 = document.querySelector('.lisstitle3 span');
var ventana3 = document.getElementById('winslist3');
var timeoutId;

container3.addEventListener('mouseenter', function() {
    clearTimeout(timeoutId); // Cancelar el cierre si ya estaba programado
    ventana3.style.display = 'block';
});

container3.addEventListener('mouseleave', function() {
    timeoutId = setTimeout(function() {
        ventana3.style.display = 'none';
    }, 300); // Cierra la ventana después de 500 ms (0.5 segundos)
});

ventana3.addEventListener('mouseenter', function() {
    clearTimeout(timeoutId); // Cancelar el cierre si el cursor está encima de la ventana
});

ventana3.addEventListener('mouseleave', function() {
    ventana3.style.display = 'none'; // Cierra la ventana si el cursor se aleja de ella
});

/* ------------ FUNCION PARA LA VENTANA DE USER ------*/

var account = document.getElementById('winsaccount');
var userWindow = document.getElementById('userwindows');

userWindow.style.display = 'none';

account.addEventListener('click', function(event) {
  event.stopPropagation();
  if(userWindow.style.display === 'none') {
      userWindow.style.display = 'block';
  } else {
      userWindow.style.display = 'none';
  }
});

document.addEventListener('click', function() {
  userWindow.style.display = 'none';
});

/*---------------------VENTANA SEGUIR---------------------------*/

const botonseguir1 = document.getElementById("botonseguir1")

botonseguir1.addEventListener("click", function seguir(){

    if(botonseguir1.textContent === "Seguir"){
        botonseguir1.textContent = "Siguiendo";
    }else {
        botonseguir1.textContent = "Seguir";
    }

}) 

const botonseguir2 = document.getElementById("botonseguir2")

botonseguir2.addEventListener("click", function seguir(){

    if(botonseguir2.textContent === "Seguir"){
        botonseguir2.textContent = "Siguiendo";
    }else {
        botonseguir2.textContent = "Seguir";
    }

}) 

const botonseguir3 = document.getElementById("botonseguir3")

botonseguir3.addEventListener("click", function seguir(){

    if(botonseguir3.textContent === "Seguir"){
        botonseguir3.textContent = "Siguiendo";
    }else {
        botonseguir3.textContent = "Seguir";
    }

})