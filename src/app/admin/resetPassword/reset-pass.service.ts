import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {LocalStorageService} from 'ngx-webstorage';
import {PhoneRequest} from '../../shared/model/request/phoneRequest';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SmsService {
  constructor(private http: HttpClient, private localStorage: LocalStorageService) {
  }
  checkEmail(phoneRequest: string): Observable<any> {
    return this.http.post('http://localhost:8082/v1/sms/mobile', phoneRequest);
  }
}
