import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {DeclareRequest} from '../../shared/model/request/declareRequest';


@Injectable({
  providedIn: 'root'
})
export class DeclareService {
  constructor(private http: HttpClient) {
  }

  declare(declareRequest: DeclareRequest ): Observable<any> {
    return this.http.post('http://localhost:8082/v1/declare', declareRequest);
  }


  findAccountByPhone(phone: string ): Observable<any> {
    return this.http.post('http://localhost:8082/v1/declare/findAccountByPhone', phone);
  }


}
