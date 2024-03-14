using Microsoft.AspNetCore.Mvc;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace CoursesService.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UserController : ControllerBase
    {
        static List<User> users = new List<User>()
        {
            new User{Id=1, Address="Ramchal", Email="r0556721978@gmail.com", Name="Ruthy", Password="1"},
            new User{Id=2, Address="Ramchal", Email="r0556721978@gmail.com", Name="Yael", Password="1"}
        };
        // GET: api/<UserController>
        [HttpGet]
        public IEnumerable<User> Get()
        {
            return users;
        }

        // GET api/<UserController>/5
        [HttpGet("{id}")]
        public User Get(int id)
        {
            User user = users.Find(x => x.Id == id);
            return user;
        }

        [HttpGet("byname/{name}")]
        public User Get(string name)
        {
            User user=users.Find(x => x.Name == name);
            return user;
        }

        // POST api/<UserController>
        [HttpPost]
        public User Post([FromBody] User user)
        {
            users.Add(user);
            return user;
        }

        // PUT api/<UserController>/5
        [HttpPut("{id}")]
        public User Put(int id, [FromBody] User userToUpdate)
        {
            User user = users.Find(x => x.Id == id);
            user.Email = userToUpdate.Email;
            user.Name = userToUpdate.Name;
            user.Password = userToUpdate.Password;
            user.Password = userToUpdate.Password;
            Delete(id);
            users.Add(user);
            return userToUpdate;
        }

        // DELETE api/<UserController>/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
            User user = users.Find(x => x.Id == id);
            users.Remove(user);
        }
    }
}
