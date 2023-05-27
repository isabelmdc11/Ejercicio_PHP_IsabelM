document.getElementById('botonEnviar').disabled = true;

var comprobarNombre = false;
var comprobarApellidos = false;
var comprobarEmail = false;

function comprobarFormulario() {

  if (comprobarNombre == true && comprobarApellidos == true && comprobarEmail == true) {
    document.getElementById('botonEnviar').disabled = false;

  } else {
    document.getElementById('botonEnviar').disabled = true;
  }

}

function ComprobarNombre() { // Comprueba  si los datos introducido en el input nombres son verdaderos o no

  var InputNombre = document.getElementById('nombre');

  var validarValorNombre = /^[a-z A-Z á-ú Á-Ú]+$/;  // expresion regular para comprobar que solo acepte caracteres

  if (validarValorNombre.test(InputNombre.value) == true) {
    InputNombre.style.borderBottom = "1px solid green";
    comprobarNombre = true;
    comprobarFormulario();

  }
  else {
    InputNombre.style.borderBottom = "1px solid red";
    comprobarNombre = false;
    comprobarFormulario();
  }
}

function ComprobarApellidos() { // Comprueba  si los datos introducido en el input Apellidos son verdaderos o no

  var InputApellido = document.getElementById('apellidos');

  var validarValor = /^[a-z A-Z á-ú Á-Ú]+$/;  // expresion regular para comprobar que solo acepte caracteres

  if (validarValor.test(InputApellido.value) == true) {
    InputApellido.style.borderBottom = "1px solid green";
    comprobarApellidos = true;
    comprobarFormulario();
  }
  else {
    InputApellido.style.borderBottom = "1px solid red";
    comprobarApellidos = false;
    comprobarFormulario();
  }

}

function ComprobarinputEmail() { // Comprueba  si los datos introducido en el input email son verdaderos o no

  var InputEmail = document.getElementById('email');
  var validarEmail = /^\w+([\.-]?\w+)*@(?:|hotmail|outlook|yahoo|live|gmail)\.(?:|com|es)+$/; // expresion regular para comprobar el email

  if (InputEmail.value == "") {

    InputEmail.style.borderBottom = "1px solid red";
    comprobarEmail = false;
    comprobarFormulario();
  }
  else {

    if (validarEmail.test(InputEmail.value)) {

      InputEmail.style.borderBottom = "1px solid green";
      comprobarEmail = true;
      comprobarFormulario();
    }
    else {
      InputEmail.style.borderBottom = "1px solid red";
      comprobarEmail = false;
      comprobarFormulario();
    }
  }

}


