import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { CourseService } from '../../../services/course.service';
import { CategoryService } from '../../../services/category.service';
import { Category } from '../../../models/category.model';
import { UserService } from '../../../services/user.service';
import { error } from 'console';
import { Course } from '../../../models/course.model';

@Component({
  selector: 'app-add-course',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, MatButtonModule, MatInputModule],
  templateUrl: './add-course.component.html',
  styleUrl: './add-course.component.css'
})
export class AddCourseComponent {
  categories?: Category[];
  courseExample: Course = new Course();
  notEmpty1: boolean = false;
  syllabusItems: string[] = [];


  addCourseForm: FormGroup = new FormGroup({
    "name": new FormControl("", Validators.required),
    "categoryId": new FormControl(""),
    "lessonsAmount": new FormControl("", Validators.min(0)),
    "startLearningDate": new FormControl(""),
    "syllabus": new FormControl(""),
    "wayLearning": new FormControl(""),
    // "lecturerId": new FormControl(""),
    "imagePath": new FormControl("")
  })

  constructor(private _courseService: CourseService,
    private _categoryService: CategoryService, formBuilder: FormBuilder) {
    this.addCourseForm = formBuilder.group({
      name: [''],
      categoryId: [''],
      lessonsAmount: [''],
      startLearningDate: [''],
      syllabus: [''],
      wayLearning: [''],
      lecturerId: [''],
      imagePath: [''],
    })
  }

  ngOnInit() {
    this._categoryService.getCategories().subscribe(
      categories => this.categories = categories,
      err => console.log(err)
    );
  }

  // functionAddCourse() {
  //   this.courseExample.amountLessons=this.addCourseForm.value.amountLessons;
  //   this.courseExample.categoryId=this.addCourseForm.value.categoryId;


  //   this._courseService.postCourse(this.courseExample).subscribe(
  //     courseServer => console.log(courseServer),
  //     error => console.log(error)
  //   );
  // }
  functionAddCourse() {
    if (this.addCourseForm.valid) {
      const newCourse: Course = this.addCourseForm.value;
      this._courseService.postCourse(newCourse).subscribe((course) => {
        debugger  
        console.log('Course added successfully:', course);
        // Reset the form after successful submission
        this.addCourseForm.reset();
      })


      //   .subscribe(
      //     course => {
      //       debugger

      //     },
      //     error => console.log('Error adding course:', error)
      // );
    } else {
      // Mark all form fields as touched to display validation errors
      Object.values(this.addCourseForm.controls).forEach(control => {
        control.markAsTouched();
      });
    }
  }

  onSyllabusChange1(): void {
    if (this.addCourseForm.controls['syllabus'].value !== '') {
      this.notEmpty1 = true;
    }
    else {
      this.notEmpty1 = false;
    }
  }

  onSyllabusChange2(): void {
    if (this.addCourseForm.controls['syllabus'].value !== '') {
      this.syllabusItems.push(this.addCourseForm.controls['syllabus'].value);
      this.addCourseForm.controls['syllabus'].setValue('');
      this.onSyllabusChange1();
    }
    else { }
  }
}
