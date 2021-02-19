import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(public http: HttpClient) { }

  // API path
  base_path = 'https://reqres.in/api/';


  login(email: string, password: string): Observable<boolean> {
    return this.http.post(this.base_path + 'login', {
      email,
      password
    }).pipe(
      tap((response: any) => localStorage.setItem('token', response?.token)),
      map((response: any) => !!response?.token),
      catchError(() => of(false))
    );
  }

  register(email: string, password: string): Observable<boolean> {
    return this.http.post(this.base_path + 'register', {
      email,
      password
    }).pipe(
      tap((response: any) => localStorage.setItem('token', response?.token)),
      map((response: any) => !!response?.token),
      catchError(() => of(false))
    );
  }

  create(name: string, job: string): Observable<string> {
    return this.http.post(this.base_path + 'users', {
      name,
      job
    }).pipe(
      map((response: any) => response?.createdAt),
    );
  }

  getUserList() {
    return this.http.get(this.base_path + 'users?page=2').pipe(
      map((response: any) => response?.data)
    );
  }

  getUserDetail(id: number): Observable<any> {
    return this.http.get(this.base_path + 'users/' + id).pipe(
      map((response: any) => response?.data)
    );
  }
}
