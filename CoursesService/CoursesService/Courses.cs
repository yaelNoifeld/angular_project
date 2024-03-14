namespace CoursesService
{
    public enum WayLearningEnum { frontal, zoom};
    public class Courses
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public int CategoryId {  get; set; }
        public int LessonsAmount { get; set; }
        public DateTime StartLearningDate { get; set; }
        public string[]Syllabus { get; set; }
        public WayLearningEnum WayLearning { get; set; }
        public int LecturerId {  get; set; }
        public string ImagePath {  get; set; }
    }
}
