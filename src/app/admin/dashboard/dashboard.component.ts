import {Component, OnInit} from '@angular/core';
import {getStyle, hexToRgba} from '@coreui/coreui/dist/js/coreui-utilities';
import {CustomTooltips} from '@coreui/coreui-plugin-chartjs-custom-tooltips';
import {DashboardService} from './dashboard.service';

@Component({
  templateUrl: 'dashboard.component.html'
})
export class DashboardComponent implements OnInit {

  radioModel: string = 'Day';

  constructor(private dashboardService: DashboardService) {
  }


  public mainChartDataSick: Array<any> = [];
  public mainChartDataCured: Array<any> = [];
  public mainChartDataDied: Array<any> = [];

  public mainChartData: Array<any> = [
    {
      data: this.mainChartDataDied,
      label: 'Died'
    },
    {
      data: this.mainChartDataCured,
      label: 'Cured'
    },
    {
      data: this.mainChartDataSick,
      label: 'Sick'
    }
  ];
  /* tslint:disable:max-line-length */
  public mainChartLabels: Array<any> = [];
  /* tslint:enable:max-line-length */
  public mainChartOptions: any = {
    tooltips: {
      enabled: false,
      custom: CustomTooltips,
      intersect: true,
      mode: 'index',
      position: 'nearest',
      callbacks: {
        labelColor: function (tooltipItem, chart) {
          return {backgroundColor: chart.data.datasets[tooltipItem.datasetIndex].borderColor};
        }
      }
    },
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      xAxes: [{
        gridLines: {
          drawOnChartArea: false,
        },
        ticks: {
          callback: function (value: any) {
            return value;
          }
        }
      }],
      yAxes: [{
        ticks: {
          beginAtZero: true,
          maxTicksLimit: 5,
          stepSize: Math.ceil(25 / 15),
          max: 25
        }
      }]
    },
    elements: {
      line: {
        borderWidth: 2
      },
      point: {
        radius: 0,
        hitRadius: 10,
        hoverRadius: 4,
        hoverBorderWidth: 3,
      }
    },
    legend: {
      display: false
    }
  };
  public mainChartColours: Array<any> = [
    { // brandInfo
      backgroundColor: hexToRgba(getStyle('--info'), 10),
      borderColor: getStyle('--info'),
      pointHoverBackgroundColor: '#fff'
    },
    { // brandSuccess
      backgroundColor: 'transparent',
      borderColor: getStyle('--success'),
      pointHoverBackgroundColor: '#fff'
    },
    { // brandDanger
      backgroundColor: 'transparent',
      borderColor: getStyle('--danger'),
      pointHoverBackgroundColor: '#fff',
      borderWidth: 1,
      borderDash: [8, 5]
    }
  ];
  public mainChartLegend = false;
  timeForm: string = 'Day';
  data: {
    [sick: string]: [{ [key: string]: any }]
  };
  staticalTotalPeople: {
    [status: string]: number
  };
  staticalTotalPeopleByCured: number;
  staticalTotalPeopleBySick: number;
  staticalTotalPeopleByDied: number;


  ngOnInit(): void {
    this.dashboard();
    this.staticalTotalPeopleByStatus();
  }

  onStatisticsChange(value: string) {
    this.timeForm = value;
    this.dashboard();
    this.mainChartLabels = [];
    this.mainChartDataCured = [];
    this.mainChartDataSick = [];
    this.mainChartDataDied = [];
  }

  staticalTotalPeopleByStatus() {
    this.dashboardService.staticalTotalPeopleByStatus().subscribe(data => {
        this.staticalTotalPeople = data;
        for (const entry of Object.entries(this.staticalTotalPeople)) {
          if (entry[0] === 'cured') {
            this.staticalTotalPeopleByCured = entry[1];
          } else if (entry[0] === 'sick') {
            this.staticalTotalPeopleBySick = entry[1];
          } else if (entry[0] === 'died') {
            this.staticalTotalPeopleByDied = entry[1];
          }
        }
      },
      error => {
        // console.log(error);
      }
    );
  }

  dashboard() {
    this.dashboardService.dashboard(this.timeForm).subscribe(data => {
        this.data = data;
        for (const entry of Object.entries(this.data)) {
          if (entry[0] === 'sick') {
            for (const entry1 of Object.entries(entry[1])) {
              if (this.timeForm === 'Day') {
                this.mainChartLabels.push(entry1[0].slice(0, 10));
              }
              if (this.timeForm === 'Month') {
                this.mainChartLabels.push(entry1[0].slice(0, 7));
              }
              if (this.timeForm === 'Year') {
                this.mainChartLabels.push(entry1[0].slice(0, 4));
              }
              this.mainChartDataSick.push(entry1[1]);
            }

          }
          if (entry[0] === 'cured') {
            for (const entry1 of Object.entries(entry[1])) {
              this.mainChartDataCured.push(entry1[1]);
            }
          }
          if (entry[0] === 'died') {
            for (const entry1 of Object.entries(entry[1])) {
              this.mainChartDataDied.push(entry1[1]);
            }
          }
        }
      }
    );
  }

}
