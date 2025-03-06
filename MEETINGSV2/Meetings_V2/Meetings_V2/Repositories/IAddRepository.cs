using Meetings_V2.Models.Domain;

namespace Meetings_V2.Repositories
{
    public interface IAddRepository
    {
        // Retrieve all meetings
        Task<IEnumerable<Add>> GetAllMeetingsAsync();

        // Retrieve a specific meeting by ID
        Task<Add> GetMeetingByIdAsync(int id);

        // Add a new meeting
        Task<Add> AddMeetingAsync(Add meeting);

        // Update an existing meeting
        Task<Add> UpdateMeetingAsync(Add meeting);

        // Delete a meeting
        Task<bool> DeleteMeetingAsync(int id);

        // Add an attendee to a meeting
        Task<bool> AddAttendeeAsync(int meetingId, string attendeeEmail);

        // Excuse an attendee from a meeting
        Task<bool> ExcuseAttendeeAsync(int meetingId, string attendeeEmail);

        // Filter meetings by date and search term
        Task<IEnumerable<Add>> FilterMeetingsAsync(string filter, string searchTerm);
    }
}
