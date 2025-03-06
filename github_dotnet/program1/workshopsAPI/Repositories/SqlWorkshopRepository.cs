//using Microsoft.EntityFrameworkCore;
//using workshopAPI.Models.Domain;
//using workshopsAPI.Data;

//namespace workshopsAPI.Repositories;

//public class SqlWorkshopRepository : IWorkshopRepository
//{

//    private ApplicationDbContext _db;

//    public SqlWorkshopRepository(ApplicationDbContext db)
//    {
//        _db = db;
//    }
//    public Task<Workshop> CreateAsync(Workshop workshop)
//    {
//        throw new NotImplementedException();
//    }

//    public Task<Workshop?> DeleteAsync(int id)
//    {
//        throw new NotImplementedException();
//    }

//    async public Task<List<Workshop>> GetAllAsync(string? filterOn = null, string? filterQuery = null, string? sortBy = null, bool isAscending = true, int pageNumber = 1, int pageSize = 1000, string _embed = "")
//    {

//        var query = _db.Workshops.AsQueryable();

//        // Filtering
//        if (!string.IsNullOrWhiteSpace(filterOn) && !string.IsNullOrWhiteSpace(filterQuery))
//        {
//            if (filterOn.Equals("Name", StringComparison.OrdinalIgnoreCase))
//            {
//                //query = query.Where(w => w.Name.Contains(filterQuery));
//                query = query.Where(w => w.Name.ToUpper().Contains(filterQuery.ToUpper()));
//            }
//        }


//        var workshopsDomain = await _db.Workshops.Include("Sessions").ToListAsync();
//        return workshopsDomain;
//        //throw new NotImplementedException();
//    }

//    public Task<Workshop?> GetByIdAsync(int id)
//    {
//        throw new NotImplementedException();
//    }

//    public Task<Workshop?> UpdateAsync(int id, Workshop workshop)
//    {
//        throw new NotImplementedException();
//    }
//}




using Microsoft.EntityFrameworkCore;
using workshopAPI.Models.Domain;
using workshopsAPI.Data;
using workshopsAPI.Repositories;
//using WorkshopsAPI.Data;
//using WorkshopsAPI.Models.Domain;

namespace WorkshopsAPI.Respositories;

public class SqlWorkshopRepository : IWorkshopRepository
{
    private ApplicationDbContext _db;

    public SqlWorkshopRepository(ApplicationDbContext db)
    {
        _db = db;
    }

    async public Task<List<Workshop>> GetAllAsync(string? filterOn = null, string? filterQuery = null, string? sortBy = null, bool isAscending = true, int pageNumber = 1, int pageSize = 1000, string _embed = "")
    {
        var query = _db.Workshops.AsQueryable();

        // Filtering
        if (!string.IsNullOrWhiteSpace(filterOn) && !string.IsNullOrWhiteSpace(filterQuery))
        {
            if (filterOn.Equals("Name", StringComparison.OrdinalIgnoreCase))
            {
                //query = query.Where(w => w.Name.Contains(filterQuery));
                query = query.Where(w => w.Name.ToUpper().Contains(filterQuery.ToUpper()));
            }
        }

        // Sorting 
        if (!string.IsNullOrWhiteSpace(sortBy))
        {
            if (sortBy.Equals("Name", StringComparison.OrdinalIgnoreCase))
            {
                query = isAscending ? query.OrderBy(w => w.Name) : query.OrderByDescending(w => w.Name);
            }
            //else if (sortBy.Equals("StartDate", StringComparison.OrdinalIgnoreCase))
            //{
            //    query = isAscending ? query.OrderBy(w => w.StartDate) : query.OrderByDescending(x => x.StartDate);
            //}
        }

        // Include Sessions
        if (_embed.Equals("sessions", StringComparison.OrdinalIgnoreCase))
        {
            query = query.Include("Sessions");
        }

        // Pagination
        var skipResults = (pageNumber - 1) * pageSize;
        query = query.Skip(skipResults).Take(pageSize);


        var workshopsDomain = await query.ToListAsync();
        return workshopsDomain;
    }

    public Task<Workshop?> GetByIdAsync(int id)
    {
        throw new NotImplementedException();
    }

    public Task<Workshop> CreateAsync(Workshop workshop)
    {
        throw new NotImplementedException();
    }

    public Task<Workshop?> UpdateAsync(int id, Workshop workshop)
    {
        throw new NotImplementedException();
    }

    public Task<Workshop?> DeleteAsync(int id)
    {
        throw new NotImplementedException();
    }
}
