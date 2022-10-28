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

        public decimal RentId { get; set; }
        public decimal StartTime { get; set; }
        public decimal EndTime { get; set; }
        public decimal? GarageId { get; set; }
        public decimal? UserId { get; set; }
        public DateTime? RentDate { get; set; }

        public virtual Garage Garage { get; set; }
        public virtual User User { get; set; }
        public virtual ICollection<Payment> Payments { get; set; }
    }
}
