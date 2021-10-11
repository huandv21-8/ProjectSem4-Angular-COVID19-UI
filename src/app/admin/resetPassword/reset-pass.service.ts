import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {LocalStorageService} from 'ngx-webstorage';
import {Observable} from 'rxjs';
import {ChangePasswordRequest, CheckEmailResetpassword, OtpEmail} from '../../shared/model/request/checkEmailResetpassword';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ResetPassService {
  constructor(private http: HttpClient, private localStorage: LocalStorageService) {
  }

  checkEmail(checkEmailResetPassword: CheckEmailResetpassword): Observable<boolean> {
    return this.http.post<boolean>('http://localhost:8082/v1/auth/checkAccount', checkEmailResetPassword);
  }

  sendOtpEmail(email: string): Observable<boolean> {
    const params = new HttpParams()
      .set('email', email);
    return this.http.post<boolean>('http://localhost:8082/v1/auth/sendOtpEmail', null, {params});
  }

  verifyOtpEmail(otp: OtpEmail): Observable<any> {
    return this.http.post<boolean>('http://localhost:8082/v1/auth/verifyOtpEmail', otp).pipe(map(response => {
      this.localStorage.store('isCheckVerifyOtpEmail', response);

    }));
  }

  changePass(changePasswordRequest: ChangePasswordRequest): Observable<boolean> {
    return this.http.post<boolean>('http://localhost:8082/v1/auth/changePassword', changePasswordRequest);
  }

  isVerifyOtpEmail(): boolean {
    return (this.localStorage.retrieve('isCheckVerifyOtpEmail'));
  }
}
