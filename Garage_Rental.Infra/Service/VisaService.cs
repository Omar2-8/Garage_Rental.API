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
            throw new NotImplementedException();
        }

        public List<Visa> GetAll()
        {
            throw new NotImplementedException();
        }

        public Visa GetById(int id)
        {
            throw new NotImplementedException();
        }

        public void Update(Visa t)
        {
            throw new NotImplementedException();
        }
    }
}
