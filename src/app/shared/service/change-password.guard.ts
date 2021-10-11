import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from '@angular/router';
import {Observable} from 'rxjs';
import {ResetPassService} from '../../admin/resetPassword/reset-pass.service';

@Injectable({
  providedIn: 'root'
})
export class ChangePasswordGuard implements CanActivate {
  constructor(private resetPassService: ResetPassService, private router: Router) {
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if (!this.resetPassService.isVerifyOtpEmail()) {
      this.router.navigateByUrl('/reset-password');
    }
    return this.resetPassService.isVerifyOtpEmail();
  }

}
