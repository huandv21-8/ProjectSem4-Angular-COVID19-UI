import {DistrictModel} from './district-model';

export interface XaModel {
  communeId?: number;
  communeName: string;
  type?: string;
  district?: DistrictModel;
}
