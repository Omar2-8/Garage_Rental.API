using Garage_Rental.Core.Data;
using Garage_Rental.Core.DTO;
using Garage_Rental.Core.Repository;
using Garage_Rental.Core.Service;
using System;
using System.Collections.Generic;
using System.Text;

namespace Garage_Rental.Infra.Service
{
    public class GeneralService : IGeneralService
    {
        private readonly IGeneralRepository _GeneralRepository;

        public GeneralService(IGeneralRepository GeneralRepository)
        {
            _GeneralRepository = GeneralRepository;
        }

        public void ChangeAmount(ChangeAmount g)
        {
            this._GeneralRepository.ChangeAmount(g);
        }

        public List<Car> GetAllCarById(int id)
        {
            return _GeneralRepository.GetAllCarById(id);
        }
    }
}
