using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Core.Interfaces;


namespace API.Controllers
{
    public class BasktController : BaseApiController
    {
        public IBasketRepository _basketRepo { get; }
        public BasktController(IBasketRepository basketRepo)
        {
            _basketRepo = basketRepo;
        }
    }
}