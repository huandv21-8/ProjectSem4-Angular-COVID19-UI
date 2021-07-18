import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ProvinceModel} from '../../model/province-model';
import {Observable} from 'rxjs';
import {DistrictModel} from '../../model/district-model';
import {XaModel} from '../../model/xa-model';


@Injectable({
  providedIn: 'root'
})
export class AddressService {
  constructor(private http: HttpClient) {
  }

  getAllProvince(): Observable<Array<ProvinceModel>> {
    return this.http.get<Array<ProvinceModel>>('http://localhost:8082/v1/address/allProvince');
  }
  getAllDistricts(): Observable<Array<DistrictModel>>  {
    return this.http.get<Array<DistrictModel>>('http://localhost:8082/v1/address/allDistrict');
  }
  getAllCommune(): Observable<Array<XaModel>> {
    return this.http.get<Array<XaModel>>('http://localhost:8082/v1/address/allCommune');
  }

  getAllDistrictByProvinceId(value: any): Observable<Array<DistrictModel>>  {
    return this.http.get<Array<DistrictModel>>(`http://localhost:8082/v1/address/getAllDistrictByProvinceId/${value}`);
  }

  getAllCommuneByDistrictId(value: any): Observable<Array<XaModel>>  {
    return this.http.get<Array<XaModel>>(`http://localhost:8082/v1/address/getAllCommuneByDistrictId/${value}`);
  }
}
