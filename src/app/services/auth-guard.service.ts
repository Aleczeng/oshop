import {Injectable} from '@angular/core';
import {CanActivate, Router, RouterStateSnapshot} from '@angular/router';
import {AuthService} from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {
  user;

  constructor(private authService: AuthService,
              private router: Router) {
  }

  canActivate(route, state: RouterStateSnapshot) {
    this.authService.user$.subscribe(user => this.user = user);
    if (this.user) {
      return true;
    } else {
      this.router.navigate(['/login'], {queryParams: {returnUrl: state.url}}).then();
      return false;
    }
  }
}
