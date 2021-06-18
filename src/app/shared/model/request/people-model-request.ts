export interface PeopleModelRequest {   // dùng để create people
  idPeople?: number;
  name: string;
  age: number;
  gender: boolean;
  phone: string;
  idProvince?: number;
  idDistrict?: number;
  idCommune?: number;
  schedule: string;  // lich trinh
  status: string;
  type?: boolean;
  idSourced?: number;
}
