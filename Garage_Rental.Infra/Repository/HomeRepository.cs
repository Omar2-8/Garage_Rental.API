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
    public class HomeRepository : IGenericRepository<Home>
    {
        private readonly IDbContext _dbcontext;
        public HomeRepository(IDbContext dbcontext)
        {
            _dbcontext = dbcontext;
        }

        public bool Create(Home t)
        {
            throw new NotImplementedException();
        }

        public void Delete(int id)
        {
            throw new NotImplementedException();
        }

        public List<Home> GetAll()
        {
            IEnumerable<Home> result = _dbcontext.Connection.Query<Home>("HOME_Package.DETAILS", commandType: CommandType.StoredProcedure);
            return result.ToList();
        }

        public Home GetById(int id)
        {
            throw new NotImplementedException();
        }

        public void Update(Home t)
        {
            var p = new DynamicParameters();
            p.Add("H_ID", t.Id, dbType: DbType.Decimal, direction: ParameterDirection.Input);
            p.Add("IMG1", t.IMAGE_1, dbType: DbType.String, direction: ParameterDirection.Input);
            p.Add("H_Title1", t.TITLE_1, dbType: DbType.String, direction: ParameterDirection.Input);
            p.Add("IMG2", t.IMAGE_2, dbType: DbType.String, direction: ParameterDirection.Input);
            p.Add("H_Title2", t.TITLE_2, dbType: DbType.String, direction: ParameterDirection.Input);
            p.Add("IMG3", t.IMAGE_3, dbType: DbType.String, direction: ParameterDirection.Input);
            p.Add("H_Title3", t.TITLE_3, dbType: DbType.String, direction: ParameterDirection.Input);
            p.Add("result", dbType: DbType.Int32, direction: ParameterDirection.Output);
            _dbcontext.Connection.Execute("HOME_Package.UPDATEHOME", p, commandType: CommandType.StoredProcedure);
        }
    }
}
