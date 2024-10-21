
import { IdentarMensaje } from "./FuncionesCifrado.js";

document.getElementById('EnviarCifrado').addEventListener('submit', async function(event) {
    await CifrarMensaje(event);
});

async function CifrarMensaje(event){
    event.preventDefault();

    const Mensaje = document.getElementById('Mensaje').value.toString().toUpperCase();
    const Clave = document.getElementById('ClaveCifrar').value.toString().toUpperCase();
    const Estatus = true;

    const Nuevo = await IdentarMensaje(Mensaje, Clave, Estatus);

    
    document.getElementById('MostrarCifrado').value = Nuevo;
}


