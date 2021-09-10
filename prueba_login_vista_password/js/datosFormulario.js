function validarLogin() {
    var correo = "yeison@correo.com";
    var clave = "12345";

    var correoForm = document.getElementById("correoLogin").value;
    var claveForm = document.getElementById("passwordLogin").value;


    if (correoForm == correo && claveForm == clave) {
        alert("bienvenido al sitio web");
        window.location.href = "bienvenido.html";

    } else {
        alert("Correo y/o contraseña incorrectos !!");
    }
}