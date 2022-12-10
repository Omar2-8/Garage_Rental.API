using Garage_Rental.Core.Data;
using Garage_Rental.Core.Service;
using MailKit.Net.Smtp;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using MimeKit;
using System;
using System.Collections.Generic;
using System.IO;

namespace Garage_Rental.API.Controllers
{
    [Route("api/[controller]/[action]")]
    [ApiController]
    public class UsersController : ControllerBase
    {
        private readonly IGenericService<User> _usersService;

        public UsersController(IGenericService<User> UsersService)
        {
            _usersService = UsersService;
        }

        [HttpGet]
        public List<User> GetAll()
        {
            return _usersService.GetAll();
        }

        [HttpPost]
        public bool Create(User user)
        {
            return _usersService.Create(user);
        }

        [HttpDelete]
        [Route("{id}")]
        public void Delete(int id)
        {
            _usersService.Delete(id);
        }

        [HttpGet]
        [Route("{id}")]
        public User GetById(int id)
        {
            return _usersService.GetById(id);
        }
        [HttpPut]
        public void Update(User user)
        {
            _usersService.Update(user);
        }

  
        [HttpPost]
        public User UploadIMage()
        {
            var file = Request.Form.Files[0];
            var fileName = Guid.NewGuid().ToString() + "_" + file.FileName;
            var fullPath = Path.Combine("D:\\Final Project\\FrontEnd\\GarageRentalFrontEnd\\src\\assets\\images", fileName);
            using (var stream = new FileStream(fullPath, FileMode.Create))
            {
                file.CopyTo(stream);
            }
            User item = new User();
            item.USER_IMAGE = fileName;
           


            return item;
        }


        [HttpGet]
        [Route("{ParentEmail}/{status}")]
        public void SendEmail(String ParentEmail,String status )
        {
            MimeMessage message = new MimeMessage();
            MailboxAddress from = new MailboxAddress("Garage Rental", "s.moe12@yahoo.com");
            message.From.Add(from);
            MailboxAddress to = new MailboxAddress("User", ParentEmail);
            message.To.Add(to);
            message.Subject = "Status of Garage";
            BodyBuilder bodyBuilder = new BodyBuilder();
            if (status== "Accept")
            {
                bodyBuilder.HtmlBody =
                "<p>Your Garage Status is: <b style=\"color:#7fb685\">Accept</b></p> ";
            }
            else {
                bodyBuilder.HtmlBody =
                "<p>Your Garage Status is: <b style=\"color:red\">Reject</b></p> ";

            }
            message.Body = bodyBuilder.ToMessageBody();
            using (var clinte = new SmtpClient())
            {
                clinte.Connect("smtp.mail.yahoo.com", 465, true);
                clinte.Authenticate("s.moe12@yahoo.com", "rxlhovtglvjibneg");
                clinte.Send(message);
                clinte.Disconnect(true);
            }
        }
    }
}
