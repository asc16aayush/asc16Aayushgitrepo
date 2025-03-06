using AutoMapper;
using Meetings_V2.DTOs;
using Meetings_V2.Models.Domain;
using Meetings_V2.Models.DTO;
using Meetings_V2.Repositories;
using Microsoft.AspNetCore.Mvc;

namespace Meetings_V2.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UsersController : ControllerBase
    {
        private readonly IUserRepository _userRepository;
        private readonly IMapper _mapper;

        public UsersController(IUserRepository userRepository, IMapper mapper)
        {
            _userRepository = userRepository;
            _mapper = mapper;
        }

        // GET: api/users
        [HttpGet]
        public async Task<IActionResult> GetAllUsers()
        {
            var users = await _userRepository.GetAllUsersAsync();
            var usersDto = _mapper.Map<List<UsersDto>>(users);
            return Ok(usersDto);
        }

        // GET: api/users/{id}
        [HttpGet("{id}")]
        public async Task<IActionResult> GetUserById(int id)
        {
            var user = await _userRepository.GetUserByIdAsync(id);
            if (user == null)
            {
                return NotFound(new { message = "User not found." });
            }

            var userDto = _mapper.Map<UsersDto>(user);
            return Ok(userDto);
        }

        // POST: api/users
        [HttpPost]
        public async Task<IActionResult> CreateUser([FromBody] AddUserDto userDto)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var user = _mapper.Map<Users>(userDto);
            var createdUser = await _userRepository.AddUserAsync(user);
            var createdUserDto = _mapper.Map<UsersDto>(createdUser);

            return CreatedAtAction(nameof(GetUserById), new { id = createdUser.Id }, createdUserDto);
        }

        // POST: api/users/login
        [HttpPost("login")]
        public async Task<IActionResult> Login([FromBody] LoginDto loginDto)
        {
            var user = await _userRepository.LoginAsync(loginDto.Email, loginDto.Password);
            if (user == null)
            {
                return Unauthorized(new { message = "Invalid credentials." });
            }

            var userDto = _mapper.Map<UsersDto>(user);
            return Ok(userDto);
        }
    }
}
