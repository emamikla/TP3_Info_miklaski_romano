using System.Diagnostics;
using Microsoft.AspNetCore.Mvc;
using tp3.Models;

namespace tp3.Controllers;

public class PalabrasController : Controller
{
    public IActionResult Index()
    {
        return View();
    }
}