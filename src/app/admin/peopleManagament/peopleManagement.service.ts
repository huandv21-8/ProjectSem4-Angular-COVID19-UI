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

  getAllPeopleByStatusAndSearch(status: string, name: string, birthDay: any, province: any, type: boolean): Observable<Array<PeopleResponseAdmin>> {
    // console.log(birthDay);
    // console.log(province);
    // console.log(type);
    return this.http.get<Array<PeopleResponseAdmin>>(`http://localhost:8082/v1/managementPeople/listPeopleSearch?status=${status}&name=${name}&birthDay=${birthDay}&provinceId=${province}&type=${type}`);
  }


  createPeople(inforPeople: PeopleModelRequest): Observable<any> {
    return this.http.post('http://localhost:8082/v1/managementPeople/createPeople', inforPeople);
  }

  getPeopleDetailByStatus(status: string, idStatusByTime: number): Observable<PeopleModel> {
    return this.http.get<PeopleModel>(`http://localhost:8082/v1/managementPeople/peopleDetailByStatus?status=${status}&&idStatusByTime=${idStatusByTime}`);
  }

  deletePeopleById(status: string, idPeople: number): Observable<any> {
    return this.http.delete(`http://localhost:8082/v1/managementPeople/deletePeopleById/${idPeople}?status=${status}`);
  }

  deleteAllPeopleById(status: string, listIdPeopleCheckbox: Array<number>): Observable<any> {
    return this.http.post(`http://localhost:8082/v1/managementPeople/deleteAllPeopleByCheckbox?status=${status}`, listIdPeopleCheckbox);
  }

  movePeopleByStatusAndPeopleId(status: string, idChoicePeople: number): Observable<any> {
    return this.http.post(`http://localhost:8082/v1/optionPeople/movePeopleByStatusAndPeopleId?status=${status}`, idChoicePeople);
  }

  moveAllPeopleByStatusAndPeopleIdAndCheckbox(status: string, listIdPeopleCheckbox: Array<number>): Observable<any> {
    return this.http.post(`http://localhost:8082/v1/optionPeople/moveAllPeopleByStatusAndPeopleIdAndCheckbox?status=${status}`,
      listIdPeopleCheckbox);
  }

}
