using Garage_Rental.Core.Data;
using Garage_Rental.Core.DTO;
using Garage_Rental.Core.Service;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;

namespace Garage_Rental.API.Controllers
{
    [Route("api/[controller]/[action]")]
    [ApiController]
    public class LongLetGragesController : ControllerBase
    {
        private readonly ILongitudeLatitudeService _LongitudeLatitudeService;

        public LongLetGragesController(ILongitudeLatitudeService LongitudeLatitudeService)
        {
            _LongitudeLatitudeService = LongitudeLatitudeService;
        }

        [HttpGet]
        public List<LongLetGarages> GetLongitudeLatitude()
        {
            return _LongitudeLatitudeService.GetLongitudeLatitude();
        }
        [HttpGet]
        [Route("{id}")]
        public List<LongLetGarages> GetLongitudeLatitudeByID(int id)
        {
            return this._LongitudeLatitudeService.GetLongitudeLatitudeByID(id);
        }
        [HttpPut]
        public void ChangeGragaeStatus(Garagestatus g)
        {
            _LongitudeLatitudeService.ChangeGragaeStatus(g);
        }
    }
}
