
using Capstone.Models.Domain;
using Microsoft.EntityFrameworkCore;

namespace Capstone.Data;

public class ApplicationDbContext : DbContext 
{


    public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options)
                : base(options)
    {


    }

    //public DbSet<Users> Users { get; set; }
    //public DbSet<Meetings> Meetings { get; set; }

    //public DbSet<MeetingAttendees> MeetingAttendees { get; set; }

    public DbSet<Meeting> Meetings { get; set; }
    public DbSet<User> Users { get; set; }

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        base.OnModelCreating(modelBuilder);

        // Additional configurations, if any
    }

}