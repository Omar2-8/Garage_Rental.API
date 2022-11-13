using System;
using System.Collections.Generic;

#nullable disable

namespace Garage_Rental.Core.Data
{
    public partial class ContactU
    {
        public decimal Id { get; set; }
        public string Name { get; set; }
        public string Email { get; set; }
        public string Message { get; set; }
        public long? PHONE_NUMBER { get; set; }
    }
}
