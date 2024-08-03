import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LocalStorageService } from '../services/local-storage.service';
import { catchError, tap } from 'rxjs/operators';
import { Authentication } from '../models/authentication.model';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  private apiUrl = 'http://localhost:8080/api/v1/auth/authenticate'; // Replace with your API endpoint
  private loggedIn = new BehaviorSubject<boolean>(false);

  constructor(
    private http: HttpClient,
    private localStorageService: LocalStorageService,
    private router: Router
  ) {}

  // Observable to check login status
  get isLoggedIn(): Observable<boolean> {
    return this.loggedIn.asObservable();
  }

  // Login method
  login(authentication: Authentication): Observable<any> {
    console.log('Logging in...');
    return this.http.post<any>(this.apiUrl, authentication).pipe(
      tap((response) => {
        console.log(response);
        const token = response.token; // Adjust based on your API response
        this.localStorageService.setItem('jwtToken', token);
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
    this.localStorageService.removeItem('jwtToken');
    this.loggedIn.next(false);
  }

  private handleError(error: any) {
    console.error('An error occurred', error);
    return throwError('Login failed; please try again later.');
  }
}
