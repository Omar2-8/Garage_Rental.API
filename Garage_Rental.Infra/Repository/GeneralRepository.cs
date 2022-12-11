using Dapper;
using Garage_Rental.Core.Common;
using Garage_Rental.Core.Data;
using Garage_Rental.Core.DTO;
using Garage_Rental.Core.Repository;
using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Text;

namespace Garage_Rental.Infra.Repository
{
    public class GeneralRepository : IGeneralRepository
    {
        private readonly IDbContext _dbcontext;
        public GeneralRepository(IDbContext dbcontext)
        {
            _dbcontext = dbcontext;
        }
        
         public void ChangeAmount(ChangeAmount g)
        {
            var p = new DynamicParameters();
            
            p.Add("V_NUMBER", g.VISA_NUMBER, dbType: DbType.Decimal, direction: ParameterDirection.Input);
            p.Add("V_AMOUNT", g.VISA_AMOUNT, dbType: DbType.Decimal, direction: ParameterDirection.Input);
            p.Add("result", dbType: DbType.Int32, direction: ParameterDirection.Output);
            _dbcontext.Connection.Execute("VISA_PACKAGE.ChangeAmount", p, commandType: CommandType.StoredProcedure);

        }

        public List<Car> GetAllCarById(int id)
        {
            var p = new DynamicParameters();
            p.Add("Id", id, dbType: DbType.Int32, direction: ParameterDirection.Input);
            IEnumerable<Car> result = _dbcontext.Connection.Query<Car>("Car_Package.GetCarsById", p, commandType: CommandType.StoredProcedure);
            return result.ToList();
        }
    }
}
