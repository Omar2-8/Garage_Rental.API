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
            try
            {
                var p = new DynamicParameters();
                p.Add("RATING", t.Rating, dbType: DbType.Decimal, direction: ParameterDirection.Input);
                p.Add("OPINION", t.Opinion, dbType: DbType.String, direction: ParameterDirection.Input);
                p.Add("STATUS", t.Status, dbType: DbType.DateTime, direction: ParameterDirection.Input);
                p.Add("USER_ID", t.UserId, dbType: DbType.Decimal, direction: ParameterDirection.Input);
             
            

                var result = dBContext.Connection.ExecuteAsync("TESTIMONIAL_PACKAGE.CreateTESTIMONIAL", p, commandType: CommandType.StoredProcedure);
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
            p.Add("Id", id, dbType: DbType.Decimal, direction: ParameterDirection.Input);
            var result = dBContext.Connection.ExecuteAsync("TESTIMONIAL_PACKAGE.DeleteTESTIMONIAL", p, commandType: CommandType.StoredProcedure);
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
            p.Add("ID", t.Id, dbType: DbType.Decimal, direction: ParameterDirection.Input);
            p.Add("STATUS", t.Status, dbType: DbType.Decimal, direction: ParameterDirection.Input);
           


            var result = dBContext.Connection.ExecuteAsync("ABOUT_PACKAGE.UPDATEABOUT", p, commandType: CommandType.StoredProcedure);

        }
    }
}
