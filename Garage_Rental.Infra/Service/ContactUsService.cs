using Garage_Rental.Core.Data;
using Garage_Rental.Core.Repository;
using Garage_Rental.Core.Service;
using System;
using System.Collections.Generic;
using System.Text;

namespace Garage_Rental.Infra.Service
{
    public class ContactUsService : IGenericService<ContactU>
    {
        private readonly IGenericRepository<ContactU> _ContactUsRepository;
        public ContactUsService(IGenericRepository<ContactU> ContactUsRepository)
        {
            
            _ContactUsRepository = ContactUsRepository;
        }

        public bool Create(ContactU t)
        {
           return _ContactUsRepository.Create(t);
        }

        public void Delete(int id)
        {
            _ContactUsRepository.Delete(id);
        }

        public List<ContactU> GetAll()
        {
         return   _ContactUsRepository.GetAll();
        }

        public ContactU GetById(int id)
        {
            throw new NotImplementedException();
        }

        public void Update(ContactU t)
        {
            throw new NotImplementedException();
        }
    }
}
