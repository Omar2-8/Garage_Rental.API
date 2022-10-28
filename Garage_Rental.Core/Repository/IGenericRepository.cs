using System;
using System.Collections.Generic;
using System.Text;
using Garage_Rental.Core.Data;

namespace Garage_Rental.Core.Repository
{
    public interface IGenericRepository<T>
    {
        List<T> GetAll();
        T GetById(int id);
        bool Create(T t);
        void Update(T t);
        void Delete(int id);

    }
}
