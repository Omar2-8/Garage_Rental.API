using Garage_Rental.Core.Common;
using Garage_Rental.Core.Data;
using Garage_Rental.Core.Repository;
using System;
using System.Collections.Generic;
using System.Text;

namespace Garage_Rental.Infra.Repository
{
    public class VisaRepository : IGenericRepository<Visa>
    {
        private readonly IDbContext _dbcontext;
        public VisaRepository(IDbContext dbcontext)
        {
            _dbcontext = dbcontext;
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
