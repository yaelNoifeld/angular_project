import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Lecturer } from '../models/lecturer.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LecturerService {
  path: string = "https://localhost:7167/api/Lecturer";
  lecturers?: Lecturer[];
  lecturer: Lecturer = new Lecturer();
  id: number = 0;
  name: string = "";

  getLecturers(): Observable<Lecturer[]> {
    return this.http.get<Lecturer[]>(`${this.path}`);
  }

  getLecturerByName(name: string): Observable<Lecturer> {
    return this.http.get<Lecturer>(`${this.path}/byname/${name}`);
  }

  postLecturers(lecturer: Lecturer): Observable<Lecturer> {
    return this.http.post<Lecturer>(`${this.path}`, lecturer);
  }

  putLecturer(id: number, lecturer: Lecturer): Observable<Lecturer> {
    return this.http.put<Lecturer>(`${this.path}/${id}`, lecturer);
  }

  deleteLecturer(id: number): Observable<void> {
    return this.http.delete<void>(`${this.path}/${id}`);
  }

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.getLecturers().subscribe(
      lecturers => this.lecturers,
      error => console.log(error));

    this.getLecturerByName(this.name).subscribe(
      lecturer => this.lecturer = lecturer,
      err => console.log(err)
    );

    this.postLecturers(this.lecturer).subscribe(
      lecturerServer => this.lecturer = lecturerServer,
      error => console.log(error));

    this.putLecturer(this.id, this.lecturer).subscribe(
      lecturerServer => this.lecturer = lecturerServer,
      error => console.log(error)
    );

    this.deleteLecturer(this.id).subscribe(
      () => console.log("lecturer deleted successfully"),
      error => console.log(error)
    );
  }
}