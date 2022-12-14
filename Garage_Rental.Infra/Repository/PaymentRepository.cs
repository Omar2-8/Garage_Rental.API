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
    public class PaymentRepository : IGenericRepository<Payment>
    {
        private readonly IDbContext dBContext;

        public PaymentRepository(IDbContext dBContext)
        {
            this.dBContext = dBContext;
        }

        public bool Create(Payment t)
        {
           

            var p = new DynamicParameters();
                p.Add("P_Amount", t.PAY_AMOUNT, dbType: DbType.Decimal, direction: ParameterDirection.Input);
                p.Add("G_NAME", t.GARAGE_NAME, dbType: DbType.String, direction: ParameterDirection.Input);
                p.Add("p_DATE", t.PAY_DATE, dbType: DbType.Date, direction: ParameterDirection.Input);
                p.Add("c_RATE", t.COMMISSION_RATE, dbType: DbType.Decimal, direction: ParameterDirection.Input);
                p.Add("U_ID", t.USER_ID, dbType: DbType.Decimal, direction: ParameterDirection.Input);
                p.Add("V_ID", t.VISA_ID, dbType: DbType.Decimal, direction: ParameterDirection.Input);
                p.Add("R_ID", t.RENT_ID, dbType: DbType.Decimal, direction: ParameterDirection.Input);
                p.Add("result", dbType: DbType.Int32, direction: ParameterDirection.Output);
                 dBContext.Connection.Execute("Payment_Package.CreatePAYMENT", p, commandType: CommandType.StoredProcedure);
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
            var result = dBContext.Connection.ExecuteAsync("PAYMENT_PACKAGE.DeletePAYMENT", p, commandType: CommandType.StoredProcedure);
        }

        public List<Payment> GetAll()
        {
            IEnumerable<Payment> result = dBContext.Connection.Query<Payment>("PAYMENT_PACKAGE.GETALLPAYMENT",
                                                            commandType: CommandType.StoredProcedure);
            return result.ToList();
        }

        public Payment GetById(int id)
        {
            var p = new DynamicParameters();
            p.Add("Id", id, dbType: DbType.Int32, direction: ParameterDirection.Input);
            IEnumerable<Payment> result = dBContext.Connection.Query<Payment>("Payment_Package.GetPaymentById", p, commandType: CommandType.StoredProcedure);
            return result.FirstOrDefault();
        }

        public void Update(Payment t)
        {
            var p = new DynamicParameters();
            p.Add("Id", t.PAY_ID, dbType: DbType.Decimal, direction: ParameterDirection.Input);
            p.Add("Pay_Amount", t.PAY_AMOUNT, dbType: DbType.Decimal, direction: ParameterDirection.Input);
            p.Add("Garagee_Name", t.GARAGE_NAME, dbType: DbType.String, direction: ParameterDirection.Input);
            p.Add("Pay_Date", t.PAY_DATE, dbType: DbType.DateTime, direction: ParameterDirection.Input);
            p.Add("Commission_Rate", t.COMMISSION_RATE, dbType: DbType.Decimal, direction: ParameterDirection.Input);
            p.Add("User_Id", t.USER_ID, dbType: DbType.Decimal, direction: ParameterDirection.Input);
            p.Add("Visa_Id", t.VISA_ID, dbType: DbType.Decimal, direction: ParameterDirection.Input);
            p.Add("Rent_Id", t.RENT_ID, dbType: DbType.Decimal, direction: ParameterDirection.Input);
            p.Add("result", dbType: DbType.Int32, direction: ParameterDirection.Output);
            var result = dBContext.Connection.ExecuteAsync("Payment_Package.UpdatePayment", p, commandType: CommandType.StoredProcedure);
            
        }
    }
}
