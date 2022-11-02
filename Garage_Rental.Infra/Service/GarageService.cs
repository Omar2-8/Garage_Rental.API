using Garage_Rental.Core.Data;
using Garage_Rental.Core.Repository;
using Garage_Rental.Core.Service;
using System;
using System.Collections.Generic;
using System.Text;

namespace Garage_Rental.Infra.Service
{
    internal class GarageService : IGenericService<Garage>
    {
        private readonly IGenericRepository<Garage> _garageRepository;

        public GarageService(IGenericRepository<Garage> GarageRepository)
        {
            _garageRepository = GarageRepository;
        }


        public bool Create(Garage garage)
        {
            return _garageRepository.Create(garage);
        }

        public void Delete(int id)
        {
            _garageRepository.Delete(id);
        }

        public List<Garage> GetAll()
        {
            return _garageRepository.GetAll();
        }

        public Garage GetById(int id)
        {
            return _garageRepository.GetById(id);
        }

        public void Update(Garage garage)
        {
            _garageRepository.Update(garage);
        }
    }
}
