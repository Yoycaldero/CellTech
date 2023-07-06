import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { observableToBeFn } from 'rxjs/internal/testing/TestScheduler';
import { Products } from 'src/app/models/product.modul';

@Injectable({
  providedIn: 'root'
})
export class ConnectionService {

  url:string;

  constructor(private Http: HttpClient) { 
    this.url="http://localhost:3002/products";
  }
  getProducts(): Observable<any>{
    return this.Http.get(this.url)  
  }

  getProductbyId(id:number):Observable<any>{
    return this.Http.get(this.url+"/"+id)  
  }
}
