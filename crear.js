function crear(){
    let tabla = document.querySelector('#tabla tbody');

    let crearfila = document.createElement('tr');

    let datos = ['1','2','3','4'];

    for (let i = 0; i < datos.length; i++) {
        let nuevacelda = document.createElement('td');
        nuevacelda.textContent = datos[i];
        crearfila.appendChild(nuevacelda);
    }

    tabla.appendChild(crearfila);
}