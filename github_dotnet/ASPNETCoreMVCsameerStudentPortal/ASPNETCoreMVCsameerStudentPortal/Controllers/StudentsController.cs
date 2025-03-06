using ASPNETCoreMVCsameerStudentPortal.Models;
using Microsoft.AspNetCore.Mvc;

namespace ASPNETCoreMVCsameerStudentPortal.Controllers
{
    public class StudentsController : Controller
    {
        [HttpGet]
        public IActionResult Add()
        {
            return View();
        }



        [HttpPost]
        public IActionResult Add(AddStudentViewModel viewModel)
        {

            return View();
        }
    }
}
