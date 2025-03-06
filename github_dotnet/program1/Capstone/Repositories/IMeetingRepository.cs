using Capstone.Models.Domain;

namespace Capstone.Repositories;

public interface IMeetingRepository
{
    Task<Meeting> GetMeetingByIdAsync(int id);
    Task<IEnumerable<Meeting>> GetAllMeetingsAsync();
    Task AddMeetingAsync(Meeting meeting);
    Task UpdateMeetingAsync(Meeting meeting);
    Task DeleteMeetingAsync(int id);
}
