using Microsoft.AspNetCore.Mvc;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace CoursesService.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CoursesController : ControllerBase
    {
        static List<Courses> courses = new List<Courses>()
        {new Courses{Id=1, CategoryId=1, ImagePath="assets\\course1.jpg", LecturerId=1,LessonsAmount=200,Name="COMPUTER COURSE",Syllabus=[
    "Want", "to", "work", "in", "high-tech?", "Computer", "courses", "will", "train", "you", "in", "a", "variety", "of", "technological", "professions", "and",
    "allow", "you", "to", "be", "accepted", "into", "a", "prestigious", "job", "after", "a", "relatively", "short", "training."
],WayLearning=WayLearningEnum.zoom,StartLearningDate=new DateTime(12,12,12)}
        };
        // GET: api/<CoursesController>
        [HttpGet]
        public IEnumerable<Courses> Get()
        {
            return courses;
        }

        // GET api/<CoursesController>/5
        [HttpGet("{id}")]
        public Courses Get(int id)
        {
            Courses course = courses.Find(x => x.Id == id);
            return course;
        }

        // POST api/<CoursesController>
        [HttpPost]
        public Courses Post([FromBody] Courses course)
        {
            courses.Add(course);
            return course;
        }

        // PUT api/<CoursesController>/5
        [HttpPut("{id}")]
        public Courses Put(int id, [FromBody] Courses courseToUpdate)
        {
            Courses course = courses.Find(x => x.Id == id);
            course.StartLearningDate = courseToUpdate.StartLearningDate;
            course.Name = courseToUpdate.Name;
            course.ImagePath = courseToUpdate.ImagePath;
            course.CategoryId = courseToUpdate.CategoryId;
            course.WayLearning = courseToUpdate.WayLearning;
            course.LecturerId = courseToUpdate.LecturerId;
            course.Syllabus = courseToUpdate.Syllabus;
            course.LessonsAmount = courseToUpdate.LessonsAmount;
            Delete(id);
            courses.Add(course);
            return course;
        }

        // DELETE api/<CoursesController>/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
            Courses course = courses.Find(x => x.Id == id);
            courses.Remove(course);
        }
    }
}
