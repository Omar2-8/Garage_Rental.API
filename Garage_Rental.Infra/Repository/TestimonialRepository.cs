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
    public class TestimonialRepository: IGenericRepository<Testimonial>
    {
        private readonly IDbContext dBContext;

        public TestimonialRepository(IDbContext dBContext)
        {
            this.dBContext = dBContext;
        }
    
    public bool Create(Testimonial t)
           {
            
                var p = new DynamicParameters();
                p.Add("U_Rating", t.Rating, dbType: DbType.Int32, direction: ParameterDirection.Input);
                p.Add("U_Opinion", t.Opinion, dbType: DbType.String, direction: ParameterDirection.Input);
                p.Add("STATUS", t.Status, dbType: DbType.String, direction: ParameterDirection.Input);
                p.Add("User_Id", t.USER_ID, dbType: DbType.Int32, direction: ParameterDirection.Input);
                p.Add("result", dbType: DbType.Int32, direction: ParameterDirection.Output);

               dBContext.Connection.Execute("TESTIMONIAL_PACKAGE.CreateTESTIMONIAL", p, commandType: CommandType.StoredProcedure);
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
            p.Add("U_id", id, dbType: DbType.Int32, direction: ParameterDirection.Input);
             dBContext.Connection.Execute("TESTIMONIAL_PACKAGE.DeleteTESTIMONIAL", p, commandType: CommandType.StoredProcedure);
        }

        public List<Testimonial> GetAll()
        {
            IEnumerable<Testimonial> result = dBContext.Connection.Query<Testimonial>("TESTIMONIAL_PACKAGE.GETALLTESTIMONIAL",
                                                          commandType: CommandType.StoredProcedure);
            return result.ToList();
        }

        public Testimonial GetById(int id)
        {
            throw new NotImplementedException();
        }

        // review
        public void Update(Testimonial t)
        {
            var p = new DynamicParameters();
           
            p.Add("Us_Id", t.Id, dbType: DbType.Int32, direction: ParameterDirection.Input);
            p.Add("U_STATUS", t.Status, dbType: DbType.String, direction: ParameterDirection.Input);
            p.Add("result", dbType: DbType.Int32, direction: ParameterDirection.Output);

            dBContext.Connection.ExecuteAsync("TESTIMONIAL_PACKAGE.UPDATETESTIMONIAL", p, commandType: CommandType.StoredProcedure);

        }
    }
}
