/* VENTANA DE PREMIUMMMM */


    // Obtenemos el modal
    var modal = document.getElementById("myModal");

    // Obtenemos el botón que abre el modal
    var btn = document.getElementById("btnModal");
    
    // Obtenemos el elemento <span> que cierra el modal
    var span = document.getElementsByClassName("close")[0];
    
    // Cuando el usuario hace clic en el botón, abrimos el modal 
    btn.onclick = function() {
      modal.style.display = "block";
    }
    
    // Cuando el usuario hace clic en <span> (x), cerramos el modal
    span.onclick = function() {
      modal.style.display = "none";
    }
    
    // Cuando el usuario hace clic en cualquier lugar fuera del modal, lo cerramos
    window.onclick = function(event) {
      if (event.target == modal) {
        modal.style.display = "none";
      }
    }