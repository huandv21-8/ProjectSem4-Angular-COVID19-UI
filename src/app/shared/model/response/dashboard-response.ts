export interface DashboardResponse {
  sick: [{
    // @ts-ignore
    [key: string]: number
  }];
  cured: [{
    // @ts-ignore
    [key: string]: number
  }];
  died: [{
    // @ts-ignore
    [key: string]: number
  }];


// {
//
//   status: string;
//   value: [
//     {
//       formTime: string;
//       size: number;
//     }
//   ]
// };

// value: {
//   status: string;
//   value: [
//     {
//       formTime: string;
//       size: number;
//     }
//   ]
// };

}
