import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class RoleGuard implements CanActivate {
  constructor(private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot): boolean {
    const expectedRole = route.data['expectedRole'];
    let currentRole: string | null = null;

    if (typeof localStorage !== 'undefined'){
      currentRole = localStorage.getItem('userRole');
    }

    if (currentRole !== expectedRole) {
      this.router.navigate(['/unauthorized']);
      return false;
    }
    return true;
  }
}
