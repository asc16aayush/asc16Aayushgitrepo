using Meetings_V2.Models.Domain;

namespace Meetings_V2.Repositories
{
    public interface IUserRepository
    {
        // Retrieve all users
        Task<IEnumerable<Users>> GetAllUsersAsync();

        // Retrieve a user by ID
        Task<Users> GetUserByIdAsync(int id);

        // Add a new user (register)
        Task<Users> AddUserAsync(Users user);

        // Update an existing user (optional, based on your app's needs)
        Task<Users> UpdateUserAsync(Users user);

        // Delete a user (optional)
        Task<bool> DeleteUserAsync(int id);

        // Login method
        Task<Users> LoginAsync(string email, string password);
    }
}
