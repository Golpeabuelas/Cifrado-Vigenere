async function CifrarMensaje(mensaje, clave){
    const Mensaje = mensaje;
    const Clave = clave
    const Estatus = true;

    const Nuevo = await IdentarMensaje(Mensaje, Clave, Estatus);

    return Nuevo;
}

async function DescifrarMensaje(mensaje, clave){
    const Mensaje = mensaje;
    const Clave = clave
    const Estatus = false;
    const Nuevo = await IdentarMensaje(Mensaje, Clave, Estatus);

    return Nuevo;
}

function IgualarLongitudes(mensaje, clave){
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

async function IdentarMensaje(mensajes, clave, estatus){
    const Mensaje = mensajes;
    const Estatus = estatus;
    const Palabras = Mensaje.split(" ");

    let mensaje = "";

    for(let i = 0; i < Palabras.length; i++){
        let Clave = IgualarLongitudes(Palabras[i], clave);

        if(Palabras[i] != ""){ 
            let temporal = await ProcesarMensaje(Palabras[i], Clave, Estatus) + " ";
            mensaje = mensaje + temporal;
        }
    }

    return mensaje
}

async function ProcesarMensaje(mensaje, clave, estatus){
    const Alfabeto = "ABCDEFGHIJKLMNÑOPQRSTUVWXYZ";
    const Mensaje = mensaje;
    const Clave = clave;
    const Estatus = estatus;

    let Cifrado = "";
    let Indice = 0;
    let indiceMensaje = 0;
    let indiceClave = 0;

    for(let i = 0; i < Mensaje.length; i++){
        if(/[A-ZÑ]/.test(Mensaje.charAt(i))){
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
    
            if(Estatus == true){
                Indice = (indiceMensaje + indiceClave) % Alfabeto.length;
            } else{ 
                Indice = (indiceMensaje - indiceClave + Alfabeto.length) % Alfabeto.length;
            }
            
            Cifrado = Cifrado + Alfabeto.charAt(Indice);
        } else{
            Cifrado = Cifrado + Mensaje.charAt(i);
        }
    }

    return Cifrado;
}

async function MostrarMatriz(mensaje, clave, estatus){
    const Mensaje = mensaje;
    const Clave = clave;
    const Actualizar = false;
    let Filas = clave.length + 1;
    let Columnas = mensaje.length + 1;
    let Matriz =  new Array(Filas);

    for(let i = 0; i < Filas; i++){
        Matriz[i] = new Array(Columnas)
    }

    Matriz[0][0] = null;
    
    for(let i = 1; i < Columnas; i++){
        Matriz[0][i] = Mensaje.charAt(i - 1);
    }

    for(let i = 1; i < Filas; i++){
        Matriz[i][0] = Clave.charAt(i - 1);
    }

    for(let i = 1; i < Filas; i++){
        for(let j = 1; j < Columnas; j++){
            Matriz[i][j] = await ProcesarMensaje(Mensaje.charAt(j - 1), Clave.charAt(i - 1), estatus, Actualizar);
        }
    }

    
    return Matriz;
}

module.exports = {
    CifrarMensaje,
    DescifrarMensaje,
    IgualarLongitudes,
    IdentarMensaje,
    ProcesarMensaje,
    MostrarMatriz
}


