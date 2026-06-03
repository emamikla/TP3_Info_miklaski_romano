namespace tp3.Models;

public class PalabrasAhorcado
{
    private List<string> palabras;

    public PalabrasAhorcado()
    {
        palabras = new List<string>{"AVENTURAS", "PELOTAZO", "CAMINANTE", "BIBLIOTECA", "MARIPOSAS", "CARRETERA", "ELEFANTES", "MONTAÑAS", "VERDADERO", "ZAPATERO"};
    }

    public string obtenerPalabra()
    {
        Random random = new Random();
        int numero = random.Next(0, palabras.Count);

        return palabras[numero];
    }
}