using Microsoft.Data.SqlClient;
using Dapper; 
namespace tp3.Models;

public class PalabrasAhorcado
{
    private List<string> palabras;
    BD BD = new BD();

    public PalabrasAhorcado()
    {
        palabras = BD.hacerLista();
    }

    public string obtenerPalabra()
    {
        Random random = new Random();
        int numero = random.Next(0, palabras.Count);

        return palabras[numero];
    }

    public void agregarPalabra (string palabra){
        BD.agregarPalabra(palabra); 
        palabras = BD.hacerLista();
    }
}