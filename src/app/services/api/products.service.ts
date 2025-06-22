import {inject, Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {ProductResponse} from '../../models/products';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  private basUrl = 'http://127.0.0.1:8000/api/products';
  private http = inject(HttpClient);

  public getAll(): Observable<ProductResponse> {
    return this.http.get<ProductResponse>(this.basUrl);
  }
}
