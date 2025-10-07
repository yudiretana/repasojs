function validarLogin() {
  const usuario = document.getElementById("usuario").value;
  const contrasena = document.getElementById("contrasena").value;
  const mensajeError = document.getElementById("mensajeError");

  const usuarioCorrecto = "admin";
  const contrasenaCorrecta = "12345";

  if (usuario === usuarioCorrecto && contrasena === contrasenaCorrecta) {
    window.location.href = "bienvenida.html";
  } else {
    mensajeError.textContent = "Usuario o contraseña incorrectos.";
  }

  return false;
}
