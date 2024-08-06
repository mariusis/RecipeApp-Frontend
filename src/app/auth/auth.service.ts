import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, tap } from 'rxjs/operators';
import { Authentication } from '../models/authentication.model';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable, throwError } from 'rxjs';
import { environment } from '../../environments/environment';
import { RegisterRequest } from '../models/registerRequest.model';
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private apiUrl = environment.apiUrl + '/v1/auth'; // Replace with your API endpoint
  private loggedIn = new BehaviorSubject<boolean>(false);

  constructor(private http: HttpClient, private router: Router) {}

  // Observable to check login status
  get isLoggedIn(): Observable<boolean> {
    return this.loggedIn.asObservable();
  }

  // Login method
  login(authentication: Authentication): Observable<any> {
    console.log('Logging in...');
    return this.http
      .post<any>(this.apiUrl + '/authenticate', authentication)
      .pipe(
        tap((response) => {
          const token = response.token; // Adjust based on your API response
          localStorage.setItem('jwtToken', token);
          this.loggedIn.next(true);
          console.log(token);
        }),
        catchError((error) => {
          console.error('Login error:', error);
          return throwError(error);
        })
      );
  }

  // Logout method
  logout(): void {
    localStorage.removeItem('jwtToken');
    this.loggedIn.next(false);
  }

  private handleError(error: any) {
    console.error('An error occurred', error);
    return throwError('Login failed; please try again later.');
  }

  getUserID(): Observable<any> {
    const token = localStorage.getItem('jwtToken');
    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`,
    });

    return this.http.get<any>(this.apiUrl + '/extractUserId', { headers }).pipe(
      tap((response) => {
        console.log(response);
      }),
      catchError((error) => {
        console.error('Login error:', error);
        return throwError(error);
      })
    );
  }

  register(registerRequest: RegisterRequest) {
    return this.http.post<any>(this.apiUrl + '/register', registerRequest).pipe(
      tap((response) => {
        console.log(response);
      }),
      catchError((error) => {
        console.error('Login error:', error);
        return throwError(error);
      })
    );
  }
}
