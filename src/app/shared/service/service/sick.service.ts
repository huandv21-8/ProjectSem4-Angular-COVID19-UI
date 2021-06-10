import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {SickResponseModel} from '../../model/response/sick-response-model';

@Injectable({
  providedIn: 'root'
})
export class SickService {

  constructor(private http: HttpClient) {
  }

  getAllSick(): Observable<Array<SickResponseModel>> {
    return this.http.get<Array<SickResponseModel>>('http://localhost:8082/v1/sick');
  }

}
