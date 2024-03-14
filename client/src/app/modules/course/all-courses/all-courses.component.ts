import { Component } from '@angular/core';
import { CourseDetailsComponent } from '../course-details/course-details.component';
import { CommonModule } from '@angular/common';
import { CourseService } from '../../../services/course.service';
import { Course } from '../../../models/course.model';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { Router } from '@angular/router';

@Component({
  selector: 'app-all-courses',
  standalone: true,
  imports: [CommonModule, CourseDetailsComponent, MatCardModule, MatButtonModule],
  templateUrl: './all-courses.component.html',
  styleUrl: './all-courses.component.css'
})
export class AllCoursesComponent {
  courses: Course[] = [];
  isLecturer: boolean | null = null;
  wayLearning?: string;

  constructor(private _courseService: CourseService, private _router: Router) {
    // const lecturerString = localStorage.getItem('isLecturer');
    // console.log("isLecturer", this.isLecturer)
    // if (lecturerString !== null) {
    //   this.isLecturer = lecture rString === 'true';
    //   console.log("isLecturer", this.isLecturer)
    // }
  }

  functionPressAddCourse() {
    this._router.navigate(['/addCourse']);
  }

  ngOnInit() {
    this._courseService.getCourses().subscribe(
      coursesServer => this.courses = coursesServer,
      error => console.log(error));

    console.log("isLecturer", this.isLecturer);
  }

  functionCourseDetails(courseId: number) {
    localStorage.setItem('idCourseDetails', courseId.toString());
    this._router.navigate(['/courseDetails']);
  }
  functionWayLearning(number: number) {
    if (number === 1)
      return "ZOOM";
    else
      return "FRONTAL";
  }
}
