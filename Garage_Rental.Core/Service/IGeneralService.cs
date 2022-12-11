using Garage_Rental.Core.Data;
using Garage_Rental.Core.DTO;
using System;
using System.Collections.Generic;
using System.Text;


namespace Garage_Rental.Core.Service
{
    public interface IGeneralService
    {
       public void ChangeAmount(ChangeAmount g);
        List<Car> GetAllCarById(int id);

        List<Rent> GetAllRentById(int id);
        public void ChangeGarageMode(ChangeGarageMode g);
    }
}
