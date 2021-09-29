import {Component, OnInit} from '@angular/core';
import {DeclareManagementService} from '../declare-management.service';
import {AccountByAllResponse} from '../../../shared/model/response/accountByAllResponse';

@Component({
  selector: 'app-show-list-declare',
  templateUrl: './show-list-declare.component.html',
  styleUrls: ['./show-list-declare.component.scss']
})
export class ShowListDeclareComponent implements OnInit {
  isCollapsed: boolean = true;
  isCheckedCheckBoxPeople: boolean = false;
  isCheckedAllCheckBoxPeople: boolean = false;
  itemsInPage: number = 5;
  listAccount: Array<AccountByAllResponse> = [];

  constructor(private declareManagementService: DeclareManagementService) {
  }

  ngOnInit(): void {
    this.getAllAccount();
  }


  getAllAccount() {
    this.declareManagementService.getAllAccount().subscribe(data => {
      this.listAccount = data;
      console.log(data);
    });
  }

  checkBoxValue(event) {
    // console.log(event.target.value);

    // if (event.target.name === 'checkBoxAllPeople') {
    //   console.log('trên: ' + event.target.checked);
    //   if (event.target.checked) {
    //     if (this.listIdPeopleCheckbox.length > 0) {
    //       this.listIdPeopleCheckbox.splice(0, this.listIdPeopleCheckbox.length);
    //     }
    //     this.listPeople.forEach(people => {
    //       this.listIdPeopleCheckbox.push(people.idPeople);
    //     });
    //     this.isCheckedCheckBoxPeople = true;
    //   } else {
    //     this.listIdPeopleCheckbox.splice(0, this.listIdPeopleCheckbox.length);
    //     this.isCheckedCheckBoxPeople = false;
    //   }
    //
    // } else {
    //   // console.log('dưới: ' + event.target.checked);
    //   if (event.target.checked) {
    //     this.listIdPeopleCheckbox.push(event.target.value);
    //   } else {
    //     this.listIdPeopleCheckbox.forEach((element, index) => {
    //
    //       // tslint:disable-next-line:triple-equals
    //       if (element == event.target.value) {
    //         this.listIdPeopleCheckbox.splice(index, 1);
    //       }
    //     });
    //   }
    //   // console.log('test');
    //   this.isCheckedAllCheckBoxPeople = false;
    //   // tslint:disable-next-line:triple-equals
    //   if (this.listIdPeopleCheckbox.length == this.listPeople.length) {
    //     // console.log('test');
    //     this.isCheckedAllCheckBoxPeople = true;
    //   }
    //
    //   // console.log(this.isCheckedAllCheckBoxPeople);
    // }
    //
    // // console.log(this.listIdPeopleCheckbox);
  }

  showChoose(value: any) {
    this.itemsInPage = value;
    if (value === '0') {
      // this.itemsInPage = this.listPeople.length;
    }
  }
}
