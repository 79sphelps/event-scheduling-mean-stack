import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { AuthService } from './auth.service';

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(private auth: AuthService) { }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    if (!this.auth.loggedIn) {
      // Not logged in yet: set auth redirect
      localStorage.setItem('authRedirect', state.url);
    }
    if (this.auth.tokenValid) {
      return true;
    } else {
      this.auth.login();
      return false;
    }
  }

}
