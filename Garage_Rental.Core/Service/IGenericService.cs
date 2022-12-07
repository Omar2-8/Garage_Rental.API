using Garage_Rental.Core.Data;
using System;
using System.Collections.Generic;
using System.Text;

namespace Garage_Rental.Core.Service
{
    public interface IGenericService<T>
    {
        List<T> GetAll();
        T GetById(int id);

        bool Create(T t);
        void Update(T t);
        void Delete(int id);

    }
}
