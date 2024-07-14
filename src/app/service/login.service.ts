import { Injectable } from '@angular/core'; 
import { Observable, of } from 'rxjs';
import { UserModel } from '../model/user.model';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  // Mock user data
  private mockUsers: UserModel[] = [
    { username: 'admin', password: 'admin', token: 'token123', role: 'admin' },
      { username: 'user', password: 'user', token: 'token456', role: 'user' }
    
  ];
  
  constructor() {}

  login(username: string, password: string): Observable<any> {    

    // Find the user
    const user = this.mockUsers.find(u => u.username === username && u.password === password);

    if (user) {
      // Simulate a successful login
      return of({ success: true, role: user.role });
    } else {
      // Simulate a login failure
      return of({ success: false, message: 'Username or password is incorrect' });
    }
  }

  // Inside your login service or a separate auth service
    storeUserRole(role: string) {
      localStorage.setItem('userRole', role);
    }

    getUserRole() {
      return localStorage.getItem('userRole');
    }
}
