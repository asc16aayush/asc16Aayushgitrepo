//namespace workshopsAPI.Models.Domain
//{
//    public class workshop
//    {
//    }
//}


using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

using workshopsAPI.Models.DataAnnotations;
using workshopsAPI.Models.Domain;


namespace workshopAPI.Models.Domain;

public class Workshop
{
    [Key]
    [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
    public int Id { get; set; }

    [Required(ErrorMessage = "Workshop name is required")]
    public string Name { get; set; }

    [Required]
    [EnumDataType(typeof(WorkshopCategory), ErrorMessage = "Workshop category must be one of the allowed types")]
    public string Category { get; set; }

    [Required]
    [MaxLength(2048)]
    [MinLength(20)]
    [AlphanumericWithSpaces]
    public string Description { get; set; }

    // Add this - navigation property to include sessions when fetching a workshop
    public ICollection<Session> Sessions { get; set; }
}
public enum WorkshopCategory
{
    frontend,
    backend,
    mobile,
    database,
    language,
    devops
}
