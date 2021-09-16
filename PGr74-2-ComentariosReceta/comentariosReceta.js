//Funciones para los botones:

function mostrarEnPantalla(){
    /*const saludo = '"Hola Pawer Rangers"'
    const num1 = 5
    const num2 = 6
    const sum = num1 + num2;*/
    //console.log('Los numeros son:' + num1 + ' ' + num2);
    //console.log(saludo);
    //return `La suma de ${num1} y del ${num2} es de ${sum}`;
    const inputName = document.getElementById('cuadroTexto');    
    console.log(inputName.value);
    inputName.value = '';
      
    
}
function mostrarEnPantalla2(){
    const inputName = document.getElementById('cuadroTexto');
    //const inputName2 = document.getElementById('usuario');
    const salida = document.getElementById('salida');
    salida.innerHTML = '<h2>'+inputName.value+'</h2>';
    //salida.innerHTML = '<h2>'+inputName2.value+'</h2>';
    //Muestra el resultado en el cuerpo html
    inputName.value = '';
}

function mostrarEnPantalla3(){
    const inputName = document.getElementById('cuadroTexto');
    const salida = document.getElementById('salida');
    let resultado = '';
    for(let i = 0; i < 5; i++){
        resultado += "<div class='col'>" + inputName.value +" " + (i+1)+ "</div>";
    }
    salida.innerHTML = "<div class='row row-cols-3'>" + resultado + "</div>";
    //Muestra el resultado en el cuerpo html
    inputName.value = '';
}

function activarCampo(){
    const inputName = document.getElementById('cuadroTexto');
    inputName.removeAttribute('readonly');
}

function bloquearCampo(){
    const inputName = document.getElementById('cuadroTexto');
    inputName.setAttribute('readonly','true');
}
