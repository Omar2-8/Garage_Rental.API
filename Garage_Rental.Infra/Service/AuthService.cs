using Garage_Rental.Core.Data;
using Garage_Rental.Core.Repository;
using Garage_Rental.Core.Service;
using Microsoft.IdentityModel.Tokens;
using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;

namespace Garage_Rental.Infra.Service
{
    public class AuthService :IAuthService
    {
        private readonly IAuthRepository repository;
        public AuthService(IAuthRepository Authrepository)
        {
            this.repository = Authrepository;
        }

        

        public string AuthLogin(User login)
        {
            var result = repository.AuthLogin(login);
            if (result == null)
            {
                return null;
            }
            else
            {

                var secretKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes("superSecretKey@345"));
                var signinCredentials = new SigningCredentials(secretKey, SecurityAlgorithms.HmacSha256);
                var claims = new List<Claim>
               {
                 new Claim("USER_ID",result.USER_ID.ToString()),
                 new Claim("first_name", result.FIRST_NAME),
                 new Claim("Email", result.Email),
                 new Claim("ROLES_ID", result.ROLES_ID.ToString())
                 
               };
                var tokeOptions = new JwtSecurityToken(
                    claims: claims,
                    expires: DateTime.Now.AddSeconds(60),
                    signingCredentials: signinCredentials
                );
                var tokenString = new JwtSecurityTokenHandler().WriteToken(tokeOptions);
                return tokenString;

            }
        }

        public bool AuthRegister(User register)
        {
            throw new NotImplementedException();
        }
    }
}
