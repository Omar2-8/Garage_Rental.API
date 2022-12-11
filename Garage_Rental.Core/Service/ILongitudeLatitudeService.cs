using Garage_Rental.Core.Data;
using Garage_Rental.Core.DTO;
using System;
using System.Collections.Generic;
using System.Text;

namespace Garage_Rental.Core.Service
{
    public interface ILongitudeLatitudeService
    {
       public List<LongLetGarages> GetLongitudeLatitude();
        public List<LongLetGarages> GetLongitudeLatitudeByID(int id);
        List<Garage> GetByIdList(int id);
        List<Payment> GetByIdListPay(int id);

        void ChangeGragaeStatus(Garagestatus g);
    }
}
