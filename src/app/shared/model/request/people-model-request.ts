import {AddressModel} from '../address-model';

export interface PeopleModelRequest {
  idPeople?: number;
  name: string;
  age: number;
  gender: boolean;
  phone: string;
  idAddress?: AddressModel;
  schedule: string;  // lich trinh
  // created_at?: Date;
  status: string;
  type: boolean;
}
