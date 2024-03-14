import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { Course } from '../../../models/course.model';
import { CourseService } from '../../../services/course.service';
import { error } from 'console';
import { Router } from '@angular/router';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-course-details',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatButtonModule, MatInputModule, MatButtonModule, RouterModule],
  templateUrl: './course-details.component.html',
  styleUrl: './course-details.component.css'
})
export class CourseDetailsComponent {
  idCourseDetails?: number;
  courseDetails?: Course;

  constructor(private _courseService: CourseService, private _router:Router) {
  }

  ngOnInit() {
    this.idCourseDetails = Number(localStorage.getItem("idCourseDetails"));
    this._courseService.getCourseById(this.idCourseDetails).subscribe(
      courseDetails=>this.courseDetails=courseDetails,
      error=>console.log(error)
    );
  }

  functionEditCourse(){
    this._router.navigate(['/editCourse', this.courseDetails])
  }
}
