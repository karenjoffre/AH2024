function crearListadoPeliculas(peliculas) {
  let html = "";
  html += `<h1 class="titulo">Todas las peliculas</h1>`;
  html += "<a href='/peliculas/nueva' class='btn btn-primary'>Agregar pelicula</a>";
  html += '<table class="table table-striped table-bordered">';
  html += "<thead class='thead-dark'>";
  html += "<tr>";
  html += "<th>Nombre</th>";
  html += "<th>Sinopsis</th>";
  html += "<th>Categoria</th>";
  html += "<th>Plataformas</th>";
  html += "<th>Imagen</th>";
  html += "<th>Ver más</th>";
  html += "<th>Modificar</th>";
  html += "<th>Eliminar</th>";
  html += "</tr>";
  html += "</thead>";
  html += "<tbody>"; 

  if (peliculas.length === 0) {
    html += "<tr><td colspan='8' class='text-center'>No hay películas</td></tr>"; // Mensaje cuando no hay películas
  } else {
    peliculas.forEach(pelicula => {
      html += "<tr>";
      html += "<td>" + pelicula.nombre + "</td>";
      html += "<td>" + pelicula.sinopsis + "</td>";
      html += "<td>" + pelicula.categoria + "</td>";
      html += "<td>" + pelicula.plataformas + "</td>";
      html += `<td><img src='/img/${pelicula.imagen}' alt='${pelicula.nombre}' class='img-fluid' style='max-width: 100px;'></td>`; 
      html += `<td><a href='/peliculas/${pelicula._id}' class='btn btn-info'>Ver</a></td>`; 
      html += `<td><a href='/peliculas/modificar/${pelicula._id}' class='btn btn-warning'>Modificar</a></td>`; 
      html += `<td><a href='/peliculas/eliminar/${pelicula._id}' class='btn btn-danger'>Eliminar</a></td>`; 
      html += "</tr>";
    });
  }

  html += "</tbody>"; 
  html += "</table>";
  return html;
}

function crearPagina(titulo, contenido) {
  let html = `
    <!DOCTYPE html>
    <html lang="es">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>${titulo}</title>
            <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css">
            <link rel="stylesheet" href="/style.css">
        </head>
  <header>
   <nav class="navbar navbar-expand-lg">
    <div class="container-fluid">
        <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
                <li class="nav-item">
                    <a class="nav-link active" aria-current="page" href="/">Home</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="/peliculas?categoria=Terror">Terror</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="/peliculas?categoria=Comedia">Comedia</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="/peliculas?categoria=Acción">Acción</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="/peliculas?categoria=Fantasía">Fantasía</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="/peliculas?categoria=Ciencia Ficción">Ciencia Ficción</a>
                </li>
            </ul>
        </div>
    </div>
</nav>
<img src="/img/banner.jpg" width="100%">

</header>
        <body>
            ${contenido}
        </body>
    </html>
    `
  return html
}

function crearDetallePelicula(pelicula) {
  let html = "";
  html += "<h1>Detalle de pelicula</h1>";
  html += "<a href='/peliculas/nueva' class='btn btn-primary'>Agregar pelicula</a>"
  html += `
    <div class="card mb-3" style="max-width: 540px;">
      <div class="row g-0">
        <div class="col-md-4">
          <img src="/img/${pelicula.imagen}" class="img-fluid rounded-start" alt="${pelicula.nombre}">
        </div>
        <div class="col-md-8">
          <div class="card-body">
            <h5 class="card-title">${pelicula.nombre}</h5>
            <p class="card-text">${pelicula.sinopsis}</p>
            <p class="card-text"><strong>Categoria:</strong> ${pelicula.categoria}</p>
            <p class="card-text"><strong>Plataformas:</strong> ${pelicula.plataformas}</p>
          </div>
        </div>
      </div>
    </div>
  `;
  html += "<a href='/peliculas' class='btn btn-secondary'>Atras</a>";
  return html;
}


function nuevaPelicula() {
  let html = "<h1>Agregar Nueva Pelicula</h1>"
  html += "<form action='/peliculas/nueva' method='post'>"
  html += "<label for='nombre'>Nombre</label>"
  html += "<input type='text' name='nombre' required>"
  html += "<br>"
  html += "<label for='sinopsis'>Sinopsis</label>"
  html += "<input type='text' name='sinopsis' required>"
  html += "<br>"
  html += "<label for='imagen'>Imagen</label>"
  html += "<input type='file' name='imagen'>"
  html += "<br>"
  html += "<label for='plataformas'>Plataformas</label>"
  html += "<input type='text' name='plataformas' required>"
  html += "<br>"
  html += "<label for='categoria'>Categoria</label>"
  html += "<input type='text' name='categoria' required>"
  html += "<br>"
  html += "<button type='submit' >Agregar</button>"
  html += "</form>"
  return html
}

function modificarForm(pelicula) {
  let html = "<h1>Modificar pelicula</h1>"
  html += `<form action='/peliculas/modificar/${pelicula._id}' method='post'>`
  html += "<label for='nombre'>Nombre</label>"
  html += `<input type='text' name='nombre' value="${pelicula.nombre}" required>`
  html += "<br>"
  html += "<label for='sinopsis'>Sinopsis</label>"
  html += `<input type='text' name='sinopsis' value="${pelicula.sinopsis}" required>`
  html += "<br>"
  html += "<label for='imagen'>Imagen</label>"
  html += `<input type='file' name='imagen' value="${pelicula.imagen}">`
  html += "<br>"
  html += "<label for='plataformas'>Plataformas</label>"
  html += `<input type='text' name='plataformas' value="${pelicula.plataformas}" required>`
  html += "<br>"
  html += "<label for='categoria'>Categoria</label>"
  html += `<input type='text' name='categoria' value="${pelicula.categoria}" required>`
  html += "<br>"
  html += "<button type='submit' >Aplicar cambios</button>"
  html += "</form>"
  return html

}

export default {
  crearPagina,
  crearListadoPeliculas,
  crearDetallePelicula,
  nuevaPelicula,
  modificarForm
}
export {
  crearPagina,
  crearListadoPeliculas,
  crearDetallePelicula,
  nuevaPelicula,
  modificarForm
}