using Meetings_V2.Data;
using Meetings_V2.Models.Domain;
using Microsoft.EntityFrameworkCore;

namespace Meetings_V2.Repositories
{
    public class SqlUserRepository : IUserRepository
    {
        private readonly ApplicationDbContext _context;

        public SqlUserRepository(ApplicationDbContext context)
        {
            _context = context;
        }

        // Retrieve all users
        public async Task<IEnumerable<Users>> GetAllUsersAsync()
        {
            return await _context.Users.ToListAsync();
        }

        // Retrieve a user by ID
        public async Task<Users> GetUserByIdAsync(int id)
        {
            return await _context.Users.FindAsync(id);
        }

        // Add a new user (register)
        public async Task<Users> AddUserAsync(Users user)
        {
            // Add new user
            _context.Users.Add(user);
            await _context.SaveChangesAsync();
            return user;
        }

        // Update an existing user
        public async Task<Users> UpdateUserAsync(Users user)
        {
            _context.Users.Update(user);
            await _context.SaveChangesAsync();
            return user;
        }

        // Delete a user
        public async Task<bool> DeleteUserAsync(int id)
        {
            var user = await _context.Users.FindAsync(id);
            if (user == null)
            {
                return false;
            }

            _context.Users.Remove(user);
            await _context.SaveChangesAsync();
            return true;
        }

        // Login method: authenticates a user
        public async Task<Users> LoginAsync(string email, string password)
        {
            // Find user by email and plain text password (in production, use hashed passwords)
            return await _context.Users
                .FirstOrDefaultAsync(u => u.Email == email && u.Password == password);
        }
    }
}

