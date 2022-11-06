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
    public class AboutUsRepository : IGenericRepository<AboutU>
    {
        private readonly IDbContext dBContext;

        public AboutUsRepository(IDbContext dBContext)
        {
            this.dBContext = dBContext;
        }
  
public bool Create(AboutU t)
        {
            throw new NotImplementedException();
        }

        public void Delete(int id)
        {
            throw new NotImplementedException();
        }

        public List<AboutU> GetAll()
        {
            IEnumerable<AboutU> result = dBContext.Connection.Query<AboutU>("ABOUT_PACKAGE.GETALLABOUT",
                                                            commandType: CommandType.StoredProcedure);
            return result.ToList();
        }

        public AboutU GetById(int id)
        {
            throw new NotImplementedException();
        }

        public void Update(AboutU t)
        {

            var p = new DynamicParameters();
            p.Add("ID", t.Id, dbType: DbType.Decimal, direction: ParameterDirection.Input);
            p.Add("NAME", t.Name, dbType: DbType.Decimal, direction: ParameterDirection.Input);
            p.Add("EMAIL", t.Email, dbType: DbType.String, direction: ParameterDirection.Input);
            p.Add("MESSAGE", t.Message, dbType: DbType.DateTime, direction: ParameterDirection.Input);
            p.Add("PHONE_NUMBER", t.PhoneNumber, dbType: DbType.Decimal, direction: ParameterDirection.Input);
            p.Add("ADDRESS", t.Address, dbType: DbType.Decimal, direction: ParameterDirection.Input);
          

            var result = dBContext.Connection.ExecuteAsync("ABOUT_PACKAGE.UPDATEABOUT", p, commandType: CommandType.StoredProcedure);



        }
    }
}
