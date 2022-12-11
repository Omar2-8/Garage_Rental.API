using Garage_Rental.Core.Data;
using Garage_Rental.Core.DTO;
using Garage_Rental.Core.Service;
using Garage_Rental.Infra.Service;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;

namespace Garage_Rental.API.Controllers
{
    [Route("api/[controller]/[action]")]
    [ApiController]
    public class GeneralController : ControllerBase
    {
        private readonly IGeneralService _GeneralService;
        public GeneralController(IGeneralService GeneralService)
        {
            _GeneralService = GeneralService;
        }

        [HttpPut]
        public void ChangeAmount(ChangeAmount g)
        {
            
            this._GeneralService.ChangeAmount(g);
        }

        [HttpGet]
        [Route("{id}")]
        public List<Car> GetAllCarById(int id)
        {
            return this._GeneralService.GetAllCarById(id);
        }
    }
}
