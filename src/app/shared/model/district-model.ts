import {ProvinceModel} from './province-model';

export interface DistrictModel {
  idDistrict?: number;
  nameDistrict: string;
  type?: string;
  province?: ProvinceModel;
}
