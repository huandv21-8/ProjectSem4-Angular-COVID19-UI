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


  managementAccountById(optionChoose: string, idChoiceAccount: number): Observable<any> {
    return this.http.delete(`http://localhost:8082/v1/declare/managementAccount/${idChoiceAccount}?optionChoose=${optionChoose}`);
  }


  managementAllAccountById(optionChoose: string, listIdAccountCheckbox: Array<number>): Observable<any> {
    const params = new HttpParams()
      .set('optionChoose', optionChoose);
    return this.http.post('http://localhost:8082/v1/declare/managementAllAccount', listIdAccountCheckbox, {params});
  }
}
