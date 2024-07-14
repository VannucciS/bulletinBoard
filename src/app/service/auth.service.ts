import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  // This example uses localStorage for simplicity. In a real application, you might use a more secure method.
  
  constructor(private router: Router) { }

  // Simulate a login by storing user info
  login(username: string, password: string): boolean {
    // Here, you would typically make an API call to your backend to verify the username and password
    // For this example, we'll just simulate a successful login for any username/password
    localStorage.setItem('user', JSON.stringify({ username: username, role: 'admin' })); // Assuming the role is determined by your backend
    return true;
  }

  // Check if the user is logged in
  isLoggedIn(): boolean {
    const user = localStorage.getItem('user');
    return !!user; // Convert to boolean
  }

  // Get the user's role
  userRole(): string {
    const user = JSON.parse(localStorage.getItem('user') || '{}');
    return user.role || '';
  }

  // Logout the user
  logout(): void {
    localStorage.removeItem('user');
    // Redirect to login or home page
    this.router.navigate(['/login']);
  }
}