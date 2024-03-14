import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Category } from '../models/category.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  path: string = "https://localhost:7167/api/Category";
  categories?: Category[];
  category: Category = new Category();
  id: number = 0;

  getCategories(): Observable<Category[]> {
    return this.http.get<Category[]>(`${this.path}`);
  }

  postCategory(category: Category): Observable<Category> {
    return this.http.post<Category>(`${this.path}`, category);
  }

  putCategory(id: number, category: Category): Observable<Category> {
    return this.http.put<Category>(`${this.path}/${id}`, category);
  }

  deleteCategory(id: number): Observable<void> {
    return this.http.delete<void>(`${this.path}/${id}`);
  }

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.getCategories().subscribe(
      categories => this.categories = categories,
      error => console.log(error)
    );

    this.postCategory(this.category).subscribe(
      categoryServer => this.category = categoryServer,
      error => console.log(error)
    )

    this.putCategory(this.id, this.category).subscribe(
      categoryServer => this.category = categoryServer,
      error => console.log(error)
    )

    this.deleteCategory(this.id).subscribe(
      () => console.log("category deleted successfully"),
      error => console.log(error)
    );
  }
}
