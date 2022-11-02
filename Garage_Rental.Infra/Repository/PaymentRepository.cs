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
    internal class PaymentRepository : IGenericRepository<Payment>
    {
        private readonly IDbContext dBContext;

        public PaymentRepository(IDbContext dBContext)
        {
            this.dBContext = dBContext;
        }

        public bool Create(Payment t)
        {
            try
            {
                var p = new DynamicParameters();
                p.Add("Pay_Amount", t.PayAmount, dbType: DbType.Decimal, direction: ParameterDirection.Input);
                p.Add("Garagee_Name", t.GarageName, dbType: DbType.String, direction: ParameterDirection.Input);
                p.Add("Pay_Date", t.PayDate, dbType: DbType.DateTime, direction: ParameterDirection.Input);
                p.Add("Commission_Rate", t.CommissionRate, dbType: DbType.Decimal, direction: ParameterDirection.Input);
                p.Add("User_Id", t.UserId, dbType: DbType.Decimal, direction: ParameterDirection.Input);
                p.Add("Visa_Id", t.VisaId, dbType: DbType.Decimal, direction: ParameterDirection.Input);
                p.Add("Rent_Id", t.RentId, dbType: DbType.Decimal, direction: ParameterDirection.Input);

                var result = dBContext.Connection.ExecuteAsync("Payment_Package.CreatePayment", p, commandType: CommandType.StoredProcedure);
                return true;
            }
            catch (Exception ex) {
                throw ex;
            }

        }

        public void Delete(int id)
        {
            var p = new DynamicParameters();
            p.Add("Payment_Id", id, dbType: DbType.Decimal, direction: ParameterDirection.Input);
            var result = dBContext.Connection.ExecuteAsync("Payment_Package.DeletePAYMENT", p, commandType: CommandType.StoredProcedure);
        }

        public List<Payment> GetAll()
        {
            IEnumerable<Payment> result = dBContext.Connection.Query<Payment>("Payment_Package.GETALLPAYMENT",
                                                            commandType: CommandType.StoredProcedure);
            return result.ToList();
        }

        public Payment GetById(int id)
        {
            var p = new DynamicParameters();
            p.Add("Payment_Id", id, dbType: DbType.Int32, direction: ParameterDirection.Input);
            IEnumerable<Payment> result = dBContext.Connection.Query<Payment>("Payment_Package.GetPaymentById", p, commandType: CommandType.StoredProcedure);
            return result.FirstOrDefault();
        }

        public void Update(Payment t)
        {
            var p = new DynamicParameters();
            p.Add("Payment_Id", t.PayId, dbType: DbType.Decimal, direction: ParameterDirection.Input);
            p.Add("Pay_Amount", t.PayAmount, dbType: DbType.Decimal, direction: ParameterDirection.Input);
            p.Add("Garagee_Name", t.GarageName, dbType: DbType.String, direction: ParameterDirection.Input);
            p.Add("Pay_Date", t.PayDate, dbType: DbType.DateTime, direction: ParameterDirection.Input);
            p.Add("Commission_Rate", t.CommissionRate, dbType: DbType.Decimal, direction: ParameterDirection.Input);
            p.Add("User_Id", t.UserId, dbType: DbType.Decimal, direction: ParameterDirection.Input);
            p.Add("Visa_Id", t.VisaId, dbType: DbType.Decimal, direction: ParameterDirection.Input);
            p.Add("Rent_Id", t.RentId, dbType: DbType.Decimal, direction: ParameterDirection.Input);

            var result = dBContext.Connection.ExecuteAsync("Payment_Package.UpdatePayment", p, commandType: CommandType.StoredProcedure);
            
        }
    }
}
