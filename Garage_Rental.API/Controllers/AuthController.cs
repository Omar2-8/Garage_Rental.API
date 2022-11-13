using Garage_Rental.Core.Data;
using Garage_Rental.Core.Service;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace Garage_Rental.API.Controllers
{
    [Route("api/[controller]/[action]")]
    [ApiController]
    public class AuthController : ControllerBase
    {
        private readonly IAuthService Authservice;
        private readonly IGenericService<User> _usersService;
        public AuthController(IAuthService authservice , IGenericService<User> UsersService)
        {
            this.Authservice = authservice;
           this._usersService = UsersService;
        }

        [HttpPost]
        public IActionResult AuthLogin([FromBody] User login)
        {
            var token = Authservice.AuthLogin(login);
            if (token == null)
            {
                return Unauthorized();
            }
            else
            {
                return Ok(token);
                
            }

        }

        [HttpPost]
        public bool AuthRegister(User user)
        {
            return _usersService.Create(user);
        }


    }
}
