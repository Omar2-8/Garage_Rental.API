using Dapper;
using Garage_Rental.Core.Common;
using Garage_Rental.Core.Data;
using Garage_Rental.Core.Repository;
using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
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
            var p = new DynamicParameters();
            p.Add("ID", id, dbType: DbType.Decimal, direction: ParameterDirection.Input);
            var result = _dbcontext.Connection.ExecuteAsync("Visa_Package.DeleteVisa", p, commandType: CommandType.StoredProcedure);
        }

        public List<Visa> GetAll()
        {
            IEnumerable<Visa> result = _dbcontext.Connection.Query<Visa>("Visa_Package.GetAllVisa",
                                                          commandType: CommandType.StoredProcedure);
            return result.ToList();
        }

        public Visa GetById(int id)
        {
            var p = new DynamicParameters();
            p.Add("Id", id, dbType: DbType.Int32, direction: ParameterDirection.Input);
            IEnumerable<Visa> result = _dbcontext.Connection.Query<Visa>("Visa_Package.GetVisaById", p, commandType: CommandType.StoredProcedure);
            return result.FirstOrDefault();
        }

        public void Update(Visa t)
        {
            throw new NotImplementedException();
        }
    }
}
