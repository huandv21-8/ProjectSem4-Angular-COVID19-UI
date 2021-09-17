import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {SituationRequest} from '../../../shared/model/request/situationRequest';


@Injectable({
  providedIn: 'root'
})
export class SituationService {
  constructor(private http: HttpClient) {
  }

  createSituation(situationRequest: SituationRequest): Observable<any> {
    return this.http.post('http://localhost:8082/v1/situation/createSituation', situationRequest);
  }


}
