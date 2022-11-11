using System;
using System.Collections.Generic;

#nullable disable

namespace Garage_Rental.Core.Data
{
    public partial class Role
    {
        public Role()
        {
            Users = new HashSet<User>();
        }

        public decimal ROLE_ID { get; set; }
        public string ROLE_NAME { get; set; }

        public virtual ICollection<User> Users { get; set; }
    }
}
