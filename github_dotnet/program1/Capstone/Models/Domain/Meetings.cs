using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

using Capstone.Models.DataAnnotations;
//using Capstone.Models.Domain;

//namespace Capstone.Models.Domain;

//public class Meetings
//{

//    [Key]
//    [DatabaseGenerated (DatabaseGeneratedOption.Identity)]
//    public int Id { get; set; }

//    [Required]
//    [MaxLength(100)]
//    [AlphanumericWithSpaces]
//    public string Name { get; set; } // Name of the meeting

//    [Required]
//    public DateTime Date { get; set; }

//    [Required]
//    public TimeSpan StartTime { get; set; }

//    [Required]
//    public TimeSpan EndTime { get; set; }

//    [Required]
//    [MaxLength(500)]
//    [MinLength(10)]
//    [AlphanumericWithSpaces]
//    public string Description { get; set; }

//    [Required]
//    public string Attendees { get; set; }

//    //public ICollection<Users> Attendees { get; set; }

//}


//using System.ComponentModel.DataAnnotations;

namespace Capstone.Models.Domain;

public class Meeting
{
    [Key]
    [DatabaseGenerated (DatabaseGeneratedOption.Identity)]
    public int Id { get; set; }

    [Required]
    [MaxLength(100)]
    [AlphanumericWithSpaces]
    public string Name { get; set; }

    [Required]
    public DateTime Date { get; set; }

    [Required]
    public TimeSpan StartTime { get; set; }

    [Required]
    public TimeSpan EndTime { get; set; }

    [Required]
    [MaxLength(500)]
    [MinLength(10)]
    [AlphanumericWithSpaces]
    public string Description { get; set; }

    public ICollection<User> Attendees { get; set; }
}
