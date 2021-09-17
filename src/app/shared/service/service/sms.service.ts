import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {PhoneRequest} from '../../model/request/phoneRequest';
import {map} from 'rxjs/operators';
import {LocalStorageService} from 'ngx-webstorage';
import {OtpRequest} from '../../model/request/otpRequest';


@Injectable({
  providedIn: 'root'
})
export class SmsService {
  constructor(private http: HttpClient, private localStorage: LocalStorageService) {
  }

  sms(phoneRequest: PhoneRequest): Observable<any> {
    return this.http.post('http://localhost:8082/v1/sms/mobile', phoneRequest);
  }

  verifyOtp(otp: OtpRequest): Observable<any> {
    return this.http.post<boolean>('http://localhost:8082/v1/sms/verifyOtp', otp).pipe(map(data => {
      console.log(data);
      this.localStorage.store('isCheckVerify', data);
    }));
  }

  isCheckVerify(): boolean {
    return (this.localStorage.retrieve('isCheckVerify'));
  }


}
