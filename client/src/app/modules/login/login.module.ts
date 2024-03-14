import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RegisterComponent } from "./register/register.component";
import { LoginComponent } from "./login/login.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RouterModule, RouterOutlet, Routes } from "@angular/router";
import { UserService } from "../../services/user.service";
import { LecturerService } from "../../services/lecturer.service";
import { HttpClientModule } from "@angular/common/http";
import { AllCoursesComponent } from "../course/all-courses/all-courses.component";


const routes: Routes = [
    { path: "", redirectTo: "login", pathMatch: "full" },
    { path: "courses", component: AllCoursesComponent },
    { path: "register", component: RegisterComponent }
];
@NgModule({

    //declarations:[LoginComponent, RegisterComponent],
    imports: [CommonModule, LoginComponent, RegisterComponent, ReactiveFormsModule,
             FormsModule, RouterOutlet, HttpClientModule, RouterModule.forChild(routes)],
    providers: [UserService, LecturerService],
    exports: [LoginComponent, RegisterComponent, RouterModule]
})
export class LoginModule {

}