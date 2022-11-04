using Garage_Rental.Core.Data;
using Garage_Rental.Core.Service;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;

namespace Garage_Rental.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class GarageController : ControllerBase
    {
        private readonly IGenericService<Garage> _garageService;

        public GarageController(IGenericService<Garage> GarageService)
        {
            _garageService = GarageService;
        }

        [HttpGet]
        public List<Garage> GetAll()
        {
            return _garageService.GetAll();
        }
        [HttpPost]
        public bool Create(Garage garage)
        {
            return _garageService.Create(garage);
        }

        [HttpDelete]
        [Route("Delete/{id}")]
        public void Delete(int id)
        {
            _garageService.Delete(id);
        }

        [HttpGet]
        [Route("GetById/{id}")]
        public Garage GetById(int id)
        {
            return _garageService.GetById(id);
        }
        [HttpPut]
        public void Update(Garage garage)
        {
            _garageService.Update(garage);
        }
    }
}
