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
            try
            {
                var p = new DynamicParameters();
                p.Add("Start_Time", t.StartTime, dbType: DbType.Decimal, direction: ParameterDirection.Input);
                p.Add("End_Time", t.EndTime, dbType: DbType.Decimal, direction: ParameterDirection.Input);
                p.Add("Garage_Id", t.GarageId, dbType: DbType.Decimal, direction: ParameterDirection.Input);
                p.Add("User_Id", t.UserId, dbType: DbType.Decimal, direction: ParameterDirection.Input);
                p.Add("Rent_Date", t.RentDate, dbType: DbType.DateTime, direction: ParameterDirection.Input);
                
                var result = dBContext.Connection.ExecuteAsync("Rent_Package.CreatRent",
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
            p.Add("Rent_Id", id, dbType: DbType.Decimal, direction: ParameterDirection.Input);
            var result = dBContext.Connection.ExecuteAsync("stdcourse_Package.DeleteRent",
                p, commandType: CommandType.StoredProcedure);

        }

        public List<Rent> GetAll()
        {
            IEnumerable<Rent> result = dBContext.Connection.Query<Rent>("stdcourse_Package.GetAllRent",
                                                            commandType: CommandType.StoredProcedure);
            return result.ToList();
        }

        public Rent GetById(int id)
        {
            var p = new DynamicParameters();
            p.Add("Payment_Id", id, dbType: DbType.Int32, direction: ParameterDirection.Input);
            IEnumerable<Rent> result = dBContext.Connection.Query<Rent>("stdcourse_Package.GetRentById",
                p, commandType: CommandType.StoredProcedure);
            return result.FirstOrDefault();
        }

        public void Update(Rent t)
        {
            var p = new DynamicParameters();
            p.Add("Rent_Id", t.RentId, dbType: DbType.Decimal, direction: ParameterDirection.Input);
            p.Add("Start_Time", t.StartTime, dbType: DbType.Decimal, direction: ParameterDirection.Input);
            p.Add("End_Time", t.EndTime, dbType: DbType.Decimal, direction: ParameterDirection.Input);
            p.Add("Garage_Id", t.GarageId, dbType: DbType.Decimal, direction: ParameterDirection.Input);
            p.Add("User_Id", t.UserId, dbType: DbType.Decimal, direction: ParameterDirection.Input);
            p.Add("Rent_Date", t.RentDate, dbType: DbType.DateTime, direction: ParameterDirection.Input);

            var result = dBContext.Connection.ExecuteAsync("stdcourse_Package.UpdateRent",
                p, commandType: CommandType.StoredProcedure);
      
        }
    }
}
