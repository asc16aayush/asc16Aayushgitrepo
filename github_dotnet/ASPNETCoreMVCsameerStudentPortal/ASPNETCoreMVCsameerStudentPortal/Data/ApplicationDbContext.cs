using ASPNETCoreMVCsameerStudentPortal.Models.Entities;
using Microsoft.EntityFrameworkCore;

namespace ASPNETCoreMVCsameerStudentPortal.Data
{
    public class ApplicationDbContext: DbContext
    {
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options):base(options) 
        {
            


        }

        public DbSet<Student> Students { get; set; }

    }
}
