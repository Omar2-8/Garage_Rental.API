using Garage_Rental.Core.Data;
using Garage_Rental.Core.Repository;
using Garage_Rental.Core.Service;
using System;
using System.Collections.Generic;
using System.Text;

namespace Garage_Rental.Infra.Service
{
    public class CarService : IGenericService<Car>
    {
        private readonly IGenericRepository<Car> _carRepository;

        public CarService(IGenericRepository<Car> CarRepository)
        {
            _carRepository = CarRepository;
        }

        public bool Create(Car car)
        {
            return _carRepository.Create(car);
        }

        public void Delete(int id)
        {
            _carRepository.Delete(id);
        }

        public List<Car> GetAll()
        {
            return _carRepository.GetAll();
        }

        public Car GetById(int id)
        {
            return _carRepository.GetById(id);
        }

        public void Update(Car car)
        {
            _carRepository.Update(car);
        }
    }
}
