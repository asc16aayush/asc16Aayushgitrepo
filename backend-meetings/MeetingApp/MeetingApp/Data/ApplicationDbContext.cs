using MeetingApp.Models.Domain;
using Microsoft.EntityFrameworkCore;

namespace MeetingApp.Data
{
    public class ApplicationDbContext :DbContext
    {
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options) : base(options)
        {
        }

        public DbSet<Users> Users { get; set; }
        public DbSet<Add> Adds { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);

            // Configure `Add` entity
            modelBuilder.Entity<Add>().Property(a => a.Description).HasMaxLength(500);
            modelBuilder.Entity<Add>().Property(a => a.Attendees).IsRequired();
        }
    }
}
