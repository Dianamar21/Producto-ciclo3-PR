function verClave() {
    var clave = document.getElementById("passwordRegistro_1");
    var clave2 = document.getElementById("passwordRegistro_2");
    var clave3 = document.getElementById("passwordLogin");

    if (clave.type == "password" || clave2.type == "password" || clave3.type == "password") {
        clave.type = "text";
        clave2.type = "text";
        clave3.type = "text";
    } else {
        clave.type = "password";
        clave2.type = "password";
        clave3.type = "password";
    }
}