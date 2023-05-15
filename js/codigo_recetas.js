$(document).ready(inicio);

function inicio(){
    mostrarRecetas(recetas);
    carga_dificultad();
    $("#dificultad").change(filtra_por_dificultad);
    $("#buscar_recetas").keyup(buscar_recetas);
    $("#dyn").click(activar);
    $("#dyn").click(cambiar);
    $("#filtro_horas img").click(filtrar_por_hora);
}

function filtrar_por_hora() {
    let hora_seleccionada = $(this).attr("alt");
    let filtrado = [];
    for (let i = 0; i <= recetas.length - 1; i++) {
        //alert(ingrediente);
            if (recetas[i]['hora'].indexOf(hora_seleccionada) !== -1){
                filtrado.push(recetas[i]);
            }
        }
    
        mostrarRecetas(filtrado);
 
    }

function cambiar(){
    $("body").toggleClass("dark");
    $("#recetas a, select, #buscar_recetas").toggleClass("black");
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


function buscar_recetas() {
        let recetas_buscadas = $("#buscar_recetas").val();
        let filtrado = [];
        for (let i = 0; i <= recetas.length - 1; i++) {
        let ingrediente = recetas[i]['ingredientes'].join(' '); 
        //alert(ingrediente);
            if (recetas[i]['nombre'].toUpperCase().indexOf(recetas_buscadas.toUpperCase() ) !== -1 || ingrediente.toUpperCase().indexOf(recetas_buscadas.toUpperCase()) !== -1) {
                filtrado.push(recetas[i]);
            }
        }
        mostrarRecetas(filtrado);
}

function filtra_por_dificultad() {
    let dificultad_selec = $("#dificultad").val();
    
    let filtrado = [];
    for (let i = 0; i <= recetas.length - 1; i++) {
        if (recetas[i]['dificultad'] === dificultad_selec) {

            filtrado.push(recetas[i]);
        }
    }
    mostrarRecetas(filtrado);
}

function carga_dificultad() {
    let option_select = [];
    for (let i = 0; i <= recetas.length-1; i++) {
        if (option_select.indexOf(recetas[i]['dificultad']) === -1) {
            option_select.push(recetas[i]['dificultad'])
        }
    }
    for (let i = 0; i <= option_select.length-1; i++) {
        $("#dificultad").append(`
        <option value="${option_select[i]}">${option_select[i]}</option>`);
    }
}

function mostrarRecetas(_array){
    $("#recetas").html("");
    for (let i=0; i<=_array.length-1; i++){

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