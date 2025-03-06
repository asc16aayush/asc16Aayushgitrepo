using System.ComponentModel.DataAnnotations;

namespace Meetings_V2.Models.Domain
{
    public class Add //Meeting
    {
        [Key]
        public int Id { get; set; }

        [Required]
        [MaxLength(100)]
        public string Name { get; set; } // Name of the meeting

        [Required]
        public DateTime Date { get; set; }

        [Required]
        public TimeSpan StartTime { get; set; }

        [Required]
        public TimeSpan EndTime { get; set; }

        [Required]
        [MaxLength(500)]
        public string Description { get; set; }

        [Required]
        public string Attendees { get; set; }
    }
}
