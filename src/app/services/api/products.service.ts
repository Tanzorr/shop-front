import {inject, Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  private basUrl = 'api/products';
  private http = inject(HttpClient);

  public getAll(): Observable<any> {
    return this.http.get(this.basUrl);
  }
}
