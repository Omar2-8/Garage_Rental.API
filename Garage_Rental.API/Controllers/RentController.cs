using Garage_Rental.Core.Data;
using Garage_Rental.Core.Service;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
namespace Garage_Rental.API.Controllers
{
    [Route("api/[controller]/[action]")]
    [ApiController]
    public class RentController : ControllerBase
    {
        private readonly IGenericService<Rent> _rentService;

        public RentController(IGenericService<Rent> RentService)
        {
            _rentService = RentService;
        }


        [HttpGet]
        public List<Rent> GetAll()
        {
            return _rentService.GetAll();
        }

        [HttpPost]
        public bool Create(Rent rent)
        {
            return _rentService.Create(rent);
        }

        [HttpDelete]
        [Route("{id}")]
        public void Delete(int id)
        {
            _rentService.Delete(id);
        }

        [HttpGet]
        [Route("{id}")]
        public Rent GetById(int id)
        {
            return _rentService.GetById(id);
        }
        [HttpPut]
        public void Update(Rent rent)
        {
            _rentService.Update(rent);
        }
    }
}
