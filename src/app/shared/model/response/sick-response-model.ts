import {PeopleModel} from './people-model';

export interface SickResponseModel {
  id: number;
  people: PeopleModel;
  type: string;
  status: string;
  time: Date;
}
