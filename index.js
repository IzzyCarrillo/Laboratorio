function enviar(){
    //   Valores de los campos
      var nombre = document.getElementById("nombre").value;
      var email = document.getElementById("email").value;
      var clave = document.getElementById("clave").value;
      var clave2 = document.getElementById("clave2").value;
      var correcto = true;
    //   NOMBRE
    //   Si está vacío
      if (nombre.length == 0) {
        document.getElementById("msg-nombre").innerHTML = "El campo no puede estar vacío";
        document.getElementById("icono-nombre-err").style.display = "inline";
        document.getElementById("icono-nombre-ok").style.display = "none";
        correcto = false;
    //    Si contiene números
      } else if (nombre.match("[0-9]")) {
        document.getElementById("msg-nombre").innerHTML = "No puede contener números";
        document.getElementById("icono-nombre-err").style.display = "inline";
        document.getElementById("icono-nombre-ok").style.display = "none";
        correcto = false;
      } else {
        document.getElementById("msg-nombre").innerHTML = "";
        document.getElementById("icono-nombre-ok").style.display = "inline";
        document.getElementById("icono-nombre-err").style.display = "none";
      }
    //   EMAIL
    //   Si está vacío
       if (email.length == 0) {
        document.getElementById("msg-email").innerHTML = "El campo no puede estar vacío";
        document.getElementById("icono-email-err").style.display = "inline";
        document.getElementById("icono-email-ok").style.display = "none";
        correcto = false;
    //   Formato del campo email
      } else if (!email.includes("@")) {
        document.getElementById("msg-email").innerHTML = "Introduce un email válido (debe contener @)";
        document.getElementById("icono-email-err").style.display = "inline";
        document.getElementById("icono-email-ok").style.display = "none";
        correcto = false;
      } else if (!email.includes(".")) {
        document.getElementById("msg-email").innerHTML = "Introduce un email válido (debe contener .)";
        document.getElementById("icono-email-err").style.display = "inline";
        document.getElementById("icono-email-ok").style.display = "none";
        correcto = false;
      } else {
        document.getElementById("msg-email").innerHTML = "";
        document.getElementById("icono-email-ok").style.display = "inline";
        document.getElementById("icono-email-err").style.display = "none";
      }
      //   CLAVE
    //   Si está vacío
      if (clave.length == 0) {
        document.getElementById("msg-clave").innerHTML = "El campo no puede estar vacío";
        document.getElementById("icono-clave-err").style.display = "inline";
        document.getElementById("icono-clave-ok").style.display = "none";
        correcto = false;
    //     Si la contraseña es demasiado larga
      } else if (clave.length >= 8) {
        document.getElementById("msg-clave").innerHTML = "La contraseña no puede tener más de 8 caracteres";
        document.getElementById("icono-clave-err").style.display = "inline";
        document.getElementById("icono-clave-ok").style.display = "none";
        correcto = false;
      } else {
        document.getElementById("msg-clave").innerHTML = "";
        document.getElementById("icono-clave-ok").style.display = "inline";
        document.getElementById("icono-clave-err").style.display = "none";
      }
      //   CLAVE 2
    //   Si está vacío
      if (clave2.length == 0) {
        document.getElementById("msg-clave2").innerHTML = "El campo no puede estar vacío";
        document.getElementById("icono-clave2-err").style.display = "inline";
        document.getElementById("icono-clave2-ok").style.display = "none";
        correcto = false;
    //     Si las contraseñas no coinciden
      } else if (clave != clave2) {
        document.getElementById("msg-clave2").innerHTML = "Las contraseñas no coinciden";
        document.getElementById("icono-clave2-err").style.display = "inline";
        document.getElementById("icono-clave2-ok").style.display = "none";
        correcto = false;
    //   Si todo está bien
      } else {
        document.getElementById("msg-clave2").innerHTML = "";
        document.getElementById("icono-clave2-ok").style.display = "inline";
        document.getElementById("icono-clave2-err").style.display = "none";
      }
      if (correcto) {
        alert("Mensaje enviado");
      }
    }