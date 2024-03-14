using Microsoft.AspNetCore.Mvc;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace CoursesService.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CategoryController : ControllerBase
    {
        static List<Category> categories = new List<Category>()
        {
            new Category{Id=1,IconPath="path", Name="programming"},
            new Category{Id=2,IconPath="path", Name="high tech"},
            new Category{Id=3,IconPath="path", Name="education"}

        };
        // GET: api/<CategoryController>
        [HttpGet]
        public IEnumerable<Category> Get()
        {
            return categories;
        }

        // GET api/<CategoryController>/5
        [HttpGet("{id}")]
        public Category Get(int id)
        {
            Category category = categories.Find(x => x.Id == id);
            return category;
        }

        // POST api/<CategoryController>
        [HttpPost]
        public Category Post([FromBody] Category category)
        {
            categories.Add(category);
            return category;
        }

        // PUT api/<CategoryController>/5
        [HttpPut("{id}")]
        public Category Put(int id, [FromBody] Category categoryToUpdate)
        {
            Category category = categories.Find(x => x.Id == id);
            category.IconPath = categoryToUpdate.IconPath;
            category.Name = categoryToUpdate.Name;
            Delete(id);
            categories.Add(category);
            return category;
        }

        // DELETE api/<CategoryController>/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
            Category category = categories.Find(x => x.Id == id);
            categories.Remove(category);
        }
    }
}
