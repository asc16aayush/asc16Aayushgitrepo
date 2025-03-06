using MeetingApp.Data;
using MeetingApp.Models.Domain;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace MeetingApp.Controllers
{
    [Route("/api/[controller]")]
    [ApiController]
    public class UsersController : ControllerBase
    {
        private readonly ApplicationDbContext _db;

        public UsersController(ApplicationDbContext db)
        {
            _db = db;
        }

        // GET api/users
        [HttpGet]
        public ActionResult<List<Users>> GetAll()
        {
            var users = _db.Users.ToList();
            return Ok(users);
        }

        // POST api/users
        [HttpPost]
        public async Task<ActionResult<Users>> CreateUser([FromBody] Users newUser)
        {
            if (newUser == null)
            {
                return BadRequest("User data is required.");
            }

            // Just store the password as plain text (not recommended for production)
            _db.Users.Add(newUser);
            await _db.SaveChangesAsync();

            // Return the created user with status code 201 (Created)
            return CreatedAtAction(nameof(GetAll), new { id = newUser.Id }, newUser);
        }

        // POST api/users/login
        [HttpPost("login")]
        public async Task<ActionResult<Users>> Login([FromBody] LoginModel loginModel)
        {
            // Find the user by email
            var user = await _db.Users.FirstOrDefaultAsync(u => u.Email == loginModel.Email);
            if (user == null)
            {
                return Unauthorized("User not found.");
            }

            // Compare the entered password with the stored password (plain-text comparison)
            if (user.Password != loginModel.Password)
            {
                return Unauthorized("Invalid password.");
            }

            // Return the user data (no token in this example)
            return Ok(user);
        }
    }

    // DTO for login data
    public class LoginModel
    {
        public string Email { get; set; }
        public string Password { get; set; }
    }
}
