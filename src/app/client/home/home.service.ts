import {Observable} from 'rxjs';

import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {CountPeopleByProvince} from '../../shared/model/response/countPeopleByProvince';
import {SituationResponse} from '../../shared/model/response/situationResponse';


@Injectable({
  providedIn: 'root'
})
export class HomeService {
  constructor(private http: HttpClient) {
  }

  countPeopleByStatusAboutProvince(): Observable<Array<CountPeopleByProvince>> {
    return this.http.get<Array<CountPeopleByProvince>>('http://localhost:8082/v1/statistical/countPeopleByStatusAboutProvince');
  }
  listSituation (): Observable<Array<SituationResponse>> {
    return this.http.get<Array<SituationResponse>>('http://localhost:8082/v1/situation/listSituation');
  }

}
