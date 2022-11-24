﻿using Garage_Rental.Core.Data;
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
<<<<<<< HEAD
        [Route("{id}")]
=======
         
>>>>>>> 633fe6da4ba24189e9ba56f981224860447d785e
        public void Delete(int id)
        {
            _garageService.Delete(id);
        }

        [HttpGet]
<<<<<<< HEAD
        [Route("{id}")]
=======
       
>>>>>>> 633fe6da4ba24189e9ba56f981224860447d785e
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
            var fullPath = Path.Combine("Images", fileName);
            using (var stream = new FileStream(fullPath, FileMode.Create))
            {
                file.CopyTo(stream);
            }
            
            Garage item = new Garage();

            item.Image1 = fileName;
            
            return item;//مش كامل الكود بدو تعديل
        }
    }
}
