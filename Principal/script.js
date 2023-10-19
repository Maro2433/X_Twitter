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

//animacion boton me gusta para activar

const seccionesIcono = document.querySelectorAll('.seccion_icono_03');

seccionesIcono.forEach(seccionIcono => {
    const icono = seccionIcono.querySelector('.icono');
    const numero = seccionIcono.querySelector('#numero_seccion_03');
    const estadistica = seccionIcono.querySelector('.estadistica');
    const iconoSvg = seccionIcono.querySelector('.icono svg path');

    let estadoActivo = false;

    seccionIcono.addEventListener('click', () => {
        if (!estadoActivo) {
            // Cambia el fill del SVG en lugar del div
            iconoSvg.style.fill = '#dd2e44';
            iconoSvg.style.stroke = '#dd2e44';
            numero.innerText = (parseInt(numero.innerText) + 1).toString();
            estadistica.style.color = '#dd2e44';
        } else {
            // Cambia el fill del SVG en lugar del div
            iconoSvg.style.fill = 'none';
            iconoSvg.style.stroke = '#71767b';
            numero.innerText = (parseInt(numero.innerText) - 1).toString();
            estadistica.style.color = '#71767b';
        }

        estadoActivo = !estadoActivo;
    });

    seccionIcono.addEventListener('mouseover', () => {
        if (!estadoActivo) {
            iconoSvg.style.stroke = '#dd2e44';
        }
    });

    seccionIcono.addEventListener('mouseout', () => {
        if (!estadoActivo) {
            iconoSvg.style.stroke = '#71767b';
        }
    });
});

//animacion boton me gusta ya activo

const seccionesIconoalt = document.querySelectorAll('.seccion_icono_03-alt');

seccionesIconoalt.forEach(seccionIconoalt => {
    const iconoalt = seccionIconoalt.querySelector('.icono');
    const numeroalt = seccionIconoalt.querySelector('#numero_seccion_03-alt');
    const estadisticaalt = seccionIconoalt.querySelector('.estadistica-alt');
    const iconoSvgalt = seccionIconoalt.querySelector('.icono svg path');

    let estadoActivo = true;

    seccionIconoalt.addEventListener('click', () => {
        if (!estadoActivo) {
            // Cambia el fill del SVG en lugar del div
            iconoSvgalt.style.fill = '#dd2e44';
            iconoSvgalt.style.stroke = '#dd2e44';
            numeroalt.innerText = (parseInt(numeroalt.innerText) + 1).toString();
            estadisticaalt.style.color = '#dd2e44';
        } else {
            // Cambia el fill del SVG en lugar del div
            iconoSvgalt.style.fill = 'none';
            iconoSvgalt.style.stroke = '#71767b';
            numeroalt.innerText = (parseInt(numeroalt.innerText) - 1).toString();
            estadisticaalt.style.color = '#71767b';
        }

        estadoActivo = !estadoActivo;
    });

    seccionIconoalt.addEventListener('mouseover', () => {
        if (!estadoActivo) {
            iconoSvgalt.style.stroke = '#dd2e44';
            estadisticaalt.style.color = '#dd2e44';
        }
    });

    seccionIconoalt.addEventListener('mouseout', () => {
        if (!estadoActivo) {
            iconoSvgalt.style.stroke = '#71767b';
            estadisticaalt.style.color = '#71767b';
        }
    });
});

/*---------------------VENTANA SEGUIR---------------------------*/

// Variables para el conteo de seguidores
let siguiendoCount = 0;

// Función para actualizar el contador de Siguiendo
function actualizarSiguiendo() {
  const siguiendoElement = document.getElementById("siguiendo");
  siguiendoElement.textContent = siguiendoCount.toString();
}

// Función para seguir o dejar de seguir
function seguir(idBoton) {
  const boton = document.getElementById(idBoton);

  if (boton.textContent === "Seguir") {
    boton.textContent = "Siguiendo";
    siguiendoCount++;
  } else {
    boton.textContent = "Seguir";
    siguiendoCount--;
  }

  // Actualizar el contador de Siguiendo
  actualizarSiguiendo();
}

// Agregar eventos a los botones de seguir
const botonseguir1 = document.getElementById("botonseguir1");
botonseguir1.addEventListener("click", function () {
  seguir("botonseguir1");
});

const botonseguir2 = document.getElementById("botonseguir2");
botonseguir2.addEventListener("click", function () {
  seguir("botonseguir2");
});

const botonseguir3 = document.getElementById("botonseguir3");
botonseguir3.addEventListener("click", function () {
  seguir("botonseguir3");
});

const botonseguir4 = document.getElementById("botonseguir4");
botonseguir4.addEventListener("click", function () {
  seguir("botonseguir4");
});

const botonseguir5 = document.getElementById("botonseguir5");
botonseguir5.addEventListener("click", function () {
  seguir("botonseguir5");
});

const botonseguir6 = document.getElementById("botonseguir6");
botonseguir6.addEventListener("click", function () {
  seguir("botonseguir6");
});

const botonseguir7 = document.getElementById("botonseguir7");
botonseguir7.addEventListener("click", function () {
  seguir("botonseguir7");
});

const botonseguir8 = document.getElementById("botonseguir8");
botonseguir8.addEventListener("click", function () {
  seguir("botonseguir8");
});

const botonseguir9 = document.getElementById("botonseguir9");
botonseguir9.addEventListener("click", function () {
  seguir("botonseguir9");
});

const botonseguir10 = document.getElementById("botonseguir10");
botonseguir10.addEventListener("click", function () {
  seguir("botonseguir10");
});

const botonseguir11 = document.getElementById("botonseguir11");
botonseguir11.addEventListener("click", function () {
  seguir("botonseguir11");
});