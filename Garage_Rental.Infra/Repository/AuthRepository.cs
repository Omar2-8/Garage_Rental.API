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
    public class AuthRepository: IAuthRepository
    {
        private readonly IDbContext _dbcontext;
        public AuthRepository(IDbContext dbcontext)
        {
            _dbcontext = dbcontext;
        }


        public User AuthLogin(User login)
        {
            var p = new DynamicParameters();
            p.Add("UEmail", login.Email, dbType: DbType.String, direction: ParameterDirection.Input);
            p.Add("PASS", login.Password, dbType: DbType.String, direction: ParameterDirection.Input);
            IEnumerable<User> result = _dbcontext.Connection.Query<User>("LOGIN_PACKAGE.UserLogin", p, commandType: CommandType.StoredProcedure);
            return result.FirstOrDefault();
        }

        public bool AuthRegister(User register)
        {
            throw new NotImplementedException();
        }

       
        
    }
}
