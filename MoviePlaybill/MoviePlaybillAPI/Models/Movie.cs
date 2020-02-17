using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace MoviePlaybillAPI.Models
{
    public class Movie
    {
        public int ID { get; set; }

        public string Title { get; set; }

        public string Description { get; set; }
    }
}