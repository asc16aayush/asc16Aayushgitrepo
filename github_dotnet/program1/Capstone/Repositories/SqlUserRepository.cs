//namespace Capstone.Repositories
//{
//    public class SqlUserRepository
//    {
//    }
//}


using Capstone.Models.Domain;
using Capstone.Data;
using Microsoft.EntityFrameworkCore;

namespace Capstone.Repositories;

public class SqlUserRepository : IUserRepository
{
    private readonly ApplicationDbContext _context;

    public SqlUserRepository(ApplicationDbContext context)
    {
        _context = context;
    }

    public async Task<User> GetUserByIdAsync(int id)
    {
        return await _context.Users.FindAsync(id);
    }

    public async Task<IEnumerable<User>> GetAllUsersAsync()
    {
        return await _context.Users.ToListAsync();
    }

    public async Task<User> GetUserByEmailAsync(string email)
    {
        return await _context.Users.FirstOrDefaultAsync(u => u.Email == email);
    }

    public async Task AddUserAsync(User user)
    {
        await _context.Users.AddAsync(user);
        await _context.SaveChangesAsync();
    }

    public async Task UpdateUserAsync(User user)
    {
        _context.Users.Update(user);
        await _context.SaveChangesAsync();
    }

    public async Task DeleteUserAsync(int id)
    {
        var user = await GetUserByIdAsync(id);
        _context.Users.Remove(user);
        await _context.SaveChangesAsync();
    }
}
