import {Component, OnInit, ViewChild} from '@angular/core';
import {DeclareManagementService} from '../declare-management.service';
import {AccountByAllResponse} from '../../../shared/model/response/accountByAllResponse';
import {ToastrService} from 'ngx-toastr';
import {ModalDirective} from 'ngx-bootstrap/modal';

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
  listIdAccountCheckbox: Array<number> = [];
  listAccount: Array<AccountByAllResponse> = [];
  optionChoice: string;
  idChoiceAccount: number;
  @ViewChild('OptionAccountModal') public optionAccountModal: ModalDirective;

  constructor(private declareManagementService: DeclareManagementService, private toastrService: ToastrService,) {
  }

  ngOnInit(): void {
    this.getAllAccount();
  }


  getAllAccount() {
    this.declareManagementService.getAllAccount().subscribe(data => {
      this.listAccount = data;
    });
  }

  checkBoxValue(event) {
    if (event.target.name === 'checkBoxAllPeople') {
      if (event.target.checked) {
        if (this.listIdAccountCheckbox.length > 0) {
          this.listIdAccountCheckbox.splice(0, this.listIdAccountCheckbox.length);
        }
        this.listAccount.forEach(account => {
          this.listIdAccountCheckbox.push(account.accountId);
        });
        this.isCheckedCheckBoxPeople = true;
      } else {
        this.listIdAccountCheckbox.splice(0, this.listIdAccountCheckbox.length);
        this.isCheckedCheckBoxPeople = false;
      }
    } else {
      if (event.target.checked) {
        this.listIdAccountCheckbox.push(event.target.value);
      } else {
        this.listIdAccountCheckbox.forEach((element, index) => {

          if (element === event.target.value) {
            this.listIdAccountCheckbox.splice(index, 1);
          }
        });
      }
      this.isCheckedAllCheckBoxPeople = false;
      if (this.listIdAccountCheckbox.length === this.listAccount.length) {
        this.isCheckedAllCheckBoxPeople = true;
      }
    }
  }

  showChoose(value: any) {
    this.itemsInPage = value;
    if (value === '0') {
      // this.itemsInPage = this.listPeople.length;
    }
  }

  setOptionChoice(choice: string, idAccount?: number) {
    this.optionChoice = choice;
    if (idAccount) {
      this.idChoiceAccount = idAccount;
    }
  }

  managementPeople() {
    if (this.idChoiceAccount && this.optionChoice === 'deleteAccount' || this.optionChoice === 'f1Account' || this.optionChoice === 'sickAccount') {
      this.declareManagementService.managementAccountById(this.optionChoice, this.idChoiceAccount).subscribe(data => {
          this.getAllAccount();
          this.toastrService.success('Thành công');
        },
        error => {
          this.toastrService.error('Lỗi rồi.');
        });
      this.optionAccountModal.hide();
    }


    // if (this.idChoiceAccount && this.optionChoice === 'deleteAccount') {
    //   this.declareManagementService.deleteAccountById(this.idChoiceAccount).subscribe(data => {
    //       this.getAllAccount();
    //       this.toastrService.success('Thành công');
    //     },
    //     error => {
    //       this.toastrService.error('Lỗi rồi.');
    //     });
    //   this.optionAccountModal.hide();
    // }
    // if (this.idChoiceAccount && this.optionChoice === 'sickAccount') {
    //   this.declareManagementService.deleteAccountById(this.idChoiceAccount).subscribe(data => {
    //       this.getAllAccount();
    //       this.toastrService.success('Thành công');
    //     },
    //     error => {
    //       this.toastrService.error('Lỗi rồi.');
    //     });
    //   this.optionAccountModal.hide();
    // }
    // if (this.idChoiceAccount && this.optionChoice === 'f1Account') {
    //   this.declareManagementService.deleteAccountById(this.idChoiceAccount).subscribe(data => {
    //       this.getAllAccount();
    //       this.toastrService.success('Thành công');
    //     },
    //     error => {
    //       this.toastrService.error('Lỗi rồi.');
    //     });
    //   this.optionAccountModal.hide();
    // }
    if (this.optionChoice === 'deleteAllAccount' || this.optionChoice === 'f1AllAccount' || this.optionChoice === 'sickAllAccount' && this.listIdAccountCheckbox) {
      this.declareManagementService.managementAllAccountById(this.optionChoice, this.listIdAccountCheckbox).subscribe(data => {
          this.getAllAccount();
          this.toastrService.success('Thành công');
        },
        error => {
          this.toastrService.error('Lỗi rồi.');
        });
      this.optionAccountModal.hide();
    }
  }
}
