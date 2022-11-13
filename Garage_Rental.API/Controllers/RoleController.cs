using Garage_Rental.Core.Data;
using Garage_Rental.Core.Service;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
namespace Garage_Rental.API.Controllers
{
    [Route("api/[controller]/[action]")]
    [ApiController]
    public class RoleController : ControllerBase
    {
        private readonly IGenericService<Role> _roleService;

        public RoleController(IGenericService<Role> RoleService)
        {
            _roleService = RoleService;
        }


        [HttpGet]
        public List<Role> GetAll()
        {
            return _roleService.GetAll();
        }

        [HttpPost]
        public bool Create(Role role)
        {
            return _roleService.Create(role);
        }

        [HttpDelete]
        [Route("/{id}")]
        public void Delete(int id)
        {
            _roleService.Delete(id);
        }

        [HttpGet]
        [Route("/{id}")]
        public Role GetById(int id)
        {
            return _roleService.GetById(id);
        }
        [HttpPut]
        public void Update(Role role)
        {
            _roleService.Update(role);
        }

    }
}
