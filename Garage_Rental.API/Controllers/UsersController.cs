using Garage_Rental.Core.Data;
using Garage_Rental.Core.Service;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.IO;

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
        [Route("{id}")]
        public void Delete(int id)
        {
            _usersService.Delete(id);
        }

        [HttpGet]
        [Route("{id}")]
        public User GetById(int id)
        {
            return _usersService.GetById(id);
        }
        [HttpPut]
        public void Update(User user)
        {
            _usersService.Update(user);
        }

  
        [HttpPost]
        public User UploadIMage()
        {
            var file = Request.Form.Files[0];
            var fileName = Guid.NewGuid().ToString() + "_" + file.FileName;
            var fullPath = Path.Combine("Images", fileName);
            using (var stream = new FileStream(fullPath, FileMode.Create))
            {
                file.CopyTo(stream);
            }
            User item = new User();
            item.USER_IMAGE = fileName;
            
            return item;
        }
    }
}
