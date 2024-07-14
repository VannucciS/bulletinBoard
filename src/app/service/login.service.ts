import { Injectable } from '@angular/core'; 
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  
  constructor() {}

  login(username: string, password: string): Observable<any> {
    // Mock user data
    const mockUsers = [
      { username: 'user1', password: 'pass1', token: 'token123' },
      { username: 'user2', password: 'pass2', token: 'token456' }
    ];

    // Find the user
    const user = mockUsers.find(u => u.username === username && u.password === password);

    if (user) {
      // Simulate a successful login
      return of({ success: true, token: user.token });
    } else {
      // Simulate a login failure
      return of({ success: false, message: 'Username or password is incorrect' });
    }
  }
}
