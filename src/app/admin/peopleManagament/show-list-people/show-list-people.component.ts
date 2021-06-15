import {Component, OnInit} from '@angular/core';
import {SickService} from '../../../shared/service/service/sick.service';
import {PeopleResponseAdmin} from '../../../shared/model/response/people-response-admin';

@Component({
  selector: 'app-show-list-people',
  templateUrl: './show-list-people.component.html',
  styleUrls: ['./show-list-people.component.scss']
})
export class ShowListPeopleComponent implements OnInit {

  isCollapsed: boolean = true;
  collection = [];
  itemsInPage: number = 5;
  listSick: Array<PeopleResponseAdmin> = [];

  constructor(private sickService: SickService) {
    for (let i = 1; i <= 100; i++) {
      this.collection.push(`item ${i}`);
    }
  }

  ngOnInit(): void {
    this.sickService.getAllSick().subscribe(sicks => {
      this.listSick = sicks;
    });
  }

  test(value: any) {
    this.itemsInPage = value;
    if (value === '0') {
      this.itemsInPage = this.collection.length;
    }
  }
}
