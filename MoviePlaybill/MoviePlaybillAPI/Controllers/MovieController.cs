using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using MoviePlaybillAPI.Models;

namespace MoviePlaybillAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class MovieController : ControllerBase
    {

        List<Movie> AllMovies = new List<Movie>
        {
            new Movie(){ID = 1, Title = "Some Title 1", Description = "Some Description 1"},
            new Movie(){ID = 2, Title = "Some Title 2", Description = "Some Description 2"}
        };

        [HttpGet]
        public JsonResult Get()
        {
            return new JsonResult(AllMovies);
        }

        [HttpGet("{id}")]
        public JsonResult Get(int id)
        {
            return new JsonResult(AllMovies.Where(a => a.ID == id));
        }
    }
}