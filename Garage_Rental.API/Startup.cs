using Garage_Rental.Core.Common;
using Garage_Rental.Core.Data;
using Garage_Rental.Core.Repository;
using Garage_Rental.Core.Service;
using Garage_Rental.Infra.Common;
using Garage_Rental.Infra.Repository;
using Garage_Rental.Infra.Service;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.HttpsPolicy;
using Microsoft.AspNetCore.Mvc;
 
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Microsoft.Extensions.Logging;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

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
            services.AddScoped<IGenericRepository<User>, UsersRepository>();
            services.AddScoped<IGenericService<User>, UsersService>();
            services.AddScoped<IGenericRepository<Garage>, GarageRepository>();
            services.AddScoped<IGenericService<Garage>, GarageService>();
            services.AddScoped<IGenericRepository<Car>, CarRepository>();
            services.AddScoped<IGenericService<Car>, CarService>();


            services.AddScoped<IDbContext, DbContext>();
            services.AddControllers();
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.

        public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }

            app.UseHttpsRedirection();

            app.UseRouting();

            app.UseAuthorization();

            app.UseEndpoints(endpoints =>
            {
                endpoints.MapControllers();
            });
        }
    }
}
