import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {SickResponseModel} from '../../model/response/sick-response-model';
import {PeopleResponseAdmin} from '../../model/response/people-response-admin';

@Injectable({
  providedIn: 'root'
})
export class SickService {

  constructor(private http: HttpClient) {
  }

  getAllSick(): Observable<Array<PeopleResponseAdmin>> {
    return this.http.get<Array<PeopleResponseAdmin>>('http://localhost:8082/v1/sick');
  }

}
