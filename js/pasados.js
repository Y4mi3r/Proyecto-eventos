// Hemos omitido los acentos en los comentarios por compatibilidad

//Define las variables que necesites

var eventos;
var fechaActual;
var pasados = [];


$(document).ready(function () {

  //Carga los datos que estan en el JSON (info.json) usando AJAX
  $.ajax({
    url: "http://127.0.0.1:5500/info.json"
  }).done(function (resultado) {

    //Guarda el resultado en variables
    eventos = resultado.eventos;
    fechaActual = resultado.fechaActual;


    //Recorre por los datos del JSON y lo guarda en una array
    for (var i = 0; i < eventos.length; i++) {
      pasados.push(eventos[i]);
    }


    //Selecciona los eventos que sean anteriores a la fecha actual del JSON 

    pasados = pasados.filter(pasados => pasados.fecha < fechaActual);


    //Ordena los eventos segun la fecha (los mas recientes primero)

    pasados = pasados.sort(function (x, y) {
      if (x.fecha > y.fecha) {
        return -1;
      }
      return 1;

    })

    //Crea un string que contenga el HTML que describe el detalle del evento

    //Recorre el arreglo y concatena el HTML para cada evento


    var html = ""

    for (var j = 0; j < pasados.length; j++) {
      html += `
            <div class="container py-3">
              <div class="row g-2">
                <div class="col">
                <div class="p-4 border rounded bg-light">
                <a href="detalle.html?id=${pasados[j].id}">
                <h2>${pasados[j].nombre}</h2></a> 
                <p><h6 style="color:gray">${pasados[j].fecha} - ${pasados[j].lugar}</h6>
                <h6>${pasados[j].descripcion}</h6> 
                <h6 style="color:darkcyan"> Invitados: ${pasados[j].invitados}</h6></p></div>
                </div>
              </div>
            </div>

              `
    }

    //Modifica el DOM agregando el html generado
    document.getElementById("pasados").innerHTML = html

  })
});

