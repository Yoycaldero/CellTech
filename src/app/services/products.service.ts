import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { env } from 'env';
import { HttpClient } from '@angular/common/http';
import { Products, ProductsResponse } from '../models/product.modul';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  url: string;
  endpoint = env.apiUrl;

  constructor(protected http:HttpClient) {
    this.url = `${this.endpoint}/Product`;
  }

  get(ProductsResponse: string, password: string): Observable<ProductsResponse>{
    const body = { id:0, name: ProductsResponse, password: password, rol:'' }
    return this.http.post<ProductsResponse>(`${this.url}/GetRol`, body)
  }

  getAll(): Observable<ProductsResponse>{
    return this.http.get<ProductsResponse>(`${this.url}`)
  }

  post(ProductsResponse: ProductsResponse): Observable<ProductsResponse>{
    return this.http.post<ProductsResponse>(`${this.url}`, ProductsResponse)
  }

  put(id: number, ProductsResponse: ProductsResponse): Observable<ProductsResponse>{
    return this.http.put<ProductsResponse>(`${this.url}/${id}`, ProductsResponse)
  }

  delete(id: number): Observable<ProductsResponse>{
    return this.http.delete<ProductsResponse>(`${this.url}/${id}`)
  }
}
