import { CanActivateFn } from '@angular/router';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class SignInGuard {
  constructor(private router: Router, private cookieService: CookieService) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {
      const sessionUser = this.cookieService.get('session_user');

      if(sessionUser){
        return true;
      }
      else {
        this.router.navigate['/session/sign-in']
        return false;
      }
    }
}

//Creates the guard
// export const isSignInGuard: CanActivateFn = (route: ActivatedRouteSnapshot, state: RouterStateSnapshot):boolean => {
//   //allows for the router to be useable
//   let _router = Inject(Router)
//   //grabs the isLoggedIn item from local storage
//   let isLoggedIn = localStorage.getItem('isLoggedIn')
//   //checks to see if user is logged in. If not, returns them to the login page
//   if(!isLoggedIn) {
//     _router.navigate([''])
//     return false;
//   }

//   return Inject(SignInGuard).canActivate(route, state)
// };
