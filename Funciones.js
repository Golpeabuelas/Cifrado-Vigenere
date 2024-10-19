document.getElementById('ClaveCifrar').addEventListener('input', function() {
    SoloLetras(this);
});

document.getElementById('ClaveDescifrar').addEventListener('input', function() {
    SoloLetras(this);
});

export function SoloLetras(input){
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


