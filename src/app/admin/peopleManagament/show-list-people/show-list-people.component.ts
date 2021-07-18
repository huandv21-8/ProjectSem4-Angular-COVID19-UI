import {Component, OnInit, ViewChild} from '@angular/core';
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
  listIdPeopleCheckbox: Array<number> = [];
  isCheckedCheckBoxPeople: boolean = false;
  isCheckedAllCheckBoxPeople: boolean = false;
  peopleDetail: PeopleModel;
  status: string;
  idChoicePeople: number;
  optionChoice: string;
  @ViewChild('OptionPeopleModal') public optionPeopleModal: ModalDirective;


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
    });
  }

  checkBoxValue(event) {
    // console.log(event.target.value);

    if (event.target.name === 'checkBoxAllPeople') {
      console.log('trên: ' + event.target.checked);
      if (event.target.checked) {
        if (this.listIdPeopleCheckbox.length > 0) {
          this.listIdPeopleCheckbox.splice(0, this.listIdPeopleCheckbox.length);
        }
        this.listPeople.forEach(people => {
          this.listIdPeopleCheckbox.push(people.idPeople);
        });
        this.isCheckedCheckBoxPeople = true;
      } else {
        this.listIdPeopleCheckbox.splice(0, this.listIdPeopleCheckbox.length);
        this.isCheckedCheckBoxPeople = false;
      }

    } else {
      // console.log('dưới: ' + event.target.checked);
      if (event.target.checked) {
        this.listIdPeopleCheckbox.push(event.target.value);
      } else {
        this.listIdPeopleCheckbox.forEach((element, index) => {

          // tslint:disable-next-line:triple-equals
          if (element == event.target.value) {
            this.listIdPeopleCheckbox.splice(index, 1);
          }
        });
      }
      // console.log('test');
      this.isCheckedAllCheckBoxPeople = false;
      // tslint:disable-next-line:triple-equals
      if (this.listIdPeopleCheckbox.length == this.listPeople.length) {
        // console.log('test');
        this.isCheckedAllCheckBoxPeople = true;
      }

      // console.log(this.isCheckedAllCheckBoxPeople);
    }

    // console.log(this.listIdPeopleCheckbox);
  }

  setOptionChoice(choice: string, idPeople?: number) {
    this.optionChoice = choice;
    if (idPeople) {
      this.idChoicePeople = idPeople;
    }
  }

  deletePeople() {
    if (this.idChoicePeople && this.optionChoice === 'deletePeople') {
      this.peopleManagementService.deletePeopleById(this.status, this.idChoicePeople).subscribe(data => {
          this.getAllPeopleByStatus();
          this.toastrService.success('Thành công');
        },
        error => {
          this.toastrService.error('Lỗi rồi.');
        });
      this.optionPeopleModal.hide();
    }
    if (this.optionChoice === 'deleteAllPeople' && this.listIdPeopleCheckbox) {
      this.peopleManagementService.deleteAllPeopleById(this.status, this.listIdPeopleCheckbox).subscribe(data => {
          this.getAllPeopleByStatus();
          this.toastrService.success('Thành công');
        },
        error => {
          this.toastrService.error('Lỗi rồi.');
        });
      this.optionPeopleModal.hide();
    }
  }

  moveCuredPeople() {
    if (this.idChoicePeople && this.optionChoice === 'moveCuredPeople') {
      this.peopleManagementService.moveCuredPeopleById(this.status, this.idChoicePeople).subscribe(data => {
          this.getAllPeopleByStatus();
          this.toastrService.success('Thành công');
        },
        error => {
          this.toastrService.error('Lỗi rồi.');
        });
      this.optionPeopleModal.hide();
    }
    if (this.optionChoice === 'moveCuredAllPeople' && this.listIdPeopleCheckbox) {
      this.peopleManagementService.moveAllCuredPeopleById(this.status, this.listIdPeopleCheckbox).subscribe(data => {
          this.getAllPeopleByStatus();
          this.toastrService.success('Thành công');
        },
        error => {
          this.toastrService.error('Lỗi rồi.');
        });
      this.optionPeopleModal.hide();
    }
  }

  moveF1People() {
    if (this.idChoicePeople && this.optionChoice === 'moveF1People') {
      this.peopleManagementService.moveF1PeopleById(this.status, this.idChoicePeople).subscribe(data => {
          this.getAllPeopleByStatus();
          this.toastrService.success('Thành công');
        },
        error => {
          this.toastrService.error('Lỗi rồi.');
        });
      this.optionPeopleModal.hide();
    }
    if (this.optionChoice === 'moveF1AllPeople' && this.listIdPeopleCheckbox) {
      this.peopleManagementService.moveAllF1PeopleById(this.status, this.listIdPeopleCheckbox).subscribe(data => {
          this.getAllPeopleByStatus();
          this.toastrService.success('Thành công');
        },
        error => {
          this.toastrService.error('Lỗi rồi.');
        });
      this.optionPeopleModal.hide();
    }
  }

  moveDiedPeople() {
    if (this.idChoicePeople && this.optionChoice === 'moveDiedPeople') {
      this.peopleManagementService.moveDiedPeopleById(this.status, this.idChoicePeople).subscribe(data => {
          this.getAllPeopleByStatus();
          this.toastrService.success('Thành công');
        },
        error => {
          this.toastrService.error('Lỗi rồi.');
        });
      this.optionPeopleModal.hide();
    }
    if (this.optionChoice === 'moveDiedAllPeople' && this.listIdPeopleCheckbox) {
      this.peopleManagementService.moveAllDiedPeopleById(this.status, this.listIdPeopleCheckbox).subscribe(data => {
          this.getAllPeopleByStatus();
          this.toastrService.success('Thành công');
        },
        error => {
          this.toastrService.error('Lỗi rồi.');
        });
      this.optionPeopleModal.hide();
    }
  }

  moveSickPeople() {
    if (this.idChoicePeople && this.optionChoice === 'moveSickPeople') {
      this.peopleManagementService.moveSickPeopleById(this.status, this.idChoicePeople).subscribe(data => {
          this.getAllPeopleByStatus();
          this.toastrService.success('Thành công');
        },
        error => {
          this.toastrService.error('Lỗi rồi.');
        });
      this.optionPeopleModal.hide();
    }
    if (this.optionChoice === 'moveSickAllPeople' && this.listIdPeopleCheckbox) {
      this.peopleManagementService.moveAllSickPeopleById(this.status, this.listIdPeopleCheckbox).subscribe(data => {
          this.getAllPeopleByStatus();
          this.toastrService.success('Thành công');
        },
        error => {
          this.toastrService.error('Lỗi rồi.');
        });
      this.optionPeopleModal.hide();
    }
  }
}
