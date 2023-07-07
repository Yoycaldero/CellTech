import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { env } from 'env';
import { HttpClient } from '@angular/common/http';
import { User, UserResponse } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  url: string;
  endpoint = env.apiUrl;

  constructor(protected http:HttpClient) {
    this.url = `${this.endpoint}/User`;
  }

  get(user: string, password: string): Observable<UserResponse>{
    const body = { id:0, name: user, password: password, rol:'' }
    return this.http.post<UserResponse>(`${this.url}/GetRol`, body)
  }

  getAll(): Observable<UserResponse>{
    return this.http.get<UserResponse>(`${this.url}`)
  }

  post(user: User): Observable<User>{
    return this.http.post<User>(`${this.url}`, user)
  }

  put(id: number, user: User): Observable<User>{
    return this.http.put<User>(`${this.url}/${id}`, user)
  }

  delete(id: number): Observable<User>{
    return this.http.delete<User>(`${this.url}/${id}`)
  }
}
