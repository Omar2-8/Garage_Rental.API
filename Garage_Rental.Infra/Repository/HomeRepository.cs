using Dapper;
using Garage_Rental.Core.Common;
using Garage_Rental.Core.Data;
using Garage_Rental.Core.Repository;
using System;
using System.Collections.Generic;
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
            throw new NotImplementedException();
        }

        public Home GetById(int id)
        {
            throw new NotImplementedException();
        }

        public void Update(Home t)
        {
            var p = new DynamicParameters();
            //p.Add("ID", t.USER_ID, dbType: DbType.Int32, direction: ParameterDirection.Input);
            //p.Add("FName", t.FIRST_NAME, dbType: DbType.String, direction: ParameterDirection.Input);
            //p.Add("LName", t.LAST_NAME, dbType: DbType.String, direction: ParameterDirection.Input);
            //p.Add("U_email", t.Email, dbType: DbType.String, direction: ParameterDirection.Input);
            //p.Add("pass", t.Password, dbType: DbType.String, direction: ParameterDirection.Input);
            //p.Add("phone", t.Phonenumber, dbType: DbType.Int32, direction: ParameterDirection.Input);
            //p.Add("img", t.USER_IMAGE, dbType: DbType.String, direction: ParameterDirection.Input);
            //p.Add("U_identity", t.USER_IDENTITY, dbType: DbType.String, direction: ParameterDirection.Input);
            //p.Add("role_id", t.ROLES_ID, dbType: DbType.Int32, direction: ParameterDirection.Input);
            //p.Add("result", dbType: DbType.Int32, direction: ParameterDirection.Output);
            //_dbcontext.Connection.Execute("Users_Package.UPDATEUSER", p, commandType: CommandType.StoredProcedure);
        }
    }
}
