using Garage_Rental.Core.Data;
using Garage_Rental.Core.Repository;
using Garage_Rental.Core.Service;
using System;
using System.Collections.Generic;
using System.Text;

namespace Garage_Rental.Infra.Service
{
    public class RentService : IGenericService<Rent>
    {
        private readonly IGenericRepository<Rent> _rentRepository;

        public RentService(IGenericRepository<Rent> RentRepository)
        {
            _rentRepository = RentRepository;
        }

        public bool Create(Rent t)
        {
            return _rentRepository.Create(t);
        }

        public void Delete(int id)
        {
            _rentRepository.Delete(id);
        }

        public List<Rent> GetAll()
        {
            return _rentRepository.GetAll();
        }

        public Rent GetById(int id)
        {
            return _rentRepository.GetById(id);
        }

        public void Update(Rent t)
        {
            _rentRepository.Update(t);
        }
    }
}
