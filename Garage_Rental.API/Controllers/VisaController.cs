using Garage_Rental.Core.Data;
using Garage_Rental.Core.Service;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;

namespace Garage_Rental.API.Controllers
{
    [Route("api/[controller]/[action]")]
    [ApiController]
    public class VisaController : ControllerBase
    {
        private readonly IGenericService<Visa> _visaService;

        public VisaController(IGenericService<Visa> VisaService)
        {
            _visaService = VisaService;
        }

        [HttpGet]
        public List<Visa> GetAll()
        {
            return _visaService.GetAll();
        }

        [HttpPost]
        public bool Create(Visa visa)
        {
            return _visaService.Create(visa);
        }

        [HttpDelete]
        [Route("{id}")]
        public void Delete(int id)
        {
            _visaService.Delete(id);
        }

        [HttpGet]
        [Route("{id}")]
        public Visa GetById(int id)
        {
            return _visaService.GetById(id);
        }

    }
}
