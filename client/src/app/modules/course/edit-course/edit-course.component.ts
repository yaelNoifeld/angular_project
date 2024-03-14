import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-edit-course',
  standalone: true,
  imports: [],
  templateUrl: './edit-course.component.html',
  styleUrl: './edit-course.component.css'
})
export class EditCourseComponent {

  editCourseForm: FormGroup = new FormGroup({
    "name": new FormControl(),
    "categoryId":new FormControl(),
    "amountLessons":new FormControl(),
    "startDateLearning":new FormControl(),
    "syllabus":new FormControl(),
    "wayLearning":new FormControl(),
    "lecturerId":new FormControl(),
    "imagePath":new FormControl()
  })
}
