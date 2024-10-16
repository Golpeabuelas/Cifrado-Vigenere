function Cifrar(mensaje){
    const Alfabeto = "ABCDEFGHIJKLMNÑOPQRSTUVWXYZ";
    const Mensaje = mensaje;
    const Clave = IgualarLongitudes(Mensaje, document.getElementById('ClaveCifrar').value).toUpperCase();
    
    let Cifrado = "";
    let Indice = 0;
    let indiceMensaje = 0;
    let indiceClave = 0;

    for(let i = 0; i < Mensaje.length; i++){
        for(let j = 0; j < Alfabeto.length; j++){
            if(Mensaje.charAt(i) == Alfabeto.charAt(j)){
                indiceMensaje = j;
                break;
            }    
        }

        for(let k = 0; k < Alfabeto.length; k++){
            if(Clave.charAt(i) == Alfabeto.charAt(k)){
                indiceClave = k;
                break;
            }    
        }

        Indice = (indiceMensaje + indiceClave) % Alfabeto.length;
        Cifrado = Cifrado + Alfabeto.charAt(Indice);
    }

    return Cifrado;
}

function Descifrar(mensaje){
    
    const Alfabeto = "ABCDEFGHIJKLMNÑOPQRSTUVWXYZ";
    const Mensaje = mensaje;
    const Clave = IgualarLongitudes(Mensaje, document.getElementById('ClaveDescifrar').value).toUpperCase();
    
    let Cifrado = "";
    let Indice = 0;
    let indiceMensaje = 0;
    let indiceClave = 0;

    for(let i = 0; i < Mensaje.length; i++){
        for(let j = 0; j < Alfabeto.length; j++){
            if(Mensaje.charAt(i) == Alfabeto.charAt(j)){
                indiceMensaje = j;
                break;
            }    
        }

        for(let k = 0; k < Alfabeto.length; k++){
            if(Clave.charAt(i) == Alfabeto.charAt(k)){
                indiceClave = k;
                break;
            }    
        }

        Indice = (indiceMensaje - indiceClave + Alfabeto.length) % Alfabeto.length;
        Cifrado = Cifrado + Alfabeto.charAt(Indice);
    }

    return Cifrado;
}

function IgualarLongitudes(mensaje, clave){
    const Mensaje = mensaje;
    let Clave = clave;
    
    let auxiliar = "";

    for (let i = 0; i < Mensaje.length; i++) {
        for(let j = 0; j < Clave.length; j++){
            auxiliar = auxiliar + Clave.charAt(j);
            
            if(auxiliar.length == Mensaje.length){
                break;
            } 
        }

        if(auxiliar.length == (Mensaje.length - 1)){
            Clave = auxiliar;
            break;
        } 
    }

    return Clave;
}

function CifrarMensaje(event){
    event.preventDefault();

    const Mensaje = document.getElementById('Mensaje').value.toString().toUpperCase();
    const Palabras = Mensaje.split(" ");
    let mensaje = "";

    for(let i = 0; i < Palabras.length; i++){
        mensaje = mensaje + Cifrar(Palabras[i]) + " ";
    }

    MostrarMatriz(Palabras[0], IgualarLongitudes(Mensaje, document.getElementById('ClaveCifrar').value).toUpperCase());

    document.getElementById('MostrarCifrado').value = mensaje;

    
}

function DescifrarMensaje(event){
    event.preventDefault();

    const Mensaje = document.getElementById('MensajeCifrado').value.toString().toUpperCase();
    const Palabras = Mensaje.split(" ");
    let mensaje = "";

    for(let i = 0; i < Palabras.length; i++){
        mensaje = mensaje + Descifrar(Palabras[i]) + " ";
    }

    document.getElementById('MostrarCifrado').value = mensaje;
}

function MostrarMatriz(mensaje, clave){
    const Mensaje = mensaje;
    const Clave = clave;
    let Filas = clave.length + 1;
    let Columnas = mensaje.length + 1;
    let Matriz =  new Array(Filas);

    for(let i = 0; i < Filas; i++){
        Matriz[i] = new Array(Columnas)
    }
    
//Llenar primeras celdas 
    for(let i = 1; i < Columnas; i++){
        Matriz[0][i] = Mensaje.charAt(i - 1);
    }

    for(let i = 1; i < Filas; i++){
        Matriz[i][0] = Clave.charAt(i - 1);
    }


//Llenar centro de la tabla
    for(let i = 1; i < Filas; i++){
        alert(Mensaje.charAt(i-1));
        for(let j = 1; j < Columnas; j++){
            Matriz[i][j] = CifrandoMatriz(Mensaje.charAt(j - 1), Clave.charAt(i - 1));
        }
    }

    CrearTabla(Filas, Columnas, Matriz);
}

function CifrandoMatriz(CaracterM, CaracterC){
    const Alfabeto = "ABCDEFGHIJKLMNÑOPQRSTUVWXYZ";
    let indiceMensaje = 0;
    let indiceClave = 0;
    let Caracter = "";

        for(let j = 0; j < Alfabeto.length; j++){
            if(CaracterM == Alfabeto.charAt(j)){
                indiceMensaje = j;
                break;
            }    
        }

        for(let k = 0; k < Alfabeto.length; k++){
            if(CaracterC == Alfabeto.charAt(k)){
                indiceClave = k;
                break;
            }    
        }

    Indice = (indiceMensaje + indiceClave) % Alfabeto.length;
    Caracter = Alfabeto.charAt(Indice);
    return Caracter
}

function CrearTabla(filas, columnas, matriz){
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
