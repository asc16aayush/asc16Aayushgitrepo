using AutoMapper;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using workshopsAPI.Data;
using workshopsAPI.Models.DTO;

namespace workshopsAPI.Controllers;

[Route("/api/[controller]")]
[ApiController]
public class SessionsController : ControllerBase
{
    private ApplicationDbContext _db;
    private IMapper _mapper;

    public SessionsController(ApplicationDbContext db, IMapper mapper)
    {
        _db = db;
        _mapper = mapper;
    }

    [HttpGet]
    async public Task<IActionResult> GetAll()
    {
        var sessionsDomain = await _db.Sessions.ToListAsync();
        var sessionsDto = _mapper.Map<List<SessionDto>>(sessionsDomain);

        return Ok(sessionsDto);
    }
}
