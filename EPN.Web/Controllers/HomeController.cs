using Microsoft.AspNetCore.Mvc;
using System.Diagnostics;

namespace EPN.Web.Controllers
{
    public class HomeController : Controller
    {

        public IActionResult Index()
        {
            return View();
        }
    }
}
