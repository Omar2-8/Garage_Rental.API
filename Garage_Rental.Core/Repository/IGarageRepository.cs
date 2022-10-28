using Garage_Rental.Core.Data;
using System;
using System.Collections.Generic;
using System.Text;

namespace Garage_Rental.Core.Repository
{
    internal interface IGarageRepository
    {
        

        List<Garage> GETALLGARAGE();
        Garage GetGARAGESById(int id);
        void DeleteGARAGE(int id);
    }
}
