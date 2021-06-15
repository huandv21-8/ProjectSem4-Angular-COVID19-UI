import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {PeopleModelRequest} from '../../shared/model/request/people-model-request';

@Injectable({
  providedIn: 'root'
})
export class PeopleManagementService {

  constructor(private http: HttpClient) {
  }

  // getAllSick(): Observable<Array<SickResponseModel>> {
  //   return this.http.get<Array<SickResponseModel>>('http://localhost:8082/v1/sick');
  // }

  createPeople(inforPeople: PeopleModelRequest): Observable<any> {
    return this.http.post('http://localhost:8082/v1/managementPeople/createPeople', inforPeople);
  }

}
