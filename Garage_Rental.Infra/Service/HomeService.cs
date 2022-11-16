using Garage_Rental.Core.Data;
using Garage_Rental.Core.Repository;
using Garage_Rental.Core.Service;
using System;
using System.Collections.Generic;
using System.Text;

namespace Garage_Rental.Infra.Service
{
    public class HomeService : IGenericService<Home>
    {
        private readonly IGenericRepository<Home> _homeRepository;

        public HomeService(IGenericRepository<Home> HomeRepository)
        {
            _homeRepository = HomeRepository;
        }

        public bool Create(Home t)
        {
            throw new NotImplementedException();
        }

        public void Delete(int id)
        {
            throw new NotImplementedException();
        }

        public List<Home> GetAll()
        {
            return _homeRepository.GetAll();
        }

        public Home GetById(int id)
        {
            throw new NotImplementedException();
        }

        public void Update(Home t)
        {
            _homeRepository.Update(t);
        }
    }
}
