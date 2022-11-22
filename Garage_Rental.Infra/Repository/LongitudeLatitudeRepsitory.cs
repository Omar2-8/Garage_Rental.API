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
        
    }
}
