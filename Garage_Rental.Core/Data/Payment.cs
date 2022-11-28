using System;
using System.Collections.Generic;

#nullable disable

namespace Garage_Rental.Core.Data
{
    public partial class Payment
    {
        public decimal PAY_ID { get; set; }
        public decimal? PAY_AMOUNT { get; set; }
        public string GARAGE_NAME { get; set; }
        public DateTime? PAY_DATE { get; set; }
        public decimal? COMMISSION_RATE { get; set; }
        public decimal? USER_ID { get; set; }
        public decimal? VISA_ID { get; set; }
        public decimal? RENT_ID { get; set; }

        public virtual Rent Rent { get; set; }
        public virtual User User { get; set; }
        public virtual Visa Visa { get; set; }
    }
}
