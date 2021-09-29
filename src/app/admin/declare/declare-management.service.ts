import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs';

import {AccountByAllResponse} from '../../shared/model/response/accountByAllResponse';


@Injectable({
  providedIn: 'root'
})
export class DeclareManagementService {
  constructor(private http: HttpClient) {
  }

  getAllAccount(): Observable<Array<AccountByAllResponse>> {
    return this.http.get<Array<AccountByAllResponse>>('http://localhost:8082/v1/declare/listAccount');
  }



}
