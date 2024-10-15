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

        if(auxiliar.length == Mensaje.length){
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