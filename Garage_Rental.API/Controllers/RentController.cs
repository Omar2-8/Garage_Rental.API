using Garage_Rental.Core.Data;
using Garage_Rental.Core.Service;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.Linq;

namespace Garage_Rental.API.Controllers
{
    [Route("api/[controller]/[action]")]
    [ApiController]
    public class RentController : ControllerBase
    {
        private readonly ModelContext _context;
        private readonly IGenericService<Rent> _rentService;

        public RentController(IGenericService<Rent> RentService, ModelContext context)
        {
            _rentService = RentService;
            _context = context;
        }


        [HttpGet]
        public List<Rent> GetAll()
        {
            return _rentService.GetAll();
        }

        [HttpPost]
        public bool Create(Rent rent)
        {
            //Payment payment = new Payment();
            //var visa = _context.Visas.Include(r => r.Payments).Where(r => r.VISA_ID ==  && r.).FirstOrDefaultAsync();

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
