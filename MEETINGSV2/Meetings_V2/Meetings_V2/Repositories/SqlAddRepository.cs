using Meetings_V2.Data;
using Meetings_V2.Models.Domain;
using Microsoft.EntityFrameworkCore;

namespace Meetings_V2.Repositories
{
    public class SqlAddRepository : IAddRepository
    {
        private readonly ApplicationDbContext _context;

        public SqlAddRepository(ApplicationDbContext context)
        {
            _context = context;
        }

        public async Task<IEnumerable<Add>> GetAllMeetingsAsync()
        {
            return await _context.Adds.ToListAsync();
        }

        public async Task<Add> GetMeetingByIdAsync(int id)
        {
            return await _context.Adds.FindAsync(id);
        }

        public async Task<Add> AddMeetingAsync(Add meeting)
        {
            _context.Adds.Add(meeting);
            await _context.SaveChangesAsync();
            return meeting;
        }

        public async Task<Add> UpdateMeetingAsync(Add meeting)
        {
            _context.Adds.Update(meeting);
            await _context.SaveChangesAsync();
            return meeting;
        }

        public async Task<bool> DeleteMeetingAsync(int id)
        {
            var meeting = await _context.Adds.FindAsync(id);
            if (meeting == null)
            {
                return false;
            }

            _context.Adds.Remove(meeting);
            await _context.SaveChangesAsync();
            return true;
        }

        public async Task<bool> AddAttendeeAsync(int meetingId, string attendeeEmail)
        {
            var meeting = await _context.Adds.FindAsync(meetingId);
            if (meeting == null)
            {
                return false;
            }

            var attendees = meeting.Attendees.Split(',').ToList();
            if (!attendees.Contains(attendeeEmail))
            {
                attendees.Add(attendeeEmail);
                meeting.Attendees = string.Join(',', attendees);
                _context.Adds.Update(meeting);
                await _context.SaveChangesAsync();
            }

            return true;
        }

        public async Task<bool> ExcuseAttendeeAsync(int meetingId, string attendeeEmail)
        {
            var meeting = await _context.Adds.FindAsync(meetingId);
            if (meeting == null)
            {
                return false;
            }

            var attendees = meeting.Attendees.Split(',').ToList();
            if (attendees.Contains(attendeeEmail))
            {
                attendees.Remove(attendeeEmail);
                meeting.Attendees = string.Join(',', attendees);
                _context.Adds.Update(meeting);
                await _context.SaveChangesAsync();
            }

            return true;
        }

        public async Task<IEnumerable<Add>> FilterMeetingsAsync(string filter, string searchTerm)
        {
            var today = DateTime.Now.Date;
            var query = _context.Adds.AsQueryable();

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

            return await query.ToListAsync();
        }
    }
}
