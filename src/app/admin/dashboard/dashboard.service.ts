import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {DataTotalCovidByNcov} from '../../shared/model/response/data-total-covid-by-ncov';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {
  constructor(private http: HttpClient) {
  }

  dashboard(timeForm: string): Observable<any> {
    return this.http.get<any>(`http://localhost:8082/v1/statistical/dashboard?timeForm=${timeForm}`);
  }

  staticalTotalPeopleByStatus(): Observable<DataTotalCovidByNcov> {
    return this.http.get<DataTotalCovidByNcov>(`http://localhost:8082/v1/statistical/dataFileJsonNcov`);
  }


}
