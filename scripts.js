
const request = new XMLHttpRequest();
request.open('GET', 'https://ghibliapi.herokuapp.com/films', true);


request.onload = function () {
  if (request.status >= 200 && request.status < 400) {

    const data = JSON.parse(this.response);
    
    const contenedor = document.getElementById('contenedor');
    contenedor.setAttribute('class', 'card-columns');
    
    data.forEach((pelicula) => {
      
      // Creamos una tarjeta
      const tarjeta = document.createElement('div');
      tarjeta.setAttribute('class', 'card');

      // Creamos el la cabecera y el cuerpo de la tarjeta
      const cabeceraTarjeta = document.createElement('div');
      cabeceraTarjeta.setAttribute('class', 'card-header');

      const cuerpoTarjeta = document.createElement('div');
      cuerpoTarjeta.setAttribute('class', 'card-body');

      // Creamos el encabezado y le asignamos el título de la película
      const titulo = document.createElement('h5');
      const titulo2 = document.createElement('h3');
      const titulo3 = document.createElement('p');
      const image =document.createElement('url');
      const autor =document.createElement('b');
      const productor = document.createElement('p');
      const fecha = document.createElement('p');
      const tiempo = document.createElement('i')
      const score = document.createElement('p');
      const url = document.createElement('a');

      titulo.setAttribute('class', 'card-title');
      titulo2.setAttribute('class', 'card-title');
      titulo3.setAttribute('class', 'card-title');
      autor.setAttribute('class', 'card-title');
      productor.setAttribute('class', 'card-title');
      fecha.setAttribute('class', 'card-title');
      tiempo.setAttribute('class', 'card-title');
      score.setAttribute('class', 'card-title');
      url.setAttribute('class', 'card-title');

      titulo.textContent = pelicula.title;
      titulo2.textContent = pelicula.original_title;
      titulo3.textContent = pelicula.original_title_romanised;
      autor.textContent = `Autor: ${pelicula.director}`;
      productor.textContent = `productor: ${pelicula.director}`;
      fecha.textContent = `Fecha de lanzamiento: ${pelicula.release_date}`;
      tiempo.textContent = `Duración: ${pelicula.running_time} min`;
      score.textContent = `Puntuaje: ${pelicula.running_time}%`;
      url.textContent = pelicula.url;
      // Creamos la párrafo y le asignamos la descripción de la película
      pelicula.descripcion = pelicula.description.substring(0, 250);
      pelicula.image = pelicula.image.substring(0, 250);

      const descripcion = document.createElement('p');
      

      descripcion.setAttribute('class', 'card-text');
      descripcion.textContent = `Descripción: ${ pelicula.descripcion }...`;
      image.setAttribute('class', 'card-text');
      image.textContent = pelicula.image;


      // Agregamos la tarjeta
      contenedor.appendChild(tarjeta);

      // Agregamos la cabecera y el cuerpo a la tarjeta
      tarjeta.appendChild(cabeceraTarjeta);
      tarjeta.appendChild(cuerpoTarjeta);

      // Agregamos el título a la cabecera
      cabeceraTarjeta.appendChild(titulo);
      cabeceraTarjeta.appendChild(titulo2);
      cabeceraTarjeta.appendChild(titulo3);
      cabeceraTarjeta.appendChild(autor);
      cabeceraTarjeta.appendChild(productor);
      cabeceraTarjeta.appendChild(fecha);
      cabeceraTarjeta.appendChild(tiempo);
      cabeceraTarjeta.appendChild(score);
      cabeceraTarjeta.appendChild(url);

      // Agregamos la descripción al cuerpo
      cuerpoTarjeta.appendChild(descripcion);
      

    });
  } else {

    const contenedor = document.getElementById('contenedor');
    const mensajeError = document.createElement('div');

    mensajeError.setAttribute('class', 'alert alert-danger');
    mensajeError.textContent = `Ha ocurrido un error con código ${request.status}`;

    contenedor.appendChild(mensajeError);
  }
}

request.send();

