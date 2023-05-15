$(document).ready(inicio);

function inicio() {

    $("#dyn").click(activar);
    $("#dyn").click(cambiar);
    $("#email").focusout(validarMail);
    $("#telefono").focusout(validarTelefono);
}

function validarTelefono() {
    
    let tel = $("#telefono").val();
    $("#mensaje").val("");
    if (isNaN($('#telefono').val())) {
        $("#mensaje").text(`El teléfono solo debe contener números`);
        $("#mensaje").css("color", "red");
    } else if ($("#telefono").val().length < 8) {
        $("#mensaje")(`El teléfono debe tener 8 caracteres. Ej. 2455 1224`);
        $("#mensaje").css("color", "red")
      }
        else {
        $("#mensaje").text(`<strong>Su telefono es correcto</strong>`)
        $("#mensaje").css("color", "green");
    }
}

function validarMail() {
    
    let email = $("#email").val();
    $("#mensaje").val("");
    if (email.indexOf("@") === -1) {
        $("#mensaje").text(`Su email debe tener un @`)
        $("#mensaje").css("color", "red")
    } else if (email.indexOf(".", email.indexOf("@")) < 0) {
        $("#mensaje").text(`Su mail debe tener un . despues del @`)
        $("#mensaje").css("color", "red")
    } else if (email.charAt(email.indexOf(".") + 1) === "") {
        $("#mensaje").text(`Su mail debe tener un texto despues del .`)
        $("#mensaje").css("color", "red")
    } else {
        $("#mensaje").html(`<strong>Su email es correcto</strong>`)
        $("#mensaje").css("color", "green");
    }
}

function cambiar(){
    $("body").toggleClass("dark");
    $(".ingredientes, .pasos").toggleClass("black");
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