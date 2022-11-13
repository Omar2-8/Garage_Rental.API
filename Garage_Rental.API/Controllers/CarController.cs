using Garage_Rental.Core.Data;
using Garage_Rental.Core.Service;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;

namespace Garage_Rental.API.Controllers
{
    [Route("api/[controller]/[action]")]
    [ApiController]
    public class CarController : ControllerBase
    {
        private readonly IGenericService<Car> _carService;

        public CarController(IGenericService<Car> CarService)
        {
            _carService = CarService;
        }

        [HttpGet]
        public List<Car> GetAll()
        {
            return _carService.GetAll();
        }
        [HttpPost]
        public bool Create(Car car)
        {
            return _carService.Create(car);
        }

        [HttpDelete]
        [Route("/{id}")]
        public void Delete(int id)
        {
            _carService.Delete(id);
        }

        [HttpGet]
        [Route("/{id}")]
        public Car GetById(int id)
        {
            return _carService.GetById(id);
        }
        [HttpPut]
        public void Update(Car car)
        {
            _carService.Update(car);
        }
    }
}
