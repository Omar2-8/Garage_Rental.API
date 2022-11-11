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
    public class RoleRepository : IGenericRepository<Role>
    {
        private readonly IDbContext dBContext;

        public RoleRepository(IDbContext dBContext)
        {
            this.dBContext = dBContext;
        }

        public bool Create(Role t)
        {
            try
            {
                var p = new DynamicParameters();
            p.Add("Role_Name", t.ROLE_NAME, dbType: DbType.String, direction: ParameterDirection.Input);
            var result = dBContext.Connection.ExecuteAsync("stdcourse_Package.CreateRole",
                p, commandType: CommandType.StoredProcedure);
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
            p.Add("Role_Id", id, dbType: DbType.Decimal, direction: ParameterDirection.Input);
            var result = dBContext.Connection.ExecuteAsync("stdcourse_Package.DeleteRole",
                p, commandType: CommandType.StoredProcedure);
        }

        public List<Role> GetAll()
        {
            IEnumerable<Role> result = dBContext.Connection.Query<Role>("stdcourse_Package.GetAllRole",
                                                            commandType: CommandType.StoredProcedure);
            return result.ToList();
        }

        public Role GetById(int id)
        {
            var p = new DynamicParameters();
            p.Add("Role_Id", id, dbType: DbType.Int32, direction: ParameterDirection.Input);
            IEnumerable<Role> result = dBContext.Connection.Query<Role>("stdcourse_Package.GetRoleById",
                p, commandType: CommandType.StoredProcedure);
            return result.FirstOrDefault();
        }

        public void Update(Role t)
        {
            var p = new DynamicParameters();
            p.Add("Role_Id", t.ROLE_NAME, dbType: DbType.Decimal, direction: ParameterDirection.Input);
            p.Add("Role_Name", t.ROLE_NAME, dbType: DbType.String, direction: ParameterDirection.Input);
            var result = dBContext.Connection.ExecuteAsync("stdcourse_Package.UpdateRole",
                p, commandType: CommandType.StoredProcedure);

        }
    }
}
