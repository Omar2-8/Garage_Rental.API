using Garage_Rental.Core.Data;
using Garage_Rental.Core.DTO;
using System;
using System.Collections.Generic;
using System.Text;

namespace Garage_Rental.Core.Service
{
    public interface IAuthService
    {
        string AuthLogin(User login);
        bool AuthRegister(User register);
        
    }
}
