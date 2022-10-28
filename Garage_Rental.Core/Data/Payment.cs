using System;
using System.Collections.Generic;

#nullable disable

namespace Garage_Rental.Core.Data
{
    public partial class Payment
    {
        public decimal PayId { get; set; }
        public decimal? PayAmount { get; set; }
        public string GarageName { get; set; }
        public DateTime? PayDate { get; set; }
        public decimal? CommissionRate { get; set; }
        public decimal? UserId { get; set; }
        public decimal? VisaId { get; set; }
        public decimal? RentId { get; set; }

        public virtual Rent Rent { get; set; }
        public virtual User User { get; set; }
        public virtual Visa Visa { get; set; }
    }
}
