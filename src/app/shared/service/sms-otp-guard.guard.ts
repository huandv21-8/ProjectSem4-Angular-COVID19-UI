import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from '@angular/router';
import {Observable} from 'rxjs';
import {SmsService} from './service/sms.service';

@Injectable({
  providedIn: 'root'
})
export class SmsOtpGuardGuard implements CanActivate {
  constructor(private smsService: SmsService, private router: Router) {
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if (!this.smsService.isCheckVerify()) {
      this.router.navigateByUrl('/client/confirm-phone-number');
    }
    return this.smsService.isCheckVerify();
  }

}
