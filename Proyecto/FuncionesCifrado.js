import { IgualarLongitudes } from "./Funciones.js";
import { CrearTabla } from "./Funciones.js";
import { Colorear } from "./Innecesario.js"

export async function IdentarMensaje(mensajes, clave, estatus){
    let table = document.querySelector('#Matriz tbody');
    table.innerHTML = '';

    document.getElementById('MostrarCifrado').value = "";

    const Mensaje = mensajes;
    const Estatus = estatus;
    const Palabras = Mensaje.split(" ");
    const Actualizar = true;

    let mensaje = "";

    for(let i = 0; i < Palabras.length; i++){
        let Clave = IgualarLongitudes(Palabras[i], clave);

        console.log(Clave)
        if(Palabras[i] != ""){ 
            table.innerHTML = '';
            
            MostrarMatriz(Palabras[i], Clave, Estatus);

            let temporal = await ProcesarMensaje(Palabras[i], Clave, Estatus, Actualizar) + " ";
            mensaje = mensaje + temporal;
        }
    }
    document.getElementById('MostrarCifrado').value = mensaje;

    return mensaje
}

async function ProcesarMensaje(mensaje, clave, estatus, actualizar){
    const Alfabeto = "ABCDEFGHIJKLMNÑOPQRSTUVWXYZ";
    const Mensaje = mensaje;
    const Clave = clave;
    const Estatus = estatus;
    const Actualizar = actualizar;

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
        
        if(Actualizar == true){
            await Colorear(Cifrado.charAt(i))
            document.getElementById('MostrarCifrado').value =  document.getElementById('MostrarCifrado').value + Cifrado.charAt(i);
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

    CrearTabla(Filas, Columnas, Matriz);
}
