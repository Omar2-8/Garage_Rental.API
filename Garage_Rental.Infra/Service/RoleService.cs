using Garage_Rental.Core.Data;
using Garage_Rental.Core.Repository;
using Garage_Rental.Core.Service;
using System;
using System.Collections.Generic;
using System.Text;


namespace Garage_Rental.Infra.Service
{
    public class RoleService : IGenericService<Role>
    {
        private readonly IGenericRepository<Role> _roleRepository;

        public RoleService(IGenericRepository<Role> RoleRepository)
        {
            _roleRepository = RoleRepository;
        }

        public bool Create(Role t)
        {
            return _roleRepository.Create(t);
        }

        public void Delete(int id)
        {
            _roleRepository.Delete(id);
        }

        public List<Role> GetAll()
        {
            return _roleRepository.GetAll();
        }

        public Role GetById(int id)
        {
            return _roleRepository.GetById(id);
        }

        public void Update(Role t)
        {
            _roleRepository.Update(t);
        }
    }
}
