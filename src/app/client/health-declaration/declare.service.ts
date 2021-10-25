import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs';
import {DeclareRequest} from '../../shared/model/request/declareRequest';


@Injectable({
  providedIn: 'root'
})
export class DeclareService {
  constructor(private http: HttpClient) {
  }

  declare(declareRequest: DeclareRequest): Observable<DeclareRequest> {
    return this.http.post<DeclareRequest>('http://localhost:8082/v1/declare', declareRequest);
  }

  findAccountByPhone(phone: string): Observable<any> {

    const params = new HttpParams()
      .set('phone', phone);
    return this.http.post(`http://localhost:8082/v1/declare/findAccountByPhone`, null, {params});
  }


}
