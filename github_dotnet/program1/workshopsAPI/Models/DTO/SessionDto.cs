using workshopAPI.Models.Domain;

namespace workshopsAPI.Models.DTO;

public class SessionDto
{
    public int Id { get; set; }
    public int WorkshopId { get; set; }
    public string Name { get; set; }
    public string Speaker { get; set; }

    public Workshop? Workshop { get; set; }
}
