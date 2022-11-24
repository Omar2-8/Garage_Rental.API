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
    public class ContactUsRepository : IGenericRepository<ContactU>
    {
        private readonly IDbContext dBContext;

        public ContactUsRepository(IDbContext dBContext)
        {
            this.dBContext = dBContext;
        }

        public bool Create(ContactU t)
        {
            try
            {
                var p = new DynamicParameters();
      
                p.Add("UName", t.Name, dbType: DbType.String, direction: ParameterDirection.Input);
                p.Add("UEmail", t.Email, dbType: DbType.String, direction: ParameterDirection.Input);
                p.Add("Msg", t.Message, dbType: DbType.String, direction: ParameterDirection.Input);
                p.Add("Phone", t.PHONE_NUMBER, dbType: DbType.Int32, direction: ParameterDirection.Input);
                p.Add("result", dbType: DbType.Int32, direction: ParameterDirection.Output);

                var result = dBContext.Connection.ExecuteAsync("Contact_PACKAGE.CreateContact", p, commandType: CommandType.StoredProcedure);
                return true;
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }

        public void Delete(int id)
        {
            var p = new DynamicParameters();
            p.Add("U_id", id, dbType: DbType.Decimal, direction: ParameterDirection.Input);
            var result = dBContext.Connection.ExecuteAsync("Contact_PACKAGE.DeleteContact", p, commandType: CommandType.StoredProcedure);
        }

        public List<ContactU> GetAll()
        {
            IEnumerable<ContactU> result = dBContext.Connection.Query<ContactU>("Contact_PACKAGE.GETALLContact",
                                                               commandType: CommandType.StoredProcedure);
            return result.ToList();
        }

        public ContactU GetById(int id)
        {
            throw new NotImplementedException();
        }

        public void Update(ContactU t)
        {
            throw new NotImplementedException();
        }
    }
}
