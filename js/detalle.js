// Hemos omitido los acentos en los comentarios por compatibilidad

//Esta es la instruccion para tomar el id del URL detalle.html?id=<identificador>

const myUrl = new URL (window.location.href);


//Define las variables que necesites

var id = myUrl.searchParams.get("id");
var eventos;
var detalle = [];
var saludar;

$(document).ready(function () {

//Carga los datos que estan en el JSON (info.json) usando AJAX
  
  $.ajax({
    url: "http://127.0.0.1:5500/info.json"
  }).done(function (resultado) {


//Guarda el resultado en variables

  eventos = resultado.eventos;

//Recorre por los datos del JSON y lo guarda en una array

  for (var i = 0; i < eventos.length; i++) {
    detalle.push(eventos[i]);
    
  }

  detalle = detalle.filter(detalle => detalle.id == id);

  console.log(detalle);
  
  var html = ""
    for (var j = 0; j < detalle.length; j++) {
    html += `
    <div class="container py-3">
      <div class="row g-2">
        <div class="col">
        <div class="p-4 border rounded bg-light">
        <h2>${detalle[j].nombre}</h2> 
        <p><h6 style="color:gray">${detalle[j].fecha} - ${detalle[j].lugar}</h6> 
        <h6 style="color:black">${detalle[j].descripcion}</h6> 
        <h6 style="color:gold">Costo: ${detalle[j].precio}</h6>
        <h6 style="color:darkcyan"> Invitados: ${detalle[j].invitados}</h6></div></p>
        </div>
      </div>
    </div>

     `
    }
  //Modifica el DOM agregando el html generado

  document.getElementById("detalle").innerHTML = html

  //Busca el elemento en el arreglo

  //Crea un string que contenga el HTML que describe el detalle del evento

  //Modifica el DOM agregando el html generado dentro del div con id=evento
  })
});
