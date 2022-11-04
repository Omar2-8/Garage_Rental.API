using Garage_Rental.Core.Data;
using Garage_Rental.Core.Service;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;

namespace Garage_Rental.API.Controllers
{
    [Route("api/[controller]/[action]")]
    [ApiController]
    public class UsersController : ControllerBase
    {
        private readonly IGenericService<User> _usersService;

        public UsersController(IGenericService<User> UsersService)
        {
            _usersService = UsersService;
        }

        [HttpGet]
        public List<User> GetAll()
        {
            return _usersService.GetAll();
        }
        [HttpPost]
        public bool Create(User user)
        {
            return _usersService.Create(user);
        }

        [HttpDelete]
        //[Route("Delete/{id}")]
        public void Delete(int id)
        {
            _usersService.Delete(id);
        }

        [HttpGet]
       // [Route("GetById/{id}")]
        public User GetById(int id)
        {
            return _usersService.GetById(id);
        }
        [HttpPut]
        public void Update(User user)
        {
            _usersService.Update(user);
        }

    }
}
