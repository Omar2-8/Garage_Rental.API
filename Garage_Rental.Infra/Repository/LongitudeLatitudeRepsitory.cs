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
    public class LongitudeLatitudeRepsitory : ILongitudeLatitudeRepsitory
    {
        private readonly IDbContext _dbcontext;
        public LongitudeLatitudeRepsitory(IDbContext dbcontext)
        {
            _dbcontext = dbcontext;
        }

        public List<LongLetGarages> GetLongitudeLatitude()
        {
            IEnumerable<LongLetGarages> result = _dbcontext.Connection.Query<LongLetGarages>("GARAGE_PACKAGE.GETLONGITUDELATITUDE", commandType: CommandType.StoredProcedure);
            return result.ToList();
        }

        public List<LongLetGarages> GetLongitudeLatitudeByID(int id)
        {
            var p = new DynamicParameters();
            p.Add("Id", id, dbType: DbType.Int32, direction: ParameterDirection.Input);
            IEnumerable<LongLetGarages> result = _dbcontext.Connection.Query<LongLetGarages>("GARAGE_PACKAGE.GetLongitudeLatitudeByID", p, commandType: CommandType.StoredProcedure);
            return result.ToList();
        }

        public void ChangeGragaeStatus(Garagestatus g)
        {
            var p = new DynamicParameters();
            p.Add("G_ID", g.GARAGE_ID, dbType: DbType.Decimal, direction: ParameterDirection.Input);
            p.Add("G_STATUS", g.Status, dbType: DbType.String, direction: ParameterDirection.Input);
            p.Add("result", dbType: DbType.Int32, direction: ParameterDirection.Output);
            _dbcontext.Connection.Execute("GARAGE_PACKAGE.ChangeGarageStatus", p, commandType: CommandType.StoredProcedure);
            

        }

        public List<Garage> GetByIdList(int id)
        {
            var p = new DynamicParameters();
            p.Add("ID", id, dbType: DbType.Int32, direction: ParameterDirection.Input);
            IEnumerable<Garage> result = _dbcontext.Connection.Query<Garage>("GARAGE_PACKAGE.GetGARAGESById", p, commandType: CommandType.StoredProcedure);
            return result.ToList();
        }
    }
}
