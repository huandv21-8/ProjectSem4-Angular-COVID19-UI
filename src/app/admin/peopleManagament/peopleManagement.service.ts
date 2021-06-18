import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {PeopleModelRequest} from '../../shared/model/request/people-model-request';
import {PeopleResponseAdmin} from '../../shared/model/response/people-response-admin';
import {PeopleModel} from '../../shared/model/people-model';

@Injectable({
  providedIn: 'root'
})
export class PeopleManagementService {

  constructor(private http: HttpClient) {
  }

  getAllPeopleByStatus(status: string): Observable<Array<PeopleResponseAdmin>> {
    return this.http.get<Array<PeopleResponseAdmin>>(`http://localhost:8082/v1/managementPeople/listPeople?status=${status}`);
  }

  createPeople(inforPeople: PeopleModelRequest): Observable<any> {
    return this.http.post('http://localhost:8082/v1/managementPeople/createPeople', inforPeople);
  }

  getPeopleDetailByStatus(status: string, idPeople: number): Observable<PeopleModel> {
    return this.http.get<PeopleModel>(`http://localhost:8082/v1/managementPeople/peopleDetailByStatus?status=${status}&&idPeople=${idPeople}`);
  }

  deletePeopleById(status: string, idPeople: number): Observable<any> {
    return this.http.delete(`http://localhost:8082/v1/managementPeople/deletePeopleById/${idPeople}?status=${status}`);
  }
}
