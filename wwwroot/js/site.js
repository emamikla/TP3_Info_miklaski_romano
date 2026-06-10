const palabraElem = document.getElementById("palabra");
let palabraElegida = document.getElementById("palabra").value;
const letra = document.getElementById("letra").value.toUpperCase();
let listaLetras = palabraElegida.split('');

let palabraOculta = [];
let listaErrores = [];

const guiones = document.getElementById("guionPalabra");
const resultado = document.getElementById("resultado");
const intentosRestantes = document.getElementById("intentosRestantes");
const letrasErradas = document.getElementById("letrasFaltantes");

for (let i = 0; i < listaLetras.length; i++){
    palabraOculta[i] = "_";
}
ActualizarPantalla();

function ActualizarPantalla() {
    guiones.innerHTML = palabraOculta.join(' ');
    intentosRestantes.innerHTML = "Intentos restantes: " + (10 - listaErrores.length);
    letrasErradas.innerHTML = listaErrores.join(', ');
}


function ArriesgarLetra()
{
    const letra = document.getElementById("letra").value.toUpperCase();
    if (listaErrores.length < 10 && palabraOculta.includes("_"))
    {
        let buscar = buscarLetra(letra);
        
        if (buscar != null)
        {
            for (let i = 0; i < listaLetras.length; i++ )
            {
                if (listaLetras[i] === buscar)
                {
                    palabraOculta[i] = buscar; 
                }
            }
        } 
        else {
            if (!listaErrores.includes(letra)) {
                listaErrores.push(letra);
            }
        }

        ActualizarPantalla();

        if (listaLetras.join('') === palabraOculta.join('')) {
            resultado.innerHTML = "¡Felicidades! Has adivinado la palabra.";
        } else if (listaErrores.length >= 10) {
            resultado.innerHTML = "¡Has perdido! La palabra era: " + palabraElegida;
        }
    };

    function buscarLetra(letra) {
        
        let i = 0;
        let l = null ; 
        while (i < listaLetras.length && listaLetras[i] !== letra){
            
            i++;
        }
        if (i < listaLetras.length) {
            l = listaLetras[i];
        }
        else {
            l = null;
        }
        return l;
    }
}