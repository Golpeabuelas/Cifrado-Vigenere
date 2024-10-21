const assert = require ('assert')
const { CifrarMensaje, DescifrarMensaje, IgualarLongitudes, IdentarMensaje, ProcesarMensaje, MostrarMatriz } = require ('../CopiasParaTest/CopiaDeFunciones');

describe('Puebas unitarias para las funciones del programa', function() {
    it('Debería igualar la longitud de la clave y de la cadena', function () {
        console.log('Cadena: Julian');
        console.log('Clave: ER');

        const Clave = IgualarLongitudes('Julian', 'ER');

        console.log('Longitud cambiada: ', Clave);
        assert.strictEqual(Clave, 'ERERER');
    });

    it('Debería igualar la longitud de la clave y de la cadena sin espacios', function () {
        console.log('Cadena: EspacioFinal    .');
        console.log('Clave: ER');

        const Clave = IgualarLongitudes('EspacioFinal    ', 'ER');

        console.log('Longitud cambiada: ', Clave);
        assert.strictEqual(Clave, 'ERERERERERER');
    });

    it('Probando la función de ProcesarMensaje', async () => {
        console.log('Cadena: JULIAN');
        console.log('Clave: ERERER');

        const Cifrado = await ProcesarMensaje('JULIAN', 'ERERER', true);

        console.log('Mensaje Cifrado: ', Cifrado);
        assert.strictEqual(Cifrado, 'NMOZEE');
    });

    it('Debería soportar caracteres especiales al cifrar el mensaje dado', async () => {
        console.log('Cadena: JULIAN%&34');
        console.log('Clave: ERERER');

        const Cifrado = await ProcesarMensaje('JULIAN%&34', 'ERERER', true);

        console.log('Mensaje Cifrado: ', Cifrado);
        assert.strictEqual(Cifrado, 'NMOZEE%&34');
    });

    it('El mensaje cifrado e identado debería ser JRÑZY WGYC ', async () =>{
        console.log('Mensaje: fakiu soul');
        console.log('Clave: ER');

        const Identado = await IdentarMensaje('FAKIU SOUL', 'ER', true);
        
        console.log('Mensaje Cifrado e Identado: ', Identado);
        assert.strictEqual(Identado, 'JRÑZY WGYC ')
    });

    it('Debería mostrar la matriz adecuada', async () =>{
        const Matriz = [[null, 'N', 'M', 'O', 'Z', 'E', 'E'],
                        ['E', 'J', 'I', 'L', 'V', 'A', 'A'],
                        ['R', 'V', 'U', 'X', 'I', 'N', 'N'],
                        ['E', 'J', 'I', 'L', 'V', 'A', 'A'],
                        ['R', 'V', 'U', 'X', 'I', 'N', 'N'],
                        ['E', 'J', 'I', 'L', 'V', 'A', 'A'],
                        ['R', 'V', 'U', 'X', 'I', 'N', 'N']];
        
        const Obtenida = await MostrarMatriz('NMOZEE', 'ERERER', false)

        console.log(Obtenida);
        assert.deepStrictEqual(Matriz, Obtenida);
    });

    it('El mensaje cifrado debería ser NMOZEE', async () =>{
        console.log('Cadena: JULIAN');
        console.log('Clave: ER');

        const Cifrado = await CifrarMensaje('JULIAN ', 'ER')

        console.log('Mensaje Cifrado: ', Cifrado);
        assert.strictEqual(Cifrado, 'NMOZEE ')
    });

    it('El mensaje cifrado debería ser JULIAN', async () =>{
        console.log('Cadena: NMOZEE');
        console.log('Clave: ER');

        const Cifrado = await DescifrarMensaje('NMOZEE ', 'ER')

        console.log('Mensaje Cifrado: ', Cifrado);
        assert.strictEqual(Cifrado, 'JULIAN ')
    });
});
