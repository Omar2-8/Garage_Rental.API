using System;
using System.Collections.Generic;

#nullable disable

namespace Garage_Rental.Core.Data
{
    public partial class Garage
    {
        public Garage()
        {
            Rents = new HashSet<Rent>();
        }

        public decimal GARAGE_ID { get; set; }
        public string GARAGE_NAME { get; set; }
        public string Latitude { get; set; }
        public string Longitude { get; set; }
        public string Image1 { get; set; }
        public string Image2 { get; set; }
        public decimal? AVAILABLE_FROM { get; set; }
        public decimal? AVAILABLE_TO { get; set; }
        public decimal? RENT_PRICE { get; set; }
        public string Street { get; set; }
        public decimal? BUILDING_NUMBER { get; set; }
        public string Status { get; set; }
        public string GARAGE_MODE { get; set; }
        public decimal? USER_ID { get; set; }

        public virtual User User { get; set; }
        public virtual ICollection<Rent> Rents { get; set; }
    }
}
