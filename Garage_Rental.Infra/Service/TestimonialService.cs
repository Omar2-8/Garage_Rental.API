using Garage_Rental.Core.Data;
using Garage_Rental.Core.Repository;
using Garage_Rental.Core.Service;
using System;
using System.Collections.Generic;
using System.Text;

namespace Garage_Rental.Infra.Service
{
    public class TestimonialService : IGenericService<Testimonial>
    {
        private readonly IGenericRepository<Testimonial> _TestimonialRepository;

        public TestimonialService(IGenericRepository<Testimonial> TestimonialRepository)
        {
            _TestimonialRepository = TestimonialRepository;
        }

        public bool Create(Testimonial t)
        {
           return _TestimonialRepository.Create(t);
        }

        public void Delete(int id)
        {
            _TestimonialRepository.Delete(id);
        }

        public List<Testimonial> GetAll()
        {
            return _TestimonialRepository.GetAll();
        }

        public Testimonial GetById(int id)
        {
            throw new NotImplementedException();
        }

        public void Update(Testimonial t)
        {
            _TestimonialRepository.Update(t);
        }
    }
}
