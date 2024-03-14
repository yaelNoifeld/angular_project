import { Component, Output, EventEmitter } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { UserService } from '../../../services/user.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { RegisterComponent } from '../register/register.component';
import { MatInputModule } from '@angular/material/input'
import { MatButtonModule } from '@angular/material/button';
import { User } from '../../../models/user.model';
import { LecturerService } from '../../../services/lecturer.service';
import { Lecturer } from '../../../models/lecturer.model';
import { error } from 'console';


@Component({
  selector: 'app-login',
  standalone: true,
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
  providers: [UserService],
  imports: [CommonModule, ReactiveFormsModule, RegisterComponent, MatInputModule, MatButtonModule]
})
export class LoginComponent {
  users?: User[];
  lecturers?: Lecturer[];
  isLecturer: boolean = false;
  isNewUser: boolean = false;

  loginForm: FormGroup = new FormGroup({
    "userName": new FormControl(),
    "password": new FormControl(),
    "course": new FormControl()
  });

  constructor(private _userService: UserService, private _router: Router,
    private _lecturerService: LecturerService) {
  }

  ngOnInit() {
    this._userService.getUsers().subscribe(
      users => this.users = users,
      error => console.log(error));

    this._lecturerService.getLecturers().subscribe(
      lecturers => this.lecturers = lecturers,
      error => console.log(error));
  }

  async functionLogin() {
    try {
      const user = await this._userService.getUserByName(this.loginForm.value.userName).toPromise();
      if (user === null) {
        localStorage.setItem('userName', this.loginForm.value.userName);
        this._router.navigate(['/register']);
        console.log("!user!password")
      }
      else {
        if (user?.password !== this.loginForm.value.password) {
          alert("Enter your details again!");
          console.log("user!password")
        } 
        else {
          sessionStorage.setItem('user', this.loginForm.value);
          this._router.navigate(['/courses']);
          console.log("user password")
        }
      }
    }
    catch (error) {
      console.log(error);
    }
  }

  async functionLecturerEnter() {
    const lecturer = await this._lecturerService.getLecturerByName(this.loginForm.value.userName).toPromise();
    if (lecturer != null)
      this.isLecturer = !this.isLecturer;
  }
}

