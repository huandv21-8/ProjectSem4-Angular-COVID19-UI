import {AddressModel} from './address-model';

export interface PeopleModel {
  idPeople?: number;
  name: string;
  age: number;
  gender: boolean;
  phone: string;
  idAddress?: AddressModel;
  schedule: string;
  created_at?: Date;

}
