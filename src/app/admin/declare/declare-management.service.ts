import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs';

import {AccountByAllResponse} from '../../shared/model/response/accountByAllResponse';
import {DeclareResponse} from '../../shared/model/response/declareResponse';
import {DeclareRequest} from '../../shared/model/request/declareRequest';


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


  detailAccount(accountId: number): Observable<AccountByAllResponse> {
    return this.http.get<AccountByAllResponse>(`http://localhost:8082/v1/declare/detailAccount?accountId=${accountId}`);
  }

  getAllAccountSearch(name: string, birthDay: any, province: any, phone: string): Observable<Array<AccountByAllResponse>> {
    return this.http.get<Array<AccountByAllResponse>>(`http://localhost:8082/v1/declare/listAccountSearch?name=${name}&birthDay=${birthDay}&provinceId=${province}&phone=${phone}`);
  }

  getAllDeclareByAccountId(accountId: number, orderByDate: string): Observable<Array<DeclareResponse>> {
    return this.http.get<Array<DeclareResponse>>(`http://localhost:8082/v1/declare/listDeclareByAccountId?accountId=${accountId}&orderByDate=${orderByDate}`);
  }

  detailDeclare(declareId: number): Observable<DeclareRequest> {
    return this.http.get<DeclareRequest>(`http://localhost:8082/v1/declare/detailDeclare/${declareId}`);

  }

}
