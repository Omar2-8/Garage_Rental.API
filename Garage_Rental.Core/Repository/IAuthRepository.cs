using Garage_Rental.Core.Data;
using System;
using System.Collections.Generic;
using System.Text;

namespace Garage_Rental.Core.Repository
{
    public interface IAuthRepository
    {
        User AuthLogin(User login);
        bool AuthRegister(User register);
    }
}
