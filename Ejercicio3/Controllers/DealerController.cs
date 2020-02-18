using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

namespace Ejercicio_3.Controllers
{
    public class DealerController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
    }
}