using System;
using System.Collections.Generic;
using System.Data.Common;
using System.Text;

namespace Garage_Rental.Core.Common
{
    public interface IDbContext
    {
        public DbConnection Connection { get; }

    }
}
