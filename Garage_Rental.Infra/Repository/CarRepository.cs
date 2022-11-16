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
    public class CarRepository :IGenericRepository<Car>
    {
        private readonly IDbContext _dbcontext;
        public CarRepository(IDbContext dbcontext)
        {
            _dbcontext = dbcontext;
        }

        public bool Create(Car t)
        {
            var p = new DynamicParameters();
            p.Add("CAR_TYPE", t.CAR_TYPE, dbType: DbType.String, direction: ParameterDirection.Input);
            p.Add("CAR_PLATE", t.CAR_PLATE, dbType: DbType.String, direction: ParameterDirection.Input);
            p.Add("User_Id", t.USER_ID, dbType: DbType.Int32, direction: ParameterDirection.Input);
            p.Add("result", dbType: DbType.Int32, direction: ParameterDirection.Output);
            _dbcontext.Connection.Execute("Car_Package.CreateCar", p, commandType: CommandType.StoredProcedure);
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
            p.Add("ID", id, dbType: DbType.Int32, direction: ParameterDirection.Input);
            _dbcontext.Connection.Execute("Car_Package.DeleteCar", p, commandType: CommandType.StoredProcedure);
        }

        public List<Car> GetAll()
        {
            throw new NotImplementedException();
        }
    

        public Car GetById(int id)
        {
            var p = new DynamicParameters();
            p.Add("Id", id, dbType: DbType.Int32, direction: ParameterDirection.Input);
            IEnumerable<Car> result = _dbcontext.Connection.Query<Car>("Car_Package.GetCarsById", p, commandType: CommandType.StoredProcedure);
            return result.FirstOrDefault();
        }

        public void Update(Car t)
        {
            var p = new DynamicParameters();
            p.Add("ID", t.CAR_ID, dbType: DbType.Int32, direction: ParameterDirection.Input);
            p.Add("CAR_TYPE", t.CAR_TYPE, dbType: DbType.String, direction: ParameterDirection.Input);
            p.Add("CAR_PLATE", t.CAR_PLATE, dbType: DbType.String, direction: ParameterDirection.Input);
            p.Add("User_Id", t.USER_ID, dbType: DbType.Int32, direction: ParameterDirection.Input);
            p.Add("result", dbType: DbType.Int32, direction: ParameterDirection.Output);
            _dbcontext.Connection.Execute("Car_Package.CreateCar", p, commandType: CommandType.StoredProcedure);
        }
    }
}
