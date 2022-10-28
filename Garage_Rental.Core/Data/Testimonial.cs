using System;
using System.Collections.Generic;

#nullable disable

namespace Garage_Rental.Core.Data
{
    public partial class Testimonial
    {
        public decimal Id { get; set; }
        public int? Rating { get; set; }
        public string Opinion { get; set; }
        public string Status { get; set; }
        public decimal? UserId { get; set; }

        public virtual User User { get; set; }
    }
}
