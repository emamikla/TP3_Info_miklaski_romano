const palabra = document.getElementById("palabra");
const palabraElegida = palabra.value;
let letra = document.getElementById("letra");
let listaLetras = palabraElegida.split('');
let palabraOculta = [];
let listaErrores = []; 

let guiones= document.getElementById("guionPalabra");
let resultado = document.getElementById("resultado");
let intentosRestantes = document.getElementById("intentosRestantes");
let letrasErradas = document.getElementById("letrasFaltantes");

for (let i = 0; i < listaLetras.length; i++){
    palabraOculta.push ("_");
}

guiones.innerHTML = palabraOculta.join(' '); 
intentosRestantes.innerHTML = "Intentos restantes: " + (10 - listaErrores.length);
letrasErradas.innerHTML = listaErrores.join(', ');

function ArriesgarLetra()
{
    while (listaErrores.length < 10 && palabraOculta.includes("_"))
    {
        let buscar = buscarLetra(letra.value);
        
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
        else
        {
            listaErrores.push(letra.value); 
            intentosRestantes.innerHTML = "Intentos restantes: " + (10 - listaErrores.length);
        }

    }  
    if (listaLetras.join('') === palabraOculta.join(''))
    {
        resultado.innerHTML = "¡Felicidades! Has adivinado la palabra.";
    }
    else if (listaErrores.length >= 10)
    {
        resultado.innerHTML = "¡Has perdido! La palabra era: " + palabraElegida;
    }

} 



function buscarLetra(letra)
{
    let devuelvo = "";
    let i = 0; 
    while (i< listaLetras.length && listaLetras[i] != letra){
        i++;
    }
    if(i >= listaLetras.length)
    {
        devuelvo = null;
    }
    else{
        devuelvo = listaLetras[i];
    }
    return devuelvo
}