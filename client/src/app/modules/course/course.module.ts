import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { AddCourseComponent } from "./add-course/add-course.component";
import { AllCoursesComponent } from "./all-courses/all-courses.component";
import { CourseDetailsComponent } from "./course-details/course-details.component";
import { EditCourseComponent } from "./edit-course/edit-course.component";
import { CourseService } from "../../services/course.service";
import { CategoryService } from "../../services/category.service";
import { RouterModule, Routes } from "@angular/router";
import { LoginComponent } from "../login/login/login.component";

const routes: Routes = [
    { path: "", redirectTo: "login", pathMatch: "full" },
    { path: "addCourse", component: AddCourseComponent },
    { path: "courseDetails", component: CourseDetailsComponent },
    {path:"editCourse", component:EditCourseComponent},
    { path: "**", component: LoginComponent }
];

@NgModule({
    // declarations:[ AddCourseComponent, AllCoursesComponent, CourseDetailsComponent, EditCourseComponent],
    imports: [CommonModule, AddCourseComponent, AllCoursesComponent,
                 CourseDetailsComponent, EditCourseComponent, RouterModule.forChild(routes)],
    providers: [CourseService, CategoryService],
    exports: [AddCourseComponent, AllCoursesComponent, EditCourseComponent]
})
export class CourseModule {

}