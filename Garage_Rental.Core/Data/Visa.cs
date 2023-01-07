using System;
using System.Collections.Generic;

#nullable disable

namespace Garage_Rental.Core.Data
{
    public partial class Visa
    {
        public Visa()
        {
            Payments = new HashSet<Payment>();
        }

        public decimal VISA_ID { get; set; }
        public string VISA_NAME { get; set; }
        public decimal VISA_NUMBER { get; set; }
        public double? VISA_AMOUNT { get; set; }
        public DateTime? END_DATE { get; set; }
        public decimal? CVC_CVV { get; set; }

        public virtual ICollection<Payment> Payments { get; set; }
    }
}
