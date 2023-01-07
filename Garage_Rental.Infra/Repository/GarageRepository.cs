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
    public class GarageRepository : IGenericRepository<Garage>
    {
        private readonly IDbContext _dbcontext;
        public GarageRepository(IDbContext dbcontext)
        {
            _dbcontext = dbcontext;
        }

        public bool Create(Garage t)
        {
            var p = new DynamicParameters();
            p.Add("Name",t.GARAGE_NAME , dbType: DbType.String, direction: ParameterDirection.Input);
            p.Add("G_Latitude", t.Latitude, dbType: DbType.String, direction: ParameterDirection.Input);
            p.Add("G_Longitude", t.Longitude, dbType: DbType.String, direction: ParameterDirection.Input);
            p.Add("Img1", t.Image1, dbType: DbType.String, direction: ParameterDirection.Input);
            p.Add("Img2", t.Image2, dbType: DbType.String, direction: ParameterDirection.Input);
            p.Add("Price", t.RENT_PRICE, dbType: DbType.Double, direction: ParameterDirection.Input);
            p.Add("G_Street", t.Street, dbType: DbType.String, direction: ParameterDirection.Input);
            p.Add("BUILDING_Num", t.BUILDING_NUMBER, dbType: DbType.Int32, direction: ParameterDirection.Input);
            p.Add("U_ID", t.USER_ID, dbType: DbType.Int32, direction: ParameterDirection.Input);
            p.Add("result", dbType: DbType.Int32, direction: ParameterDirection.Output);
            _dbcontext.Connection.Execute("GARAGE_PACKAGE.CreateGARAGE", p, commandType: CommandType.StoredProcedure);
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
            p.Add("Id", id, dbType: DbType.Int32, direction: ParameterDirection.Input);
            _dbcontext.Connection.Execute("GARAGE_PACKAGE.DeleteGARAGE", p, commandType: CommandType.StoredProcedure);
        }

        public List<Garage> GetAll()
        {
            IEnumerable<Garage> result = _dbcontext.Connection.Query<Garage>("GARAGE_PACKAGE.GETALLGARAGE", commandType: CommandType.StoredProcedure);
            return result.ToList();
        }

        public Garage GetById(int id)
        {
            var p = new DynamicParameters();
            p.Add("ID", id, dbType: DbType.Int32, direction: ParameterDirection.Input);
            IEnumerable<Garage> result = _dbcontext.Connection.Query<Garage>("GARAGE_PACKAGE.GetSingleGARAGESById", p, commandType: CommandType.StoredProcedure);
            return result.FirstOrDefault();
        }



        public void Update(Garage t)
        {
            var p = new DynamicParameters();
            p.Add("G_ID", t.GARAGE_ID, dbType: DbType.Int32, direction: ParameterDirection.Input);
            p.Add("Name", t.GARAGE_NAME, dbType: DbType.String, direction: ParameterDirection.Input);
            p.Add("G_Latitude", t.Latitude, dbType: DbType.String, direction: ParameterDirection.Input);
            p.Add("G_Longitude", t.Longitude, dbType: DbType.String, direction: ParameterDirection.Input);
            
            p.Add("Img1", t.Image1, dbType: DbType.String, direction: ParameterDirection.Input);
            
            p.Add("Img2", t.Image2, dbType: DbType.String, direction: ParameterDirection.Input);
            p.Add("Available_Start", t.AVAILABLE_FROM, dbType: DbType.Int32, direction: ParameterDirection.Input);
            p.Add("Available_End", t.AVAILABLE_TO, dbType: DbType.Int32, direction: ParameterDirection.Input);
            p.Add("Price", t.RENT_PRICE, dbType: DbType.Double, direction: ParameterDirection.Input);
            p.Add("G_Street", t.Street, dbType: DbType.String, direction: ParameterDirection.Input);
            p.Add("BUILDING_Num", t.BUILDING_NUMBER, dbType: DbType.Int32, direction: ParameterDirection.Input);
            p.Add("G_MODE", t.GARAGE_MODE, dbType: DbType.String, direction: ParameterDirection.Input);
            p.Add("U_ID", t.USER_ID, dbType: DbType.Int32, direction: ParameterDirection.Input);
            p.Add("result", dbType: DbType.Int32, direction: ParameterDirection.Output);
            _dbcontext.Connection.Execute("GARAGE_PACKAGE.UPDATEGARAGE", p, commandType: CommandType.StoredProcedure);
        }
    }
}
