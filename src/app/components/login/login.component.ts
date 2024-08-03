import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LoginService } from '../../auth/login.service';
import { FormsModule } from '@angular/forms';
import { LocalStorageService } from '../../services/local-storage.service';
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

  constructor(private loginService: LoginService) {}

  login() {
    const authentication: Authentication = {
      email: this.username,
      password: this.password,
    };
    this.loginService.login(authentication).subscribe(
      (response) => {
        console.log('Login successful:', response);
      },
      (error) => {
        console.error('Login failed:', error);
      }
    );
  }
}
