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

        public decimal VisaId { get; set; }
        public string VisaName { get; set; }
        public decimal VisaNumber { get; set; }
        public decimal? VisaAmount { get; set; }
        public DateTime? EndDate { get; set; }
        public decimal? CvcCvv { get; set; }

        public virtual ICollection<Payment> Payments { get; set; }
    }
}
