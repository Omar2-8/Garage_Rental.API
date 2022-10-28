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

            p.Add("FIRST_NAME", t.FirstName, dbType: DbType.String, direction: ParameterDirection.Input);
            p.Add("LAST_NAME", t.LastName, dbType: DbType.String, direction: ParameterDirection.Input);
            p.Add("Email", t.Email, dbType: DbType.String, direction: ParameterDirection.Input);
            p.Add("Password", t.Password, dbType: DbType.String, direction: ParameterDirection.Input);
            p.Add("Phonenumber", t.Phonenumber, dbType: DbType.Int32, direction: ParameterDirection.Input);
            p.Add("UserImage", t.UserImage, dbType: DbType.String, direction: ParameterDirection.Input);
            p.Add("result", dbType: DbType.Int32, direction: ParameterDirection.Output);
            _dbcontext.Connection.Execute("COURSE_PACKAGE.CREATECOURSES", p, commandType: CommandType.StoredProcedure);
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
            throw new NotImplementedException();
        }

        public List<User> GetAll()
        {
            throw new NotImplementedException();
        }

        public User GetById(int id)
        {
            throw new NotImplementedException();
        }

        public void Update(User t)
        {
            throw new NotImplementedException();
        }
    }
}
