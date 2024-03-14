import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { LoginModule } from './modules/login/login.module';
import { CourseModule } from './modules/course/course.module';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, CourseModule, LoginModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular-project';

  isConnect: boolean=false;
  constructor(private router: Router) {
    // הרשמה לאירוע NavigationEnd המתרחש בכל פעם שיש שינוי בניווט באפליקציה
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        // בכל פעם שיש שינוי בניווט, בדוק אם המשתמש מחובר
        this.checkUserConnection();
      }
    });
  }

  // בדיקה האם המשתמש מחובר
  checkUserConnection(): void {
    const storedJsonString = localStorage.getItem('isConnect');
    const isConnect = JSON.parse(storedJsonString!);
    this.isConnect = isConnect;
  }
  logOut(){
    const jsonString = JSON.stringify(false);
    localStorage.setItem('isConnect', jsonString);
    this.isConnect=false;
    const jsonString1 = JSON.stringify(null);
   localStorage.setItem('currentUser', jsonString1);
    this.router.navigate(['/']);
  }
  // shouldShowRouterOutlet(): boolean {
  //   const currentUrl = this.router.url;
  //   return currentUrl !== '/';
  // }
}


