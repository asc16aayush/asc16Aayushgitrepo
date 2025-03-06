


using AutoMapper;
using workshopAPI.Models.Domain;
using workshopsAPI.Models.Domain;
using workshopsAPI.Models.DTO;

namespace workshopsAPI.Mappings;


public class AutoMapperProfiles : Profile
{
    public AutoMapperProfiles()
    {
        CreateMap<Workshop, WorkshopDto>().ReverseMap();
        CreateMap<Session, SessionDto>().ReverseMap();
        CreateMap<Session ,WorkshopSessionDto>().ReverseMap();
    }
}

