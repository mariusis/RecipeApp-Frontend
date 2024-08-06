import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { AuthService } from '../../auth/auth.service';
import { FormsModule } from '@angular/forms';

import { Authentication } from '../../models/authentication.model';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  username: string = '';
  password: string = '';

  constructor(private authService: AuthService, private router: Router) {}

  login() {
    const authentication: Authentication = {
      email: this.username,
      password: this.password,
    };
    this.authService.login(authentication).subscribe(
      (response) => {
        console.log('Login successful:', response);
        this.router.navigate(['/']);
      },
      (error) => {
        console.error('Login failed:', error);
      }
    );
  }
}
