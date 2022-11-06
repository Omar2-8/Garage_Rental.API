using Garage_Rental.Core.Data;
using Garage_Rental.Core.Service;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;

namespace Garage_Rental.API.Controllers
{
     [Route("api/[controller]/[action]")]
    [ApiController]
    public class TestimonialController : ControllerBase
    {
        private readonly IGenericService<Testimonial> _TestimonialService;

        public TestimonialController(IGenericService<Testimonial> TestimonialService)
        {
            _TestimonialService = TestimonialService;
        }


        [HttpGet]
        public List<Testimonial> GetAll()
        {
            return _TestimonialService.GetAll();
        }

        [HttpDelete]
        public void Delete(int id)
        {
            _TestimonialService.Delete(id);
        }

        [HttpPost]
        public bool Create(Testimonial Testimonial)
        {
            return _TestimonialService.Create(Testimonial);
        }


        [HttpPut]
        public void Update(Testimonial Testimonial)
        {
            _TestimonialService.Update(Testimonial);
        }

    }
}
