import {Observable} from 'rxjs';

import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {CountPeopleByProvince} from '../../shared/model/response/countPeopleByProvince';
import {SituationResponse} from '../../shared/model/response/situationResponse';
import {DataTotalCovidByNcov} from '../../shared/model/response/data-total-covid-by-ncov';


@Injectable({
  providedIn: 'root'
})
export class HomeService {
  constructor(private http: HttpClient) {
  }

  countPeopleByStatusAboutProvince(): Observable<DataTotalCovidByNcov> {
    return this.http.get<DataTotalCovidByNcov>('http://localhost:8082/v1/statistical/dataFileJsonNcov');
  }
  listSituation (): Observable<Array<SituationResponse>> {
    return this.http.get<Array<SituationResponse>>('http://localhost:8082/v1/situation/listSituation');
  }

}
