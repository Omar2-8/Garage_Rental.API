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
    public class HomeController : ControllerBase
    {
        private readonly IGenericService<Home> _homeService;

        public HomeController(IGenericService<Home> HomeService)
        {
            _homeService = HomeService;
        }
        [HttpGet]
        public List<Home> GetAll()
        {
            return _homeService.GetAll();
        }

        [HttpPost]
        public bool Create(Home home)
        {
            throw new NotImplementedException();
        }

        [HttpDelete]
        
        public void Delete(int id)
        {
            throw new NotImplementedException();
        }

        [HttpGet]
       
        public Home GetById(int id)
        {
            throw new NotImplementedException();
        }
        [HttpPut]
        public void Update(Home home)
        {
            _homeService.Update(home);
        }

        [Route("uploadImage")]
        [HttpPost]
        public Home UploadIMage()
        {
            var file = Request.Form.Files[0];
            var fileName = Guid.NewGuid().ToString() + "_" + file.FileName;
            var fullPath = Path.Combine("Images", fileName);
            using (var stream = new FileStream(fullPath, FileMode.Create))
            {
                file.CopyTo(stream);
            }
            Home item = new Home();
            
            item.IMAGE_1 = fileName;
            
            return item;
        }
    }
}