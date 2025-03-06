using AutoMapper;
using Meetings_V2.DTOs;
using Meetings_V2.Models.Domain;
using Meetings_V2.Models.DTO;

namespace Meetings_V2.Mappings
{
    public class AutoMapperProfiles : Profile
    {
        public AutoMapperProfiles()
        {
            // Map between Add and AddDto
            CreateMap<Add, AddDto>().ReverseMap();

            // Map between Users and UsersDto
            CreateMap<Users, UsersDto>().ReverseMap();

            CreateMap<Users, AddUserDto>().ReverseMap();

        }
    }
}
