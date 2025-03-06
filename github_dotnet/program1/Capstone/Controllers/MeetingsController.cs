using Microsoft.AspNetCore.Mvc;
using AutoMapper;
using Capstone.Repositories;
using Capstone.Models.DTO;
using Capstone.Models.Domain;

namespace Capstone.Controllers;

[ApiController]
[Route("api/[controller]")]
public class MeetingsController : ControllerBase
{
    private readonly IMeetingRepository _meetingRepository;
    private readonly IMapper _mapper;

    public MeetingsController(IMeetingRepository meetingRepository, IMapper mapper)
    {
        _meetingRepository = meetingRepository;
        _mapper = mapper;
    }

    [HttpGet]
    public async Task<IActionResult> GetAllMeetings()
    {
        var meetings = await _meetingRepository.GetAllMeetingsAsync();
        var meetingDtos = _mapper.Map<IEnumerable<MeetingsDto>>(meetings);
        return Ok(meetingDtos);
    }

    [HttpPost]
    public async Task<IActionResult> AddMeeting(MeetingsDto meetingDto)
    {
        var meeting = _mapper.Map<Meeting>(meetingDto);
        await _meetingRepository.AddMeetingAsync(meeting);
        return Ok();
    }
}
