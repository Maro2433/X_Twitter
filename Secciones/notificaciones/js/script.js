document
  .getElementById("more-options")
  .addEventListener("click", function (event) {
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
  if (
    event.target !== window &&
    event.target !== document.getElementById("more-options")
  ) {
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

var account = document.getElementById("winsaccount");
var userWindow = document.getElementById("userwindows");

userWindow.style.display = "none";

account.addEventListener("click", function (event) {
  event.stopPropagation();
  if (userWindow.style.display === "none") {
    userWindow.style.display = "block";
  } else {
    userWindow.style.display = "none";
  }
});

document.addEventListener("click", function () {
  userWindow.style.display = "none";
});
