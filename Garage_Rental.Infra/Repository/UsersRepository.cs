using Dapper;
using Garage_Rental.Core.Common;
using Garage_Rental.Core.Repository;
using Garage_Rental.Core.Data;
using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Text;

namespace Garage_Rental.Infra.Repository
{
    public class UsersRepository : IGenericRepository<User>
    {
        private readonly IDbContext _dbcontext;
        public UsersRepository(IDbContext dbcontext)
        {
            _dbcontext = dbcontext;
        }

        public bool Create(User t)
        {
            var p = new DynamicParameters();

            p.Add("FName", t.FIRST_NAME, dbType: DbType.String, direction: ParameterDirection.Input);
            p.Add("LName", t.LAST_NAME, dbType: DbType.String, direction: ParameterDirection.Input);
            p.Add("U_email", t.Email, dbType: DbType.String, direction: ParameterDirection.Input);
            p.Add("pass", t.Password, dbType: DbType.String, direction: ParameterDirection.Input);
            p.Add("phone", t.Phonenumber, dbType: DbType.Int32, direction: ParameterDirection.Input);
            p.Add("img", t.USER_IMAGE, dbType: DbType.String, direction: ParameterDirection.Input);
            p.Add("U_identity", t.USER_IDENTITY, dbType: DbType.String, direction: ParameterDirection.Input);
            p.Add("role_id", t.ROLES_ID, dbType: DbType.Int32, direction: ParameterDirection.Input);
            p.Add("result", dbType: DbType.Int32, direction: ParameterDirection.Output);
            _dbcontext.Connection.Execute("Users_Package.CREATEUSER", p, commandType: CommandType.StoredProcedure);
            int id = p.Get<int>("result");
            if (id != 0)
            {
                return true;
            }
            else
                return false;
        }

        public void Delete(int id)
        {
            var p = new DynamicParameters();
            p.Add("Id", id, dbType: DbType.Int32, direction: ParameterDirection.Input);
            _dbcontext.Connection.Execute("Users_Package.DeleteUsers", p, commandType: CommandType.StoredProcedure);
        }

        public List<User> GetAll()
        {
            IEnumerable<User> result = _dbcontext.Connection.Query<User>("Users_Package.GETALLUSERS", commandType: CommandType.StoredProcedure);
            return result.ToList();
        }

        public User GetById(int id)
        {
            var p = new DynamicParameters();
            p.Add("Id", id, dbType: DbType.Int32, direction: ParameterDirection.Input);
            IEnumerable<User> result = _dbcontext.Connection.Query<User>("Users_Package.GetUSERById", p, commandType: CommandType.StoredProcedure);
            return result.FirstOrDefault();
        }

        public void Update(User t)
        {
            var p = new DynamicParameters();
            p.Add("ID", t.USER_ID, dbType: DbType.Int32, direction: ParameterDirection.Input);
            p.Add("FName", t.FIRST_NAME, dbType: DbType.String, direction: ParameterDirection.Input);
            p.Add("LName", t.LAST_NAME, dbType: DbType.String, direction: ParameterDirection.Input);
            p.Add("U_email", t.Email, dbType: DbType.String, direction: ParameterDirection.Input);
            p.Add("pass", t.Password, dbType: DbType.String, direction: ParameterDirection.Input);
            p.Add("phone", t.Phonenumber, dbType: DbType.Int32, direction: ParameterDirection.Input);
            p.Add("img", t.USER_IMAGE, dbType: DbType.String, direction: ParameterDirection.Input);
            p.Add("U_identity", t.USER_IDENTITY, dbType: DbType.String, direction: ParameterDirection.Input);
            p.Add("role_id", t.ROLES_ID, dbType: DbType.Int32, direction: ParameterDirection.Input);
            p.Add("result", dbType: DbType.Int32, direction: ParameterDirection.Output);
            _dbcontext.Connection.Execute("Users_Package.UPDATEUSER", p, commandType: CommandType.StoredProcedure);
            
        }
    
    }
}
