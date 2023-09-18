import { ActivatedRoute, CanActivateFn } from '@angular/router';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class SignInGuard {
  constructor(private router: Router, private route: ActivatedRoute, private cookieService: CookieService) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {
      return true;
    }
}


export const isSignInGuard: CanActivateFn = (route: ActivatedRouteSnapshot, state: RouterStateSnapshot):boolean => {
  const _router = Inject(Router)
  const _cookieService = Inject(CookieService)
  const sessionUser = _cookieService['session-user']
  if(sessionUser){
    return Inject(SignInGuard).canActivate(route, state)
  }
  else {
    _router.navigate['/session/sign-in']
    return false;
  }

  // return Inject(SignInGuard).canActivate(route, state)
};
