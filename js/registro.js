function limpiarErrores(){
  var errores = document.getElementsByClassName("error");
  for(var i = 0; i < errores.length; i++){
    errores[i].innerHTML = "";
  }
}

function validar(formulario) {

  limpiarErrores();

  var renom = /^[a-zA-ZÀ-ÿ\s]{5,40}$/; //validacion de nombre completo
  if (!renom.test(formulario.nombres.value)){
    document.getElementById("errornombres").innerText = "Este campo es obligatorio";
    formulario.nombres.focus();
    return false;  
  }

  var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;  // validacion de correo
  if (!re.test(formulario.email.value)){
    document.getElementById("errorEmail").innerText = "Campo inválido";
    formulario.email.focus();
    return false;  
  }

  var pass = /^.{7,20}$/; // validacion de contraseña
  if (!pass.test(formulario.contrasena.value)) {

    document.getElementById("errorContrasena").innerText = "Contraseña inválida, mínimo 7 caracteres";
    formulario.contrasena.focus();
    return false;
  }

    if (formulario.contrasena.value != formulario.confirmacion.value) {
      document.getElementById("errorConfirmacion").innerText = "La contraseña no coinciden";
      formulario.confirmacion.focus();
      return false;
    }
    if (formulario.tipo.value == "") {
      document.getElementById("errorTipo").innerText = "Este campo es obligatorio";
      formulario.tipo.focus();
      return false;
    }
    if (!formulario.acepto.checked) {
      document.getElementById("errorAcepto").innerText = "Debe aceptar los términos y condiciones";
      formulario.acepto.focus();
      return false;
    }

    alert("Registro Exitoso");

    return true;
  }
  