import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';
import { REFERER } from '../../constants';
@Injectable({
  providedIn: 'root'
})
export class LoginGuard implements CanActivate {

  constructor(private authService: AuthService,
              private router: Router
  ) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    const userToken = this.authService.getUserToken();
    if (userToken) {
      return true;
    }

    this.navigateToLoginPage(state.url);
    return false;
  }
  
  navigateToLoginPage(currentUrl?: string): void {
    this.authService.clearStorage();
    this.authService.storeStorage(REFERER, currentUrl);
    this.router.navigate(['/admin/login']);
  }
}
