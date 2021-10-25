export interface AccountByAllResponse {
  accountId: number;
  name: string | null;
  birthDay: string;
  gender: boolean;
  phone: string;
  cmt: string | null;
  provinceName?: string;
  districtName?: string;
  communeName?: string;
  address: string | null;
  stt?: number;
  ratio?: number;
  dateDeclare?: string;

}
