using Garage_Rental.Core.Data;
using Garage_Rental.Core.Service;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.IO;

namespace Garage_Rental.API.Controllers
{
    [Route("api/[controller]/[action]")]
    [ApiController]
    public class GarageController : ControllerBase
    {
        private readonly IGenericService<Garage> _garageService;

        public GarageController(IGenericService<Garage> GarageService)
        {
            _garageService = GarageService;
        }

        [HttpGet]
        public List<Garage> GetAll()
        {
            return _garageService.GetAll();
        }
        [HttpPost]
        public bool Create(Garage garage)
        {
            return _garageService.Create(garage);
        }

        [HttpDelete]
        [Route("{id}")]
        public void Delete(int id)
        {
            _garageService.Delete(id);
        }

        [HttpGet]
        [Route("{id}")]
        public Garage GetById(int id)
        {
            return _garageService.GetById(id);
        }

        [HttpPut]
        public void Update(Garage garage)
        {
            _garageService.Update(garage);
        }
 
        [HttpPost]
        public Garage UploadIMage()
        {
            var file = Request.Form.Files[0];
            var fileName = Guid.NewGuid().ToString() + "_" + file.FileName;
            var fullPath = Path.Combine("C://Users//2001//Desktop//Trining//API//finalProject//Garage_Rental.API//FrontEnd//GarageRentalFrontEnd//src//assets//images", fileName);
            //var fullPath = Path.Combine("D://final project//FrontEnd//GarageRentalFrontEnd//src//assets//images", fileName);
            using (var stream = new FileStream(fullPath, FileMode.Create))
            {
                file.CopyTo(stream);
            }
            
            Garage item = new Garage();

            item.Image1 = fileName;
            item.Image2 = fileName;
            return item;
        }
    }
}
