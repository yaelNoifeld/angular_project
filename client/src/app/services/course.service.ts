import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Course } from '../models/course.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CourseService {
  path: string = "https://localhost:7167/api/Courses";
  courses?: Course[];
  course: Course = new Course();

  id: number = 0;

  getCourses(): Observable<Course[]> {
    return this.http.get<Course[]>(`${this.path}`);
  }

  getCourseById(id:number):Observable<Course>{
    return this.http.get<Course>(`${this.path}/${id}`);
  }

  postCourse(course: Course): Observable<Course> {
    course = {
      "id": 0,
      "name": "string",
      "categoryId": 0,
      "lessonsAmount": 0,
      "startLearningDate": undefined,
      "syllabus": [
        "string"
      ],
      "wayLearning": 0,
      "lecturerId": 0,
      "imagePath": "string"
    }
    return this.http.post<Course>(`${this.path}`, course);
  }

  putCourse(id: number, course: Course): Observable<Course> {

    return this.http.put<Course>(`${this.path}/${id}`, course);
  }

  deleteCourse(id: number): Observable<void> {
    return this.http.delete<void>(`${this.path}/${this.id}`);
  }

  constructor(private http: HttpClient) { }
  ngOnInit() {
    this.getCourses().subscribe(
      courses => this.courses = courses,
      error => console.log(error)
    );

    this.getCourseById(this.id).subscribe(
      course=>this.course=course,
      error=>console.log(error)
    );

    this.postCourse(this.course).subscribe(
      courseServer => this.course = courseServer,
      error => console.log(error)
    );

    this.putCourse(this.id, this.course).subscribe(
      courseServer => this.course = courseServer,
      error => console.log(error)
    );

    this.deleteCourse(this.id).subscribe(
      () => console.log("course deleted successfully"),
      error => console.log(error)
    );
  }
}