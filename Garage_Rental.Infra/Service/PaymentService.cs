using Garage_Rental.Core.Data;
using Garage_Rental.Core.Repository;
using Garage_Rental.Core.Service;
using System;
using System.Collections.Generic;
using System.Text;

namespace Garage_Rental.Infra.Service
{
    public class PaymentService : IGenericService<Payment>
    {
        private readonly IGenericRepository<Payment> _paymentRepository;

        public PaymentService(IGenericRepository<Payment> PaymentRepository)
        {
            _paymentRepository = PaymentRepository;
        }

        public bool Create(Payment t)
        {
            return _paymentRepository.Create(t);
        }

        public void Delete(int id)
        {
             _paymentRepository.Delete(id);
        }

        public List<Payment> GetAll()
        {
            return _paymentRepository.GetAll();
        }

        public Payment GetById(int id)
        {
            return _paymentRepository.GetById(id);
        }

        public void Update(Payment t)
        {
              _paymentRepository.Update(t);
        }
    }
}
