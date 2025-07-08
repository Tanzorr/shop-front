import {inject, Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environments-local';
import {Observable} from 'rxjs';
import {CategoryResponse} from '../../models/category';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {
  private basUrl = `${environment.apiUrl}/categories`;
  private http = inject(HttpClient);

  public getAll(params?: any): Observable<CategoryResponse> {
    return this.http.get<CategoryResponse>(`${this.basUrl}?${params ? params : ''}`);
  }
}
