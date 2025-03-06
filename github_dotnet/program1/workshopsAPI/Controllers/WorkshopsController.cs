
using workshopsAPI.Data;
using Microsoft.EntityFrameworkCore;
using Microsoft.AspNetCore.Mvc;
using workshopAPI.Models.Domain;
using workshopsAPI.Models.DTO;
using AutoMapper;
using workshopsAPI.Repositories;

namespace workshopsAPI.Controllers;

[ApiController]
[Route("/api/[controller]")]
public class WorkshopsController : ControllerBase
{
    //private ApplicationDbContext _db;
    private IMapper _mapper;
    private IWorkshopRepository _repo;
    public WorkshopsController(IMapper mapper, IWorkshopRepository repo) { 
    
        //_db = db;
        _mapper = mapper;
        _repo = repo;
    }

    [HttpGet]
    //public List<Workshop> GetWorkshops()
    //{

    //    return _db.Workshops.ToList();
    //}
    //async  public Task<IActionResult> GetWorkshops([FromQuery ] string ? filterOn, [FromQuery ] string ? filterQuery, [FromQuery] string? sortBy,
    //    [FromQuery] bool? isAscending,
    //    [FromQuery] int pageNumber = 1,
    //    [FromQuery] int pageSize = 1000,
    //    [FromQuery] string _embed = "")
    //{
    //    //var workshopsDomain = await  _db.Workshops.Include("Sessions").ToListAsync();

    //    //var workshopsDto = new List<WorkshopDto>();

    //    //foreach(var workshop in workshopsDomain)
    //    //{
    //    //    var workshopDto = new WorkshopDto
    //    //    {
    //    //        Id = workshop.Id,
    //    //        Name = workshop.Name,
    //    //        Category = workshop.Category,
    //    //        Description = workshop.Description
    //    //    };
    //    //    workshopsDto.Add(workshopDto);
    //    //}

    //    var workshopsDomain = await _repo.GetAllAsync(filterOn ,filterQuery, sortBy, isAscending ?? false, pageNumber, pageSize, _embed);

    //    var workshopsDto = _mapper.Map<List<WorkshopDto>>(workshopsDomain); 

    //    return Ok(workshopsDto);
    //}

    [Route("{id:int}")]
    public async Task<IActionResult> GetById([FromRoute] int id)
    {
        var workshopDomain = await _repo.GetByIdAsync(id);

        if (workshopDomain == null)
        {
            return NotFound();
        }

        var workshopDto = _mapper.Map<WorkshopDto>(workshopDomain);

        return Ok(workshopDto);
    }


}


