import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SickService {

  constructor(private http: HttpClient) {
  }

  // getAllSick(): Observable<Array<PeopleResponseAdmin>> {
  //   return this.http.get<Array<PeopleResponseAdmin>>('http://localhost:8082/v1/sick');
  // }

}
