namespace tp3.Models;

public class PalabrasAhorcado
{
    private List<string> palabras;

    public PalabrasAhorcado
    {
        palabras = new List<string>(AVENTURAS, PELOTAZO, CAMINANTE, BIBLIOTECA, MARIPOSAS, CARRETERA, ELEFANTES, MONTAÑAS, VERDADERO, ZAPATERO);
    }

    public string obtenerPalabra()
    {
        Random random = new Random();
        int numero = random.next(0, palabras.count)

        return palabras(numero);
    }
}