
import {CrearTabla} from './Funciones.js';
import {IgualarLongitudes} from './Funciones.js';

document.getElementById('EnviarCifrado').addEventListener('submit', async function(event) {
    await CifrarMensaje(event);
});

async function CifrarMensaje(event){
    console.log("Ese teléfono parece carpintero")
    event.preventDefault();

    let table = document.querySelector('#Matriz tbody');
    table.innerHTML = '';

    document.getElementById('MostrarCifrado').value = "";

    const Mensaje = document.getElementById('Mensaje').value.toString().toUpperCase();
    const Palabras = Mensaje.split(" ");
    let mensaje = "";

    for (let i = 0; i < Palabras.length; i++) {
        if(Palabras[i] != ""){
            table.innerHTML = '';
            
            let temporal = await Cifrar(Palabras[i]);
            mensaje = mensaje +  temporal + " ";
            MostrarMatriz(Palabras[i], IgualarLongitudes(Palabras[i], document.getElementById('ClaveCifrar').value).toUpperCase().trim());

            await new Promise(resolve => setTimeout(resolve, 1500)); 
        }
    }

    document.getElementById('MostrarCifrado').value = mensaje;
}

async function Cifrar(mensaje){
    const Alfabeto = "ABCDEFGHIJKLMNÑOPQRSTUVWXYZ";
    const Mensaje = mensaje;
    let Clave = IgualarLongitudes(Mensaje, document.getElementById('ClaveCifrar').value).toUpperCase();

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

            Indice = (indiceMensaje + indiceClave) % Alfabeto.length;
            Cifrado = Cifrado + Alfabeto.charAt(Indice);
        } else{
            Cifrado = Cifrado + Mensaje.charAt(i);
        }

        document.getElementById('MostrarCifrado').value =  document.getElementById('MostrarCifrado').value + Cifrado.charAt(i);

        await new Promise(resolve => setTimeout(resolve, 150));
    }

    return Cifrado;
}

function MostrarMatriz(mensaje, clave){
    alert("ingaturoña")
    const Mensaje = mensaje;
    const Clave = clave;
    let Filas = clave.length + 1;
    let Columnas = mensaje.length + 1;
    let Matriz =  new Array(Filas);

    for(let i = 0; i < Filas; i++){
        Matriz[i] = new Array(Columnas)
    }
    
    for(let i = 1; i < Columnas; i++){
        Matriz[0][i] = Mensaje.charAt(i - 1);
    }

    for(let i = 1; i < Filas; i++){
        Matriz[i][0] = Clave.charAt(i - 1);
    }

    for(let i = 1; i < Filas; i++){
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

    const Indice = (indiceMensaje + indiceClave) % Alfabeto.length;
    
    Caracter = Alfabeto.charAt(Indice);
    console.log("ingaturoña, aca no llega")
    
    return Caracter;
}


