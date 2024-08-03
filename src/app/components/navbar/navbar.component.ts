import { Component } from '@angular/core';
import { MatToolbar } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { NgFor,NgIf } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [MatToolbar,MatIconModule,MatButtonModule, NgFor,NgIf,RouterModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  
  isLoggedIn: boolean = true; // Placeholder for user authentication status

  toggleSidenav(): void {
    // Implement your toggle side navigation logic here
    console.log('Toggling side navigation');
  }

  logout(): void {
    // Implement your logout logic here
    console.log('Logging out');
  }

}
