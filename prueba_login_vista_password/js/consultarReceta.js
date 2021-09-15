function mostrarEnPantalla(){
    const inputName = document.getElementById("consultar_receta");
    //const salida= document.getElementById("salida");
    //const salida2= document.getElementById("salida");
    const salida3= document.getElementById("salida");
    

    let resultado = "";
    //var datos_receta = "<ul>ingrediente 1</ul> <ul>ingrediente 2</ul><br>"
    var botonzaso = "<div class='d-grid gap-2'><button type='button ' class='btn btn-primary' onclick='mostrarEnPantalla()'><b>Detalles</b></button></div>";
    
    
                
    var datos_receta = "ingrediente 1 <br> ingrediente 2<br>"+botonzaso;
    for(let i=0; i<6; i++){
        resultado += "<div class ='col'>" 
                    +"<b>Receta: </b>"
                    +inputName.value+ " " +(i+1)+
                    "<br>"
                    +datos_receta+"<br></div>";
        
    }
    
    
    
    //salida.innerHTML = "<h3>"+inputName.value+"</h3>";
    //salida2.innerHTML = "<div class ='row row-cols-3'>"+inputName.value+"</div>";
    //salida3.innerHTML = "<div class ='row row-col-lg-3 row-col-md-3 row-col-sm-1 row-cols-3'>"+resultado+"</div>";
    salida3.innerHTML = "<div class ='row row-col-xs-1 row-col-sm-1'>"+resultado+"</div>";
    
    //salida3.innerHTML = "<div class ='row row-cols-3'>"+resultado+"</div>";

    console.log(inputName.value);
    inputName.value = "";

}