using System;
using System.Collections.Generic;

#nullable disable

namespace Garage_Rental.Core.Data
{
    public partial class User
    {
        public User()
        {
            Cars = new HashSet<Car>();
            Garages = new HashSet<Garage>();
            Payments = new HashSet<Payment>();
            Rents = new HashSet<Rent>();
            Testimonials = new HashSet<Testimonial>();
        }

        public decimal UserId { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string Email { get; set; }
        public string Password { get; set; }
        public decimal? Phonenumber { get; set; }
        public string UserImage { get; set; }
        public string UserIdentity { get; set; }
        public decimal? RolesId { get; set; }

        public virtual Role Roles { get; set; }
        public virtual ICollection<Car> Cars { get; set; }
        public virtual ICollection<Garage> Garages { get; set; }
        public virtual ICollection<Payment> Payments { get; set; }
        public virtual ICollection<Rent> Rents { get; set; }
        public virtual ICollection<Testimonial> Testimonials { get; set; }
    }
}
