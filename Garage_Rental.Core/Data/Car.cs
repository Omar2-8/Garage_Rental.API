using System;
using System.Collections.Generic;

#nullable disable

namespace Garage_Rental.Core.Data
{
    public partial class Car
    {
        public decimal CarId { get; set; }
        public string CarType { get; set; }
        public string CarPlate { get; set; }
        public decimal? UserId { get; set; }

        public virtual User User { get; set; }
    }
}
