using Meetings_V2.Models.Domain;
using Microsoft.EntityFrameworkCore;

namespace Meetings_V2.Data
{
    public class ApplicationDbContext : DbContext
    {
        // Constructor to inject DbContextOptions for configuring the database context
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options) : base(options)
        {
        }

        // DbSets representing the tables for Users and Adds
        public DbSet<Users> Users { get; set; }
        public DbSet<Add> Adds { get; set; }

        // Fluent API to configure entity relationships and constraints
        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);

            // Configure `Add` entity
            modelBuilder.Entity<Add>()
                .Property(a => a.Description)
                .HasMaxLength(500) // Limiting the Description field to 500 characters
                .IsRequired(); // Ensure that Description is a required field

            modelBuilder.Entity<Add>()
                .Property(a => a.Attendees)
                .IsRequired(); // Ensure that Attendees is a required field

            // Configure `Users` entity
            modelBuilder.Entity<Users>()
                .Property(u => u.Name)
                .IsRequired() // Ensure that Name is required
                .HasMaxLength(100); // Limit Name field to 100 characters

            modelBuilder.Entity<Users>()
                .Property(u => u.Email)
                .IsRequired() // Ensure that Email is required
                .HasMaxLength(200); // Limit Email field to 200 characters

            // Optionally, add indexes for better query performance
            modelBuilder.Entity<Users>()
                .HasIndex(u => u.Email)
                .IsUnique(); // Ensure the email is unique
        }
    }
}
