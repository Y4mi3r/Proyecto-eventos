// Hemos omitido los acentos en los comentarios por compatibilidad

//Define las variables que necesites

var eventos;
var fechaActual;
var proximos = [];


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
      proximos.push(eventos[i]);
    }


    //Selecciona los eventos que sean posteriores a la fecha actual del JSON 

    proximos = proximos.filter(proximos => proximos.fecha > fechaActual);


    //Ordena los eventos segun la fecha (los mas cercanos primero)

    proximos = proximos.sort(function (x, y) {
      if (x.fecha < y.fecha) {
        return -1;
      }
      return 1;

    })

    //Crea un string que contenga el HTML que describe el detalle del evento

    //Recorre el arreglo y concatena el HTML para cada evento


    var html = ""

    for (var j = 0; j < proximos.length; j++) {
      html += `
          <div class="container py-3">
            <div class="row g-2">
              <div class="col">
              <div class="p-4 border rounded bg-light">
              <a href="detalle.html?id=${proximos[j].id}">
              <h2>${proximos[j].nombre}</h2></a> 
              <p><h6 style="color:gray">${proximos[j].fecha} - ${proximos[j].lugar}</h6>
              <h6>${proximos[j].descripcion}</h6>
              <h6 style="color:darkcyan"> Costo: ${proximos[j].precio}</h6>
              </p></div>
              </div>
            </div>
          </div>

              `
    }

    //Modifica el DOM agregando el html generado dentro del div con id=evento
    document.getElementById("proximos").innerHTML = html

  })
});





/*
              <table class="table col-lg-4 col-md-6 border p-3">
              <tbody>
                <tr >
                  <td style="background-color: white"><a href="detalle.html">${proximos[j].nombre}</a> <p style="color:gray">${proximos[j].fecha} - ${proximos[j].lugar}</p><p>${proximos[j].descripcion}</p><p style="color:darkcyan"> Costo: ${proximos[j].precio}</p></td>
                </tr>
              </tbody>
            </table

            <canvas id="myCanvas" width="200" height="100" style="border:3px solid #000000;">
            </canvas>
*/