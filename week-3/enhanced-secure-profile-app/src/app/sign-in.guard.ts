import { ActivatedRouteSnapshot, Router, RouterStateSnapshot } from '@angular/router';
import { Injectable, inject } from '@angular/core'
import { CanActivateFn } from '@angular/router';

@Injectable({
  providedIn: 'root'
})

class SignInGuard {
  constructor(private router: Router) {}
  
  isLoggedIn: boolean; 

  canActivate(
    route: ActivatedRouteSnapshot, 
    state: RouterStateSnapshot): boolean {
      return true; 
    }
}

export const isSignInGuard: CanActivateFn = (route: ActivatedRouteSnapshot, state: RouterStateSnapshot):boolean => {
  
  return inject(SignInGuard).canActivate(route, state)
};

