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

        public decimal GarageId { get; set; }
        public string GarageName { get; set; }
        public string Latitude { get; set; }
        public string Longitude { get; set; }
        public string Image1 { get; set; }
        public string Image2 { get; set; }
        public decimal? AvailableFrom { get; set; }
        public decimal? AvailableTo { get; set; }
        public decimal? RentPrice { get; set; }
        public string Street { get; set; }
        public decimal? BuildingNumber { get; set; }
        public string Status { get; set; }
        public string GarageMode { get; set; }
        public decimal? UserId { get; set; }

        public virtual User User { get; set; }
        public virtual ICollection<Rent> Rents { get; set; }
    }
}
