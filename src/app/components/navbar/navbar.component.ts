import { Component } from '@angular/core';
import { MatToolbar } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { NgFor, NgIf } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AuthService } from '../../auth/auth.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [
    MatToolbar,
    MatIconModule,
    MatButtonModule,
    NgFor,
    NgIf,
    RouterModule,
  ],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
})
export class NavbarComponent {
  constructor(private authService: AuthService) {}

  isLoggedIn: boolean = true; // Placeholder for user authentication status

  ngOnInit(): void {
    this.authService.isLoggedIn.subscribe((isLoggedIn) => {
      this.isLoggedIn = isLoggedIn;
    });
  }

  toggleSidenav(): void {
    // Implement your toggle side navigation logic here
    console.log('Toggling side navigation');
  }

  logout(): void {
    // Implement your logout logic here
    this.authService.logout();
  }
}
