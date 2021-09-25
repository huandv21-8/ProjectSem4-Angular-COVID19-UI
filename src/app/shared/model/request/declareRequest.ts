export interface DeclareRequest {
  name: string;
  birthDay: any;
  cmt?: string;
  gender: boolean;
  phone?: string;
  idCommune: number;
  address?: string;
  exposureToF0: boolean;
  comeBackFromEpidemicArea: boolean;
  contactWithPeopleReturningFromEpidemicAreas: boolean;
  fever: boolean;
  cough: boolean;
  shortnessOfBreath: boolean;
  pneumonia: boolean;
  soreThroat: boolean;
  tired: boolean;
  chronicLiverDisease: boolean;
  chronicBloodDisease: boolean;
  chronicLungDisease: boolean;
  chronicKideyDisease: boolean;
  heartRelatedDiseaes: boolean;
  highBloodPressure: boolean;
  hivOrImmunocompromised: boolean;
  organTransplantRecipient: boolean;
  diabetes: boolean;
  cancer: boolean;
  pregnant: boolean;
  travelSchedule?: string;
}