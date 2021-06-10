import {Component, OnInit} from '@angular/core';
import {SickResponseModel} from '../../../shared/model/response/sick-response-model';
import {SickService} from '../../../shared/service/service/sick.service';

@Component({
  selector: 'app-show-list-people',
  templateUrl: './show-list-people.component.html',
  styleUrls: ['./show-list-people.component.scss']
})
export class ShowListPeopleComponent implements OnInit {

  isCollapsed: boolean = true;
  collection = [];
  itemsInPage: number = 5;
  listSick: Array<SickResponseModel> = [];

  constructor(private sickService: SickService) {
    for (let i = 1; i <= 100; i++) {
      this.collection.push(`item ${i}`);
    }
  }

  ngOnInit(): void {
    this.sickService.getAllSick().subscribe(sicks => {
      this.listSick = sicks;
      console.log(sicks);
    });
  }

  test(value: any) {
    console.log('value: ' + value);
    this.itemsInPage = value;
    if (value === '0') {
      this.itemsInPage = this.collection.length;
      console.log('size: ' + this.itemsInPage);
    }
  }
}
