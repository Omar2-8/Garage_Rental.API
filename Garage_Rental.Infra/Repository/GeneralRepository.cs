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

        public void ChangeGarageMode(ChangeGarageMode g)
        {
            var p = new DynamicParameters();
            p.Add("G_ID", g.GARAGE_ID, dbType: DbType.Decimal, direction: ParameterDirection.Input);
            p.Add("G_MODE", g.GARAGE_MODE, dbType: DbType.String, direction: ParameterDirection.Input);
            p.Add("result", dbType: DbType.Int32, direction: ParameterDirection.Output);
            _dbcontext.Connection.Execute("GARAGE_PACKAGE.ChangeGarageMode", p, commandType: CommandType.StoredProcedure);
        }
       

        public List<Car> GetAllCarById(int id)
        {
            var p = new DynamicParameters();
            p.Add("Id", id, dbType: DbType.Int32, direction: ParameterDirection.Input);
            IEnumerable<Car> result = _dbcontext.Connection.Query<Car>("Car_Package.GetCarsById", p, commandType: CommandType.StoredProcedure);
            return result.ToList();
        }

        public List<Rent> GetAllRentById(int id)
        {
            var p = new DynamicParameters();
            p.Add("Id", id, dbType: DbType.Int32, direction: ParameterDirection.Input);
            IEnumerable<Rent> result = _dbcontext.Connection.Query<Rent>("Rent_PACKAGE.GetRentById",
                p, commandType: CommandType.StoredProcedure);
            return result.ToList();
        }
        
    }
}
