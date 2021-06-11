import {XaModel} from './xa-model';
import {DistrictModel} from './district-model';
import {ProvinceModel} from './province-model';

export interface AddressModel {
  idAddress?: number;
  province?: ProvinceModel;
  district?: DistrictModel;
  xa?: XaModel;
}
