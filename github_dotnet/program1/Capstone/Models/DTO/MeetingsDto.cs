namespace Capstone.Models.DTO;

public class MeetingsDto
{
    public int Id { get; set; }
    public string Name { get; set; }
    public DateTime Date { get; set; }
    public TimeSpan StartTime { get; set; }
    public TimeSpan EndTime { get; set; }
    public string Description { get; set; }
    public List<string> Attendees { get; set; }
}
