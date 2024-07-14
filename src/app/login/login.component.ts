// login.component.ts
import { Component } from '@angular/core';
import { LoginService } from '../service/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username: string = '';
  password: string = '';

  constructor(private loginService: LoginService, private router: Router) {}

  onSubmit() {
    // Check if username or password fields are empty
    if (!this.username.trim() || !this.password.trim()) {
      console.error('Username and password are required');
      // Optionally, display an error message to the user here
      return; // Prevent form submission
    }
    this.loginService.login(this.username, this.password).subscribe(result => {
      console.log( "result role login ", result);
      // Check user role and redirect accordingly
      if (result.role === 'admin') {
        this.router.navigate(['/admin']); // Redirect to AdminComponent
      } else if (result.role === 'user') {
        this.router.navigate(['/home']); // Redirect to UserComponent
      } else {
        this.router.navigate(['/unauthorized']); // Redirect to an UnauthorizedComponent or similar
      }
      // Inside onSubmit() method after successful login
      this.loginService.storeUserRole(result.role);
    }, error => {
      console.error(error);
      // Optionally, handle login error, e.g., show an error message
    });
  }
}