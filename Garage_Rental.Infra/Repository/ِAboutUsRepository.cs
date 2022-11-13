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
            p.Add("User_Id", t.Id, dbType: DbType.Decimal, direction: ParameterDirection.Input);
            p.Add("U_Name", t.Name, dbType: DbType.Decimal, direction: ParameterDirection.Input);
            p.Add("U_Email", t.Email, dbType: DbType.String, direction: ParameterDirection.Input);
            p.Add("Msg", t.Message, dbType: DbType.DateTime, direction: ParameterDirection.Input);
            p.Add("Phone", t.PHONE_NUMBER, dbType: DbType.Decimal, direction: ParameterDirection.Input);
            p.Add("U_Address", t.Address, dbType: DbType.Decimal, direction: ParameterDirection.Input);
          

            var result = dBContext.Connection.ExecuteAsync("ABOUT_PACKAGE.UPDATEABOUT", p, commandType: CommandType.StoredProcedure);



        }
    }
}
