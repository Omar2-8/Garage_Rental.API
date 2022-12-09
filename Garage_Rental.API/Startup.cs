using Garage_Rental.Core.Common;
using Garage_Rental.Core.Data;
using Garage_Rental.Core.Repository;
using Garage_Rental.Core.Service;
using Garage_Rental.Infra.Common;
using Garage_Rental.Infra.Repository;
using Garage_Rental.Infra.Service;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;

using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Microsoft.IdentityModel.Tokens;
using Microsoft.OpenApi.Models;
using System.Text;

namespace Garage_Rental.API
{
    public class Startup
    {
        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public IConfiguration Configuration { get; }
        

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {
            //by Falah
            services.AddCors(corsOptions =>
            {
                corsOptions.AddPolicy("policy",
                builder =>
                {
                    builder.AllowAnyOrigin().AllowAnyMethod().AllowAnyHeader();
                });
            });

            services.AddAuthentication(opt => {
                opt.DefaultAuthenticateScheme = JwtBearerDefaults.AuthenticationScheme;
                opt.DefaultChallengeScheme = JwtBearerDefaults.AuthenticationScheme;
            })
        .AddJwtBearer(options =>
        {
            options.TokenValidationParameters = new TokenValidationParameters
            {
                ValidateIssuer = true,
                ValidateAudience = true,
                ValidateLifetime = true,
                ValidateIssuerSigningKey = true,
                IssuerSigningKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes("superSecretKey@345"))
            };
        });



            services.AddScoped<IGenericRepository<User>, UsersRepository>();
            services.AddScoped<IGenericService<User>, UsersService>();
            
            services.AddScoped<IGenericRepository<Garage>, GarageRepository>();
            services.AddScoped<IGenericService<Garage>, GarageService>();
            
            services.AddScoped<IGenericRepository<Car>, CarRepository>();
            services.AddScoped<IGenericService<Car>, CarService>();

            services.AddScoped<IAuthRepository, AuthRepository>();
            services.AddScoped<IAuthService, AuthService>();

            services.AddScoped<IGenericRepository<Home>, HomeRepository>();
            services.AddScoped<IGenericService<Home>, HomeService>();

            services.AddScoped<IGenericRepository<Visa>, VisaRepository>();
            services.AddScoped<IGenericService<Visa>, VisaService>();
            services.AddScoped<ILongitudeLatitudeRepsitory, LongitudeLatitudeRepsitory>();
            services.AddScoped<ILongitudeLatitudeService, LongitudeLatitudeService>();
            services.AddScoped<IGeneralRepository, GeneralRepository>();
            services.AddScoped<IGeneralService, GeneralService>();

            //by Omar Master :)
            services.AddScoped<IGenericRepository<Payment>, PaymentRepository>();
            services.AddScoped<IGenericService<Payment>, PaymentService>();
            
            services.AddScoped<IGenericRepository<Rent>, RentRepository>();
            services.AddScoped<IGenericService<Rent>, RentService>();
            
            services.AddScoped<IGenericRepository<Role>, RoleRepository>();
            services.AddScoped<IGenericService<Role>, RoleService>();



            // By Zaid 
            // where is your code bitch
            // In ur ass
            services.AddScoped<IGenericRepository<Testimonial>, TestimonialRepository>();
            services.AddScoped<IGenericService<Testimonial>, TestimonialService>();

            services.AddScoped<IGenericRepository<ContactU>, ContactUsRepository>();
            services.AddScoped<IGenericService<ContactU>, ContactUsService>();

            services.AddScoped<IGenericRepository<AboutU>, AboutUsRepository>();
            services.AddScoped<IGenericService<AboutU>, AboutUsService>();

            
            services.AddScoped<IDbContext, DbContext>();
            services.AddControllers();
            services.AddSwaggerGen();
            services.AddSwaggerGen(c =>
            {
                c.SwaggerDoc("v1", new OpenApiInfo
                {
                    Title = "Swagger API",
                    Version = "v1",
                    Description = "Description for the API goes here.",
                    
                });
            });

        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.

        public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }
            app.UseSwagger();
            app.UseSwaggerUI(c =>
            {
                c.SwaggerEndpoint("v1/swagger.json", "My Api v1");
            });

            app.UseHttpsRedirection();

            app.UseRouting();

            app.UseCors("policy");//-->موقعها هون اذا تغير error
            app.UseAuthentication();
            app.UseAuthorization();

            app.UseEndpoints(endpoints =>
            {
                endpoints.MapSwagger();
                endpoints.MapControllers();
            });
            
       
        } 
    }
}
