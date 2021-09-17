import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {
  constructor(private http: HttpClient) {
  }

  dashboard(timeForm: string): Observable<any> {
    return this.http.get<any>(`http://localhost:8082/v1/statistical/dashboard?timeForm=${timeForm}`);
  }

  staticalTotalPeopleByStatus(): Observable<any> {
    return this.http.get<any>('http://localhost:8082/v1/statistical/staticalTotalPeopleByStatus');
  }


}
