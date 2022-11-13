using System;
using System.Collections.Generic;

#nullable disable

namespace Garage_Rental.Core.Data
{
    public partial class Rent
    {
        public Rent()
        {
            Payments = new HashSet<Payment>();
        }

        public decimal RENT_ID { get; set; }
        public decimal START_TIME { get; set; }
        public decimal END_TIME { get; set; }
        public decimal? GARAGE_ID { get; set; }
        public decimal? USER_ID { get; set; }
        public DateTime? RENT_DATE { get; set; }

        public virtual Garage Garage { get; set; }
        public virtual User User { get; set; }
        public virtual ICollection<Payment> Payments { get; set; }
    }
}
