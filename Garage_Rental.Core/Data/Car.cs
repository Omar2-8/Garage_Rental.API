using System;
using System.Collections.Generic;

#nullable disable

namespace Garage_Rental.Core.Data
{
    public partial class Car
    {
        public decimal CAR_ID { get; set; }
        public string CAR_TYPE { get; set; }
        public string CAR_PLATE { get; set; }
        public decimal? USER_ID { get; set; }

        public virtual User User { get; set; }
    }
}
