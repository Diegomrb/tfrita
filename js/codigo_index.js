$(document).ready(inicio);

function inicio() {

    mostrarRecetas(recetas);
    $('.slider').bxSlider();
    $("#dyn").click(activar);
    $("#dyn").click(cambiar);
    //setTimeout("mostrar_modal()", 4000);
    //$("#cerrar").click(cerrar_modal)
}

function cambiar(){
    $("body").toggleClass("dark");
    $("#recetas a, .infobig, .secondinfobig").toggleClass("black");
    $("h2, p").toggleClass("whitext");
}

//function cerrar_modal() {
  //  $("#v_modal").animate({
    //    top: "-100vh"
    //}, 1000)
//}

//function mostrar_modal() {
 //   $("#v_modal").animate({
  //      top: "10%"
   // }, 1000)
//}



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

function mostrarRecetas(_array) {
    $("#recetas").html("");
    let fechahoy = new Date();
    let hora = fechahoy.getHours();

    if (hora >= 4 && hora < 10) { hora = "Desayuno" }
    else if (hora >= 10 && hora < 14) { hora = "Almuerzo" }
    else if (hora >= 14 && hora < 19) { hora = "Merienda" }
    else if (hora >= 19 && hora <= 23) { hora = "Cena" }
    else if (hora >= 0 && hora < 4) { hora = "Cena" }

    for (let i = 0; i <= _array.length - 1; i++) {
        if (recetas[i]['hora'].indexOf(hora)!==-1) {
        $("#recetas").append(`
        <a href="ampliacion.html?dato=${_array[i]['id']}"><article>
        <h2>${_array[i]['nombre']}</h2>
        <p>${_array[i]['hora']}</p>
        <p>${_array[i]['descripcion']}</p>
        <img src="${_array[i]['imagenes']}">
        </article></a>
        `)
        }
    }
}