import {Component, OnInit} from '@angular/core';
import {SituationResponse} from '../../shared/model/response/situationResponse';
import {HomeService} from '../home/home.service';

@Component({
  selector: 'app-epidemic-evolution',
  templateUrl: './epidemic-evolution.component.html',
  styleUrls: ['./epidemic-evolution.component.scss']
})
export class EpidemicEvolutionComponent implements OnInit {


  listSituation: Array<SituationResponse>;

  constructor(private homeService: HomeService) {
  }

  ngOnInit(): void {
    this.getSituation();
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
