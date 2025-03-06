using Microsoft.AspNetCore.Mvc;
using AutoMapper;
using Capstone.Repositories;
using Capstone.Models.DTO;
using Capstone.Models.Domain;

namespace Capstone.Controllers;

[ApiController]
[Route("api/[controller]")]
public class UsersController : ControllerBase
{
    private readonly IUserRepository _userRepository;
    private readonly IMapper _mapper;

    public UsersController(IUserRepository userRepository, IMapper mapper)
    {
        _userRepository = userRepository;
        _mapper = mapper;
    }

    [HttpGet]
    public async Task<IActionResult> GetAllUsers()
    {
        var users = await _userRepository.GetAllUsersAsync();
        var userDtos = _mapper.Map<IEnumerable<UsersDto>>(users);
        return Ok(userDtos);
    }

    [HttpGet("{id}")]
    public async Task<IActionResult> GetUserById(int id)
    {
        var user = await _userRepository.GetUserByIdAsync(id);
        if (user == null)
            return NotFound();

        var userDto = _mapper.Map<UsersDto>(user);
        return Ok(userDto);
    }

    [HttpPost]
    public async Task<IActionResult> AddUser(UsersDto userDto)
    {
        var user = _mapper.Map<User>(userDto);
        await _userRepository.AddUserAsync(user);
        return Ok();
    }

    [HttpPut("{id}")]
    public async Task<IActionResult> UpdateUser(int id, UsersDto userDto)
    {
        var existingUser = await _userRepository.GetUserByIdAsync(id);
        if (existingUser == null)
            return NotFound();

        var user = _mapper.Map(userDto, existingUser);
        await _userRepository.UpdateUserAsync(user);
        return Ok();
    }

    [HttpDelete("{id}")]
    public async Task<IActionResult> DeleteUser(int id)
    {
        var existingUser = await _userRepository.GetUserByIdAsync(id);
        if (existingUser == null)
            return NotFound();

        await _userRepository.DeleteUserAsync(id);
        return Ok();
    }
}
