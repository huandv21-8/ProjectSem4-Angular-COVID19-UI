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

  deleteAllPeopleById(status: string, listIdPeopleCheckbox: Array<number>): Observable<any> {
    return this.http.post(`http://localhost:8082/v1/managementPeople/deleteAllPeopleByCheckbox?status=${status}`, listIdPeopleCheckbox);
  }

  moveCuredPeopleById(status: string, idChoicePeople: number): Observable<any> {
    return this.http.post(`http://localhost:8082/v1/optionPeople/moveCuredPeopleById?status=${status}`, idChoicePeople);
  }

  moveAllCuredPeopleById(status: string, listIdPeopleCheckbox: Array<number>): Observable<any> {
    return this.http.post(`http://localhost:8082/v1/optionPeople/moveCuredAllPeopleByCheckbox?status=${status}`, listIdPeopleCheckbox);
  }

  moveF1PeopleById(status: string, idChoicePeople: number): Observable<any> {
    return this.http.post(`http://localhost:8082/v1/optionPeople/moveF1PeopleById?status=${status}`, idChoicePeople);
  }

  moveAllF1PeopleById(status: string, listIdPeopleCheckbox: Array<number>): Observable<any> {
    return this.http.post(`http://localhost:8082/v1/optionPeople/moveF1AllPeopleByCheckbox?status=${status}`, listIdPeopleCheckbox);
  }

  moveDiedPeopleById(status: string, idChoicePeople: number): Observable<any> {
    return this.http.post(`http://localhost:8082/v1/optionPeople/moveDiedPeopleById?status=${status}`, idChoicePeople);
  }

  moveAllDiedPeopleById(status: string, listIdPeopleCheckbox: Array<number>): Observable<any> {
    return this.http.post(`http://localhost:8082/v1/optionPeople/moveDiedAllPeopleByCheckbox?status=${status}`, listIdPeopleCheckbox);
  }

  moveSickPeopleById(status: string, idChoicePeople: number): Observable<any> {
    return this.http.post(`http://localhost:8082/v1/optionPeople/moveSickPeopleById?status=${status}`, idChoicePeople);

  }

  moveAllSickPeopleById(status: string, listIdPeopleCheckbox: Array<number>): Observable<any> {
    return this.http.post(`http://localhost:8082/v1/optionPeople/moveSickAllPeopleByCheckbox?status=${status}`, listIdPeopleCheckbox);

  }
}
