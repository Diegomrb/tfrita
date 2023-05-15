let ruta = window.location.href;

let posicionIgual = ruta.indexOf("=");

let id = ruta.substring(posicionIgual + 1);
id = parseInt(id)


$(document).ready(inicio);

function inicio() {
    ampliar_receta();
    $("#dyn").click(activar);
    $("#dyn").click(cambiar);
}

function cambiar(){
    $("body").toggleClass("dark");
    $(".ingredientes, .pasos").toggleClass("black");
    $("h2, p").toggleClass("whitext");
}

function activar() {
    let posicion = $(this).children().css("left");
    if (posicion === "1px") {
        $(this).children().animate({
            left: "21px"
        }, cambiarColor)
    } else {
        $(this).children().animate({
            left: "1px"
        }, function() {
            $("#dyn").css("background-color", "#323232")
        })
    }
}

function cambiarColor() {
    $("#dyn").css("background-color", "orange");
}

function ampliar_receta() {
    let categoria_receta_ampliada = recetas[id]['categoria'];
    $(".individuales").prepend(`
    <h2>${recetas[id]['nombre']}</h2>
    <h3>Categoría: ${recetas[id]['categoria']}</h3>
    <h5>Tipo de comida: ${recetas[id]['hora']}</h5>
    <small><i class="fas fa-clock"></i> ${recetas[id]['tiempo_de_preparacion']}</small>
    <small><i class="fas fa-blender"></i> ${recetas[id]['dificultad']}</small>
    <small><i class="fas fa-user-alt"></i> ${recetas[id]['raciones']}</small>
    <p>Descripción: ${recetas[id]['descripcion_ampliada']}</p>
    `); 
    
    $(".prin_ampliacion").attr("src", `${recetas[id]['imagenes']}`)


    $(".ingredientes").prepend(`<h4>Ingredientes</h4>`)
    for (let i = 0; i <= recetas[id]['ingredientes'].length - 1; i++) {
        $(".ingredientes").append(`<li>${recetas[id]['ingredientes'][i]}</li>`)
    }
    $(".pasos").prepend(`<h4>Receta</h4>`)
    for (let i = 0; i <= recetas[id]['pasos'].length - 1; i++) {
        $(".pasos").append(`<li>${recetas[id]['pasos'][i]}</li>`)
    }
    $(".pasos").append(`<a class="orangebt" href="#"><p>Obtené mas info de esta receta</p></a>`)
}