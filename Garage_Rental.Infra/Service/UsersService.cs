using Garage_Rental.Core.Data;
using Garage_Rental.Core.Repository;
using Garage_Rental.Core.Service;
using System;
using System.Collections.Generic;
using System.Text;

namespace Garage_Rental.Infra.Service
{
    public class UsersService : IGenericService<User>
    {
        private readonly IGenericRepository<User> _usersRepository;

        public UsersService(IGenericRepository<User> UsersRepository)
        {
            _usersRepository = UsersRepository;
        }


        public bool Create(User user)
        {
            return _usersRepository.Create(user);
        }

        public void Delete(int id)
        {
             _usersRepository.Delete(id);
        }

        public List<User> GetAll()
        {
            return _usersRepository.GetAll();
        }

        public User GetById(int id)
        {
            return _usersRepository.GetById(id);
        }

        public void Update(User user)
        {
            _usersRepository.Update(user);
        }
    }
}
