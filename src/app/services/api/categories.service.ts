import {inject, Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environments-local';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {
  private basUrl = `${environment.apiUrl}/categories`;
  private http = inject(HttpClient);

  public getAll(params: any) {
    return this.http.get(`${this.basUrl}?${params}`);
  }
}
