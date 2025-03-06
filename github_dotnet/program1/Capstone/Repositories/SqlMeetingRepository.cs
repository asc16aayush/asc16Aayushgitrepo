using Capstone.Models.Domain;
using Capstone.Data;
using Microsoft.EntityFrameworkCore;
using System.Xml.Linq;

namespace Capstone.Repositories;

public class SqlMeetingRepository : IMeetingRepository
{
    private readonly ApplicationDbContext _context;

    public SqlMeetingRepository(ApplicationDbContext context)
    {
        _context = context;
    }

    public async Task<Meeting> GetMeetingByIdAsync(int id)
    {
        return await _context.Meetings.Include(m => m.Attendees)
                                      .FirstOrDefaultAsync(m => m.Id == id);
    }

    public async Task<IEnumerable<Meeting>> GetAllMeetingsAsync()
    {
        return await _context.Meetings.Include(m => m.Attendees).ToListAsync();
    }

    public async Task AddMeetingAsync(Meeting meeting)
    {
        await _context.Meetings.AddAsync(meeting);
        await _context.SaveChangesAsync();
    }

    public async Task UpdateMeetingAsync(Meeting meeting)
    {
        _context.Meetings.Update(meeting);
        await _context.SaveChangesAsync();
    }

    public async Task DeleteMeetingAsync(int id)
    {
        var meeting = await GetMeetingByIdAsync(id);
        _context.Meetings.Remove(meeting);
        await _context.SaveChangesAsync();
    }
}
