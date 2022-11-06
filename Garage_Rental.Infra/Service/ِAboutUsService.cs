using Garage_Rental.Core.Data;
using Garage_Rental.Core.Repository;
using Garage_Rental.Core.Service;
using System;
using System.Collections.Generic;
using System.Text;

namespace Garage_Rental.Infra.Service
{
    public class AboutUsService : IGenericService<AboutU>
    {

        private readonly IGenericRepository<AboutU> _AboutUsRepository;

        public AboutUsService(IGenericRepository<AboutU> AboutUsRepository)
        {
            _AboutUsRepository = AboutUsRepository;
        }

        public bool Create(AboutU aboutU)
        {
            throw new NotImplementedException();
        }
        public void Delete(int id)
        {
            throw new NotImplementedException();


        }

        public List<AboutU> GetAll()
        {
            return _AboutUsRepository.GetAll();          }

        public AboutU GetById(int id)
        {
            throw new NotImplementedException();
        }

        public void Update(AboutU t)
        {
            _AboutUsRepository.Update(t);

        }
    }


}
