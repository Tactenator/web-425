/**
 * Name: Trevor McLaurine
 * Date: 8/24/2023
 * Title: Sign-In.guard.ts
 * Description: Routing guard file
 */

import { ActivatedRouteSnapshot, Router, RouterStateSnapshot } from '@angular/router';
import { Injectable, inject } from '@angular/core'
import { CanActivateFn } from '@angular/router';

//allows the class to be injectable
@Injectable({
  providedIn: 'root'
})

//constructos the SignInGuard class, creates the private router and creates the canactivate function
class SignInGuard {
  constructor(private router: Router) {}
  
  isLoggedIn: boolean; 

  canActivate(
    route: ActivatedRouteSnapshot, 
    state: RouterStateSnapshot): boolean {
      return true; 
    }
}

//Creates the guard
export const isSignInGuard: CanActivateFn = (route: ActivatedRouteSnapshot, state: RouterStateSnapshot):boolean => {
  //allows for the router to be useable
  let _router = inject(Router)
  //grabs the isLoggedIn item from local storage
  let isLoggedIn = localStorage.getItem('isLoggedIn')
  //checks to see if user is logged in. If not, returns them to the login page
  if(!isLoggedIn) {
    _router.navigate([''])
    return false;
  }
  
  return inject(SignInGuard).canActivate(route, state)
};

