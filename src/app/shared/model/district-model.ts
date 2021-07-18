import {ProvinceModel} from './province-model';

export interface DistrictModel {
  districtId?: number;
  districtName: string;
  type?: string;
  province?: ProvinceModel;
}
