import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {PeopleResponseAdmin} from '../../../shared/model/response/people-response-admin';
import {ActivatedRoute} from '@angular/router';
import {PeopleManagementService} from '../peopleManagement.service';
import {PeopleModel} from '../../../shared/model/people-model';
import {ToastrService} from 'ngx-toastr';
import {ModalDirective} from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-show-list-people',
  templateUrl: './show-list-people.component.html',
  styleUrls: ['./show-list-people.component.scss']
})
export class ShowListPeopleComponent implements OnInit {

  isCollapsed: boolean = true;
  itemsInPage: number = 5;
  listPeople: Array<PeopleResponseAdmin> = [];
  peopleDetail: PeopleModel;
  status: string;
  idChoicePeople: number;
  @ViewChild('DeletePeopleModal') public deletePeopleModal: ModalDirective;


  constructor(private peopleManagementService: PeopleManagementService,
              private activatedRoute: ActivatedRoute,
              private toastrService: ToastrService) {
  }

  ngOnInit(): void {
    this.status = this.activatedRoute.snapshot.params.key;
    this.getAllPeopleByStatus();
    this.peopleDetail = {
      idPeople: 0,
      name: '',
      age: 0,
      gender: true,
      phone: '',
      province: '',
      district: '',
      commune: '',
      schedule: '',
      time: '',
      status: '',
      type: true,
      idSource: 0,
      nameSource: ''
    };
  }

  getAllPeopleByStatus() {
    this.peopleManagementService.getAllPeopleByStatus(this.status).subscribe(data => {
      this.listPeople = data;
    });
  }

  showChoose(value: any) {
    this.itemsInPage = value;
    if (value === '0') {
      this.itemsInPage = this.listPeople.length;
    }
  }

  getPeopleDetail(idPeople: number) {
    this.peopleManagementService.getPeopleDetailByStatus(this.status, idPeople).subscribe(data => {
      console.log(data);
      this.peopleDetail = data;
      // const pipe = new DatePipe('en-US');
      // const time = pipe.transform(data.time, 'mediumTime', 'ICT');
      // const date = pipe.transform(data.time, 'yyyy', 'ICT');

    });
  }


  choicePeople(idPeople: number) {
    this.idChoicePeople = idPeople;
  }

  deletePeople() {
    if (this.idChoicePeople) {
      this.peopleManagementService.deletePeopleById(this.status, this.idChoicePeople).subscribe(data => {
          this.getAllPeopleByStatus();
          this.toastrService.success(data.message);
        },
        error => {
          this.toastrService.error("Lỗi rồi.");
        });
      this.deletePeopleModal.hide();
    }

  }
}
