using Garage_Rental.Core.Data;
using Garage_Rental.Core.Repository;
using Garage_Rental.Core.Service;
using System;
using System.Collections.Generic;
using System.Text;

namespace Garage_Rental.Infra.Service
{
    public class VisaService :IGenericService<Visa>
    {
        private readonly IGenericRepository<Visa> _visaRepository;

        public VisaService(IGenericRepository<Visa> VisaRepository)
        {
            _visaRepository = VisaRepository;
        }

        public bool Create(Visa t)
        {
            throw new NotImplementedException();
        }

        public void Delete(int id)
        {
            _visaRepository.Delete(id);
        }

        public List<Visa> GetAll()
        {
            return _visaRepository.GetAll();
        }

        public Visa GetById(int id)
        {
            return _visaRepository.GetById(id);
        }

        public void Update(Visa t)
        {
            throw new NotImplementedException();
        }
    }
}
