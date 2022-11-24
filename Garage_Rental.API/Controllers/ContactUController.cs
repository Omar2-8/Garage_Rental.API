using Garage_Rental.Core.Data;
using Garage_Rental.Core.Service;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;

namespace Garage_Rental.API.Controllers
{
    [Route("api/[controller]/[action]")]
    [ApiController]
    public class ContactUController : ControllerBase
    {

        private readonly IGenericService<ContactU> _ContactUService;

        public ContactUController(IGenericService<ContactU> ContactUService)
        {
            _ContactUService = ContactUService;
        }
        [HttpGet]
        public List<ContactU> GetAll()
        {
            return _ContactUService.GetAll();
        }

        [HttpPost]
        public bool Create(ContactU ContactU)
        {
            return _ContactUService.Create(ContactU);
        }

        [HttpDelete]
<<<<<<< HEAD
        [Route("{id}")]
=======
        
>>>>>>> 633fe6da4ba24189e9ba56f981224860447d785e
        public void Delete(int id)
        {
            _ContactUService.Delete(id);
        }

     

      
        
    }
}
