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
    public class RentRepository : IGenericRepository<Rent>
    {
        private readonly IDbContext dBContext;

        public RentRepository(IDbContext dBContext)
        {
            this.dBContext = dBContext;
        }

        public bool Create(Rent t)
        {
            
                var p = new DynamicParameters();
                p.Add("startTimes", t.START_TIME, dbType: DbType.Int32, direction: ParameterDirection.Input);
                p.Add("ENDTimes", t.END_TIME, dbType: DbType.Int32, direction: ParameterDirection.Input);
                p.Add("G_ID", t.GARAGE_ID, dbType: DbType.Int32, direction: ParameterDirection.Input);
                p.Add("U_ID", t.USER_ID, dbType: DbType.Int32, direction: ParameterDirection.Input);
                p.Add("R_date", t.RENT_DATE, dbType: DbType.DateTime, direction: ParameterDirection.Input);
                p.Add("result", dbType: DbType.Int32, direction: ParameterDirection.Output);
                dBContext.Connection.ExecuteAsync("Rent_Package.CreatRent",p, commandType: CommandType.StoredProcedure);
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
            p.Add("Id", id, dbType: DbType.Decimal, direction: ParameterDirection.Input);
            dBContext.Connection.ExecuteAsync("Rent_PACKAGE.DeleteRent",
                p, commandType: CommandType.StoredProcedure);

        }

        public List<Rent> GetAll()
        {
            IEnumerable<Rent> result = dBContext.Connection.Query<Rent>("Rent_PACKAGE.GetAllRent",commandType: CommandType.StoredProcedure);
            return result.ToList();
        }

        public  Rent GetById(int id)
        {
            var p = new DynamicParameters();
            p.Add("Id", id, dbType: DbType.Int32, direction: ParameterDirection.Input);
            IEnumerable<Rent> result = dBContext.Connection.Query<Rent>("Rent_PACKAGE.GetRentById",
                p, commandType: CommandType.StoredProcedure);
            return result.FirstOrDefault();
        }

        public void Update(Rent t)
        {
            var p = new DynamicParameters();
            p.Add("Id", t.RENT_ID, dbType: DbType.Decimal, direction: ParameterDirection.Input);
            p.Add("Start_Time", t.START_TIME, dbType: DbType.Decimal, direction: ParameterDirection.Input);
            p.Add("End_Time", t.END_TIME, dbType: DbType.Decimal, direction: ParameterDirection.Input);
            p.Add("Garage_Id", t.GARAGE_ID, dbType: DbType.Decimal, direction: ParameterDirection.Input);
            p.Add("User_Id", t.USER_ID, dbType: DbType.Decimal, direction: ParameterDirection.Input);
            p.Add("Rent_Date", t.RENT_DATE, dbType: DbType.DateTime, direction: ParameterDirection.Input);
            p.Add("result", dbType: DbType.Int32, direction: ParameterDirection.Output);
             dBContext.Connection.ExecuteAsync("Rent_PACKAGE.UpdateRent",
                p, commandType: CommandType.StoredProcedure);
      
        }
    }
}
