import {DistrictModel} from './district-model';

export interface XaModel {
  idXa?: number;
  nameCommune: string;
  district?: DistrictModel;
}
