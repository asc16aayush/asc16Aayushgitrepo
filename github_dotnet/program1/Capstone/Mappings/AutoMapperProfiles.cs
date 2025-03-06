using AutoMapper;
using Capstone.Models.Domain;
using Capstone.Models.DTO;

namespace Capstone.Mappings;

public class AutoMapperProfiles : Profile
{
    public AutoMapperProfiles()
    {
        CreateMap<Meeting, MeetingsDto>().ReverseMap();
        CreateMap<User, UsersDto>().ReverseMap();



    }
}
