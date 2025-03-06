using System.ComponentModel.DataAnnotations;

namespace MeetingsMVCTraining.Models
{
    public class Meeting
    {
        [Required]
        [MaxLength(100)]
        public string Name { get; set; }

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
