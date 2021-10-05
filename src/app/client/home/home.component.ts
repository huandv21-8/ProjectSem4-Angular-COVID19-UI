import {Component, OnInit} from '@angular/core';
import {HomeService} from './home.service';
import {CountPeopleByProvince} from '../../shared/model/response/countPeopleByProvince';
import {SituationResponse} from '../../shared/model/response/situationResponse';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  listCountPeopleByProvinces: Array<CountPeopleByProvince>;
  listSituation: Array<SituationResponse>;

  constructor(private homeService: HomeService) {
  }

  ngOnInit(): void {
    this.countPeopleByStatusAboutProvince();
    this.getSituation();
  }

  countPeopleByStatusAboutProvince() {
    this.homeService.countPeopleByStatusAboutProvince().subscribe(data => {
      if (data) {
        this.listCountPeopleByProvinces = data;
      }
    }, error => {
    });
  }

  getSituation() {
    this.homeService.listSituation().subscribe(data => {
      if (data) {
        // console.log(this.listSituation);
        // console.log(data);
        this.listSituation = data;
      }
    }, error => {
    });
  }
}
