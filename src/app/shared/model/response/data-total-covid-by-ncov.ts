export interface DataTotalCovidByNcov {
  total: Total;
  today: Total;
  overview: Array<Overview>;
  locations: Array<Locations>;
}

interface Total {
  internal: CommonTotal;
  world: CommonTotal;
}
 interface CommonTotal {
  death: number;
  treating: number;
  cases: number;
  recovered: number;
}

interface Overview {
  date: string;
  death: number;
  treating: number;
  cases: number;
  recovered: number;
  avgCases7day: number;
  avgRecovered7day: number;
  avgDeath7day: number;
}


export interface Locations {
  name: string;
  death: number;
  treating: number;
  cases: number;
  recovered: number;
  casesToday: number;
}

