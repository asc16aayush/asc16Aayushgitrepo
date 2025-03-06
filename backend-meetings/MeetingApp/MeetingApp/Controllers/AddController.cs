using MeetingApp.Data;
using MeetingApp.Models.Domain;
using Microsoft.AspNetCore.Mvc;
using System.Text.Json;
using Microsoft.EntityFrameworkCore;

namespace MeetingApp.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AddController : ControllerBase
    {
        private readonly ApplicationDbContext _db;

        public AddController(ApplicationDbContext db)
        {
            _db = db;
        }


        // GET: api/add
        [HttpGet]
        public IActionResult GetAllMeetings()
        {
            var meetings = _db.Adds.ToList();
            return Ok(meetings);
        }


        // POST: api/add
        [HttpPost]
        public async Task<IActionResult> AddMeeting([FromBody] Add meeting)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            _db.Adds.Add(meeting);
            await _db.SaveChangesAsync();
            return Ok(new { message = "Meeting added successfully!", meeting });
        }


        // PUT: api/add/{meetingId}/add-attendee
        [HttpPut("{meetingId}/add-attendee")]
        public async Task<IActionResult> AddAttendee(int meetingId, [FromBody] JsonElement payload)
        {
            // Use GetProperty to access the attendeeEmail
            if (!payload.TryGetProperty("attendeeEmail", out var attendeeEmailProp))
            {
                return BadRequest(new { message = "Attendee email is required." });
            }

            string attendeeEmail = attendeeEmailProp.GetString();

            if (string.IsNullOrEmpty(attendeeEmail))
            {
                return BadRequest(new { message = "Attendee email is required." });
            }

            // Verify if the user exists with the provided email
            var user = await _db.Users.FirstOrDefaultAsync(u => u.Email == attendeeEmail);
            if (user == null)
            {
                return BadRequest(new { message = "User email is required." });
            }

            var meeting = await _db.Adds.FindAsync(meetingId);
            if (meeting == null)
            {
                return NotFound(new { message = "Meeting not found." });
            }

            var attendees = meeting.Attendees.Split(',').ToList();
            if (!attendees.Contains(attendeeEmail))
            {
                attendees.Add(attendeeEmail);
                meeting.Attendees = string.Join(',', attendees);
                _db.Adds.Update(meeting);
                await _db.SaveChangesAsync();
            }

            return Ok(new { message = "Attendee added successfully.", meeting });
        }


        // PUT: api/add/{meetingId}/excuse-yourself
        [HttpPut("{meetingId}/excuse-yourself")]
        public async Task<IActionResult> ExcuseYourself(int meetingId, [FromBody] object payload)
        {
            try
            {
                // Parse JSON payload and extract email
                var jsonElement = (System.Text.Json.JsonElement)payload;
                if (!jsonElement.TryGetProperty("userEmail", out var userEmailElement))
                {
                    return BadRequest(new { message = "User email is required." });
                }

                string userEmail = userEmailElement.GetString();
                if (string.IsNullOrEmpty(userEmail))
                {
                    return BadRequest(new { message = "User email is required." });
                }

                var meeting = await _db.Adds.FindAsync(meetingId);
                if (meeting == null)
                {
                    return NotFound(new { message = "Meeting not found." });
                }

                var attendees = meeting.Attendees.Split(',').ToList();
                if (attendees.Contains(userEmail))
                {
                    attendees.Remove(userEmail);
                    meeting.Attendees = string.Join(',', attendees);
                    _db.Adds.Update(meeting);
                    await _db.SaveChangesAsync();
                }

                return Ok(new { message = "User excused successfully.", meeting });
            }
            catch
            {
                return StatusCode(500, new { message = "An error occurred while processing the request." });
            }
        }

        // GET: api/add/filter
        [HttpGet("filter")]
        public async Task<IActionResult> FilterMeetings(
            [FromQuery] string filter = "ALL",
            [FromQuery] string searchTerm = "")
        {
            var today = DateTime.Now.Date;
            var query = _db.Adds.AsQueryable();

            // Apply filter
            switch (filter.ToUpper())
            {
                case "PAST":
                    query = query.Where(m => m.Date < today);
                    break;
                case "TODAY":
                    query = query.Where(m => m.Date == today);
                    break;
                case "UPCOMING":
                    query = query.Where(m => m.Date > today);
                    break;
                case "ALL":
                default:
                    break; // No filtering
            }

            // Apply search term
            if (!string.IsNullOrEmpty(searchTerm))
            {
                searchTerm = searchTerm.ToLower();
                query = query.Where(m =>
                    m.Name.ToLower().Contains(searchTerm) ||
                    m.Description.ToLower().Contains(searchTerm));
            }

            var meetings = await query.ToListAsync();

            return Ok(meetings);
        }
    }
}
