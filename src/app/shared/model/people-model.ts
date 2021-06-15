import {AddressModel} from './address-model';
import {ProvinceModel} from './province-model';
import {DistrictModel} from './district-model';
import {XaModel} from './xa-model';

export interface PeopleModel {
  idPeople?: number;
  name: string;
  age: number;
  gender: boolean;
  phone: string;
  province: ProvinceModel;
  district: DistrictModel;
  xa: XaModel;
  schedule: string;
  created_at?: Date;

}
