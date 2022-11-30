using Garage_Rental.Core.Data;
using Garage_Rental.Core.DTO;
using Garage_Rental.Core.Repository;
using Garage_Rental.Core.Service;
using System;
using System.Collections.Generic;
using System.Text;

namespace Garage_Rental.Infra.Service
{
    public class LongitudeLatitudeService : ILongitudeLatitudeService
    {
        private readonly ILongitudeLatitudeRepsitory _LongitudeLatitudeRepsitory;

        public LongitudeLatitudeService(ILongitudeLatitudeRepsitory LongitudeLatitudeRepsitory)
        {
            _LongitudeLatitudeRepsitory = LongitudeLatitudeRepsitory;
        }

        public List<LongLetGarages> GetLongitudeLatitude()
        {
           return this._LongitudeLatitudeRepsitory.GetLongitudeLatitude();
        }

        public List<LongLetGarages> GetLongitudeLatitudeByID(int id)
        {
            return this._LongitudeLatitudeRepsitory.GetLongitudeLatitudeByID(id);
        }

        public void ChangeGragaeStatus(Garagestatus g)
        {
            this._LongitudeLatitudeRepsitory.ChangeGragaeStatus(g);
        }
    }
}
