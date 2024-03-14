using Microsoft.AspNetCore.Mvc;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace CoursesService.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class LecturerController : ControllerBase
    {
        static List<Lecturer> lecturers = new List<Lecturer>()
        {
            new Lecturer{Id=1, Address="Ramchal", Email="r0556721978@gmail.com", Name="Yael", Password="1"}
            //new Lecturer{Id=1, Address="Ramchal", Email="r0556721978@gmail.com", Name="Ruthy", Password="1"}
        };
        // GET: api/<LecturerController>
        [HttpGet]
        public IEnumerable<Lecturer> Get()
        {
            return lecturers;
        }

        // GET api/<LecturerController>/5
        [HttpGet("{id}")]
        public Lecturer Get(int id)
        {
            Lecturer lecturer = lecturers.Find(x => x.Id == id);
            return lecturer;
        }

        [HttpGet("byname/{name}")]
        public Lecturer Get(string name)
        {
            Lecturer lecturer = lecturers.Find(x => x.Name == name);
            return lecturer;
        }

        // POST api/<LecturerController>
        [HttpPost]
        public Lecturer Post([FromBody] Lecturer lecturer)
        {
            lecturers.Add(lecturer);
            return lecturer;
        }

        // PUT api/<LecturerController>/5
        [HttpPut("{id}")]
        public Lecturer Put(int id, [FromBody] Lecturer lecturerToUpdate)
        {
            Lecturer lecturer = lecturers.Find(x => x.Id == id);
            lecturer.Address = lecturerToUpdate.Address;
            lecturer.Email = lecturerToUpdate.Email;
            lecturer.Name = lecturerToUpdate.Name;
            lecturer.Password = lecturerToUpdate.Password;
            Delete(id);
            lecturers.Add(lecturer);
            return lecturer;
        }

        // DELETE api/<LecturerController>/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
            Lecturer lecturer = lecturers.Find(x => x.Id == id);
            lecturers.Remove(lecturer);
        }
    }
}
