import { Component, Input } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { UserService } from '../../../services/user.service';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../../../models/user.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  users?: User[];
  isExpanded: boolean = false;
  showForm: boolean = true;
  nameFromLogin: string = "";

  registerForm: FormGroup = new FormGroup({
    "name": new FormControl(localStorage.getItem("userName")),
    "address": new FormControl("", [Validators.required]),
    "email": new FormControl("", [Validators.required, Validators.email]),
    "password": new FormControl("", [Validators.min(4), Validators.required, Validators.maxLength(8)])
  })

  constructor(private _userService: UserService, private _router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this._userService.getUsers().subscribe(
      users => this.users = users,
      error => console.log(error)
    );
  }

  functionAddUser() {
    this._userService.postUser(this.registerForm.value).subscribe(
      userServer => console.log(userServer),
      error => console.log(error)
    );
    sessionStorage.setItem("user", this.registerForm.value);
    localStorage.setItem('isLecturer', this.registerForm.value.userName);
  
    this._router.navigate(['/courses']);
  }

  functionInputUserName(inputUserName: string) {
    this.registerForm.value.userName = inputUserName;
  }
}
