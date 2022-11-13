using Garage_Rental.Core.Data;
using Garage_Rental.Core.Service;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;

namespace Garage_Rental.API.Controllers
{
    [Route("api/[controller]/[action]")]
    [ApiController]
    public class AboutUController : ControllerBase
    {
        private readonly IGenericService<AboutU> _AboutUService;

        public AboutUController(IGenericService<AboutU> AboutUService)
        {
            _AboutUService = AboutUService;
        }

        [HttpGet]
        public List<AboutU> GetAll()
        {
            return _AboutUService.GetAll();
        }

        [HttpPost]
        public bool Create(AboutU AboutU)
        {
            return _AboutUService.Create(AboutU);
        }

        [HttpDelete]
        [Route("/{id}")]
        public void Delete(int id)
        {
            _AboutUService.Delete(id);
        }

        [HttpGet]
        [Route("/{id}")]

        public AboutU GetById(int id)
        {
            return _AboutUService.GetById(id);
        }
        [HttpPut]
        public void Update(AboutU AboutU)
        {
            _AboutUService.Update(AboutU);
        }

    }
}
