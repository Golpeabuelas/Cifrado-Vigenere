document.getElementById('ClaveCifrar').addEventListener('input', function() {
    SoloLetras(this);
});

document.getElementById('ClaveDescifrar').addEventListener('input', function() {
    SoloLetras(this);
});

function SoloLetras(input){
    input.value = input.value.replace(/[^a-zA-Z]/g, "");
}

export function IgualarLongitudes(mensaje, clave){
    const Mensaje = mensaje.trim();
    let Clave = clave;
    
    let auxiliar = "";

    for (let i = 0; i < Mensaje.length; i++) {
        for(let j = 0; j < Clave.length; j++){
            auxiliar = auxiliar + Clave.charAt(j);
            
            if(auxiliar.length == Mensaje.length){
                break;
            } 
        }

        if(auxiliar.length == (Mensaje.length)){
            Clave = auxiliar;
            break;
        } 
    }

    return Clave;
}

export function CrearTabla(filas, columnas, matriz){
    const Filas = filas;
    const Columnas = columnas;
    
    let table = document.querySelector('#Matriz tbody');
    table.innerHTML = '';
    
    console.log("ingaturoña ya va a crear la tabla")
    let tabla = document.querySelector('#Matriz tbody');

    for(let i = 0; i < Filas; i++){
        let nuevafila = document.createElement('tr');

        for(let j = 0; j < Columnas; j++){
            let nuevacolumna = document.createElement('td');
            nuevacolumna.textContent = matriz[i][j];
            nuevafila.appendChild(nuevacolumna);
        }

        tabla.appendChild(nuevafila);
    }
}

document.getElementById('Borrar').addEventListener('click', function(event) {
    Borrar();
});

function Borrar(){
    let Inputs = document.getElementsByClassName("Borrable");
    
    let table = document.querySelector('#Matriz tbody');
    table.innerHTML = '';

    for(let i = 0; i < Inputs.length; i++){
        Inputs[i].value = Inputs[i].defaultValue;
    }

    const Celdas = document.getElementsByClassName('Celda')
    
    for(let i = 0; i < Celdas.length; i++){
        Celdas[i].style.backgroundColor = '#E3C7A1'; 
        Celdas[i].style.color = '#4B2E1F';
    }
}


