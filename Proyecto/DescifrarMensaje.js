
import { IdentarMensaje } from './FuncionesCifrado.js';


document.getElementById('EnviarDescifrado').addEventListener('submit', function(event) {
    DescifrarMensaje(event);
});

async function DescifrarMensaje(event){
    event.preventDefault();

    const Mensaje = document.getElementById('MensajeCifrado').value.toString().toUpperCase();
    const Clave = document.getElementById('ClaveDescifrar').value.toString().toUpperCase();
    const Estatus = false;

    const Nuevo = await IdentarMensaje(Mensaje, Clave, Estatus);

    document.getElementById('MostrarCifrado').value = Nuevo;
}
