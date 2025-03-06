using AutoMapper;
using Meetings_V2.Models.Domain;
using Meetings_V2.Models.DTO;
using Meetings_V2.Repositories;
using Microsoft.AspNetCore.Mvc;

namespace Meetings_V2.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AddController : ControllerBase
    {
        private readonly IAddRepository _addRepository;
        private readonly IMapper _mapper;

        public AddController(IAddRepository addRepository, IMapper mapper)
        {
            _addRepository = addRepository;
            _mapper = mapper;
        }

        // GET: api/add
        [HttpGet]
        public async Task<IActionResult> GetAllMeetings()
        {
            var meetings = await _addRepository.GetAllMeetingsAsync();
            var meetingsDto = _mapper.Map<List<AddDto>>(meetings);
            return Ok(meetingsDto);
        }

        // GET: api/add/{id}
        [HttpGet("{id}")]
        public async Task<IActionResult> GetMeetingById(int id)
        {
            var meeting = await _addRepository.GetMeetingByIdAsync(id);
            if (meeting == null)
            {
                return NotFound(new { message = "Meeting not found." });
            }

            var meetingDto = _mapper.Map<AddDto>(meeting);
            return Ok(meetingDto);
        }

        // POST: api/add
        [HttpPost]
        public async Task<IActionResult> AddMeeting([FromBody] AddDto meetingDto)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var meeting = _mapper.Map<Add>(meetingDto);
            var addedMeeting = await _addRepository.AddMeetingAsync(meeting);
            var addedMeetingDto = _mapper.Map<AddDto>(addedMeeting);

            return CreatedAtAction(nameof(GetMeetingById), new { id = addedMeeting.Id }, addedMeetingDto);
        }

        //// PUT: api/add/{id}
        //[HttpPut("{id}")]
        //public async Task<IActionResult> UpdateMeeting(int id, [FromBody] AddDto meetingDto)
        //{
        //    var existingMeeting = await _addRepository.GetMeetingByIdAsync(id);
        //    if (existingMeeting == null)
        //    {
        //        return NotFound(new { message = "Meeting not found." });
        //    }

        //    var updatedMeeting = _mapper.Map(meetingDto, existingMeeting);
        //    await _addRepository.UpdateMeetingAsync(updatedMeeting);

        //    return Ok(new { message = "Meeting updated successfully!" });
        //}

        //// DELETE: api/add/{id}
        //[HttpDelete("{id}")]
        //public async Task<IActionResult> DeleteMeeting(int id)
        //{
        //    var existingMeeting = await _addRepository.GetMeetingByIdAsync(id);
        //    if (existingMeeting == null)
        //    {
        //        return NotFound(new { message = "Meeting not found." });
        //    }

        //    await _addRepository.DeleteMeetingAsync(id);
        //    return Ok(new { message = "Meeting deleted successfully!" });
        //}

        // PUT: api/add/{meetingId}/add-attendee
        [HttpPut("{meetingId}/add-attendee")]
        public async Task<IActionResult> AddAttendee(int meetingId, [FromBody] AddAttendeeDto attendeeDto)
        {
            var success = await _addRepository.AddAttendeeAsync(meetingId, attendeeDto.AttendeeEmail);
            if (!success)
            {
                return BadRequest(new { message = "Failed to add attendee." });
            }

            return Ok(new { message = "Attendee added successfully!" });
        }

        // PUT: api/add/{meetingId}/excuse-yourself
        [HttpPut("{meetingId}/excuse-yourself")]
        public async Task<IActionResult> ExcuseYourself(int meetingId, [FromBody] ExcuseYourselfDto userDto)
        {
            var success = await _addRepository.ExcuseAttendeeAsync(meetingId, userDto.UserEmail);
            if (!success)
            {
                return BadRequest(new { message = "Failed to excuse yourself." });
            }

            return Ok(new { message = "You have excused yourself successfully!" });
        }

        // GET: api/add/filter
        [HttpGet("filter")]
        public async Task<IActionResult> FilterMeetings(
            [FromQuery] string filter = "ALL",
            [FromQuery] string searchTerm = "")
        {
            var meetings = await _addRepository.GetAllMeetingsAsync();
            // Implement filter logic here or move it to the repository

            //var filteredMeetings = meetings.Where(m => (filter == "ALL" ||
            //                                            (filter == "PAST" && m.Date < DateTime.Now) ||
            //                                            (filter == "UPCOMING" && m.Date > DateTime.Now) ||
            //                                            (filter == "TODAY" && m.Date == DateTime.Now)))
            //                                .ToList();

            var filteredMeetings = meetings.Where(m => (filter == "ALL" ||
                                                       (filter == "PAST" && m.Date < DateTime.Now) ||
                                                       (filter == "UPCOMING" && m.Date > DateTime.Now)))
                                           .ToList();

            var filteredMeetingsDto = _mapper.Map<List<AddDto>>(filteredMeetings);
            return Ok(filteredMeetingsDto);
        }
    }
}
