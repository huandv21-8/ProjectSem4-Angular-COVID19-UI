import {Component, OnInit} from '@angular/core';
import {HomeService} from './home.service';
import {CountPeopleByProvince} from '../../shared/model/response/countPeopleByProvince';
import {SituationResponse} from '../../shared/model/response/situationResponse';
import {Locations} from '../../shared/model/response/data-total-covid-by-ncov';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  listCountPeopleByProvinces: Array<Locations>;
  listSituation: Array<SituationResponse>;
  totalInternalCase: number;
  totalInternalDeath: number;
  totalInternalCured: number;
  todayInternalCase: number;


  constructor(private homeService: HomeService) {
  }

  ngOnInit(): void {
    this.countPeopleByStatusAboutProvince();
    this.getSituation();
  }

  countPeopleByStatusAboutProvince() {
    this.homeService.countPeopleByStatusAboutProvince().subscribe(data => {
      if (data) {
         this.listCountPeopleByProvinces = data.locations;
         this.todayInternalCase = data.today.internal.cases;
         this.totalInternalCured = data.total.internal.recovered;
         this.totalInternalDeath = data.total.internal.death;
         this.totalInternalCase = data.total.internal.cases;
      }
    }, error => {
    });
  }

  getSituation() {
    this.homeService.listSituation().subscribe(data => {
      if (data) {
        this.listSituation = data;
      }
    }, error => {
    });
  }
}
