import {inject, Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {ProductResponse} from '../../models/products';
import {environment} from '../../../environments/environments-local';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  private basUrl = `${environment.apiUrl}/products`;
  private http = inject(HttpClient);

  public getAll(params:any): Observable<ProductResponse> {
    return this.http.get<ProductResponse>(`${this.basUrl}?${params}`);
  }
}
