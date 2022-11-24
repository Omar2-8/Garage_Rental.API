using Garage_Rental.Core.Data;
using Garage_Rental.Core.DTO;
using System;
using System.Collections.Generic;
using System.Text;

namespace Garage_Rental.Core.Repository
{
    public interface ILongitudeLatitudeRepsitory
    {
        public List<LongLetGarages> GetLongitudeLatitude();
        
    }
}
