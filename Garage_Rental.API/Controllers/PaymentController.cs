using Garage_Rental.Core.Data;
using Garage_Rental.Core.Service;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
namespace Garage_Rental.API.Controllers
{
    [Route("api/[controller]/[action]")]
    [ApiController]
    public class PaymentController : ControllerBase
    {
        private readonly IGenericService<Payment> _paymentService;

        public PaymentController(IGenericService<Payment> PaymentService)
        {
            _paymentService = PaymentService;
        }


        [HttpGet]
        public List<Payment> GetAll()
        {
            return _paymentService.GetAll();
        }

        [HttpPost]
        public bool Create(Payment payment)
        {
            return _paymentService.Create(payment);
        }

        [HttpDelete]
        [Route("{id}")]
        public void Delete(int id)
        {
            _paymentService.Delete(id);
        }

        [HttpGet]
        [Route("{id}")]
        public Payment GetById(int id)
        {
            return _paymentService.GetById(id);
        }
        [HttpPut]
        public void Update(Payment payment)
        {
            _paymentService.Update(payment);
        }
    }
}
