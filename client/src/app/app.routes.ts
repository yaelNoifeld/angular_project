import { Routes } from '@angular/router';
import { LoginComponent } from './modules/login/login/login.component';
import { AllCoursesComponent } from './modules/course/all-courses/all-courses.component';
import { RegisterComponent } from './modules/login/register/register.component';
import { AddCourseComponent } from './modules/course/add-course/add-course.component';
import { EditCourseComponent } from './modules/course/edit-course/edit-course.component';
import { CourseDetailsComponent } from './modules/course/course-details/course-details.component';
import { AuthGuardService } from './services/auth-guard.service';

export const routes: Routes = [
    { path: "", redirectTo: "login", pathMatch: "full" },
    { path: "login", component: LoginComponent },
    { path: "courses", component: AllCoursesComponent },
    { path: "register", component: RegisterComponent },
    { path: "addCourse", component: AddCourseComponent },
    { path: "courseDetails", component: CourseDetailsComponent },
    { path: "editCourse", component: EditCourseComponent },
    { path: "details", component: CourseDetailsComponent, canActivate: [AuthGuardService] },
    { path: "**", component: LoginComponent }
];