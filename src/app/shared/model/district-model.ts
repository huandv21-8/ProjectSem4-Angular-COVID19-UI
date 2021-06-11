import {ProvinceModel} from './province-model';

export interface DistrictModel {
  idDistrict?: number;
  nameDistrict: string;
  province?: ProvinceModel;
}
