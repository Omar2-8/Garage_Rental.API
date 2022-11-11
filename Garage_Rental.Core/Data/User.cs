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

        public decimal USER_ID { get; set; }
        public string FIRST_NAME { get; set; }
        public string LAST_NAME { get; set; }
        public string Email { get; set; }
        public string Password { get; set; }
        public decimal? Phonenumber { get; set; }
        public string USER_IMAGE { get; set; }
        public string USER_IDENTITY { get; set; }
        public decimal? ROLES_ID { get; set; }

        public virtual Role Roles { get; set; }
        public virtual ICollection<Car> Cars { get; set; }
        public virtual ICollection<Garage> Garages { get; set; }
        public virtual ICollection<Payment> Payments { get; set; }
        public virtual ICollection<Rent> Rents { get; set; }
        public virtual ICollection<Testimonial> Testimonials { get; set; }
    }
}
