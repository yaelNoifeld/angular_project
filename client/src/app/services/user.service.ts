import { Injectable } from '@angular/core';
import { User } from '../models/user.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class UserService {
  path: string = "https://localhost:7167/api/User";
  users?: User[];
  user: User = new User();
  id: number = 0;
  name: string = ""

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(`${this.path}`)
  }

  getUserByName(name: string): Observable<User> {
    return this.http.get<User>(`${this.path}/byname/${name}`)
  }

  postUser(user: User): Observable<User> {
    return this.http.post<User>(`${this.path}`, user);
  }

  putUser(id: number, user: User): Observable<User> {
    return this.http.put<User>(`${this.path}/${id}`, user);
  }

  deleteUser(id: number): Observable<void> {
    return this.http.delete<void>(`/${id}`);
  }

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.getUsers().subscribe(
      user => this.users = user,
      err => { console.log(err); });

    this.getUserByName(this.name).subscribe(
      user => this.user = user,
      err => console.log(err));

    this.postUser(this.user).subscribe(
      userServer => this.user = userServer,
      error => console.log(error));

    this.putUser(this.id, this.user).subscribe(
      userServer => this.user = userServer,
      error => console.log(error));

    this.deleteUser(this.id).subscribe(
      () => console.log("user deleted successfully"),
      error => console.log(error));

  };
}