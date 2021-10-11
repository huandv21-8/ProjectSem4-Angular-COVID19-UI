import {Component, OnInit, ViewChild} from '@angular/core';
import {AccountByAllResponse} from '../../../shared/model/response/accountByAllResponse';
import {ProvinceModel} from '../../../shared/model/province-model';
import {FormControl, FormGroup} from '@angular/forms';
import {ModalDirective} from 'ngx-bootstrap/modal';
import {DeclareManagementService} from '../declare-management.service';
import {ToastrService} from 'ngx-toastr';
import {AddressService} from '../../../shared/service/service/address.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-show-list-account',
  templateUrl: './show-list-account.component.html',
  styleUrls: ['./show-list-account.component.scss']
})
export class ShowListAccountComponent implements OnInit {

  isCollapsed: boolean = true;
  isCheckedCheckBoxPeople: boolean = false;
  isCheckedAllCheckBoxPeople: boolean = false;
  itemsInPage: number = 5;
  listIdAccountCheckbox: Array<number> = [];
  listAccount: Array<AccountByAllResponse> = [];
  listProvince: Array<ProvinceModel> = [];
  optionChoice: string;
  idChoiceAccount: number;
  accountDetail: AccountByAllResponse;
  no: number = 0;
  searchForm: FormGroup;
  @ViewChild('OptionAccountModal') public optionAccountModal: ModalDirective;

  constructor(private declareManagementService: DeclareManagementService,
              private toastrService: ToastrService,
              private addressService: AddressService,
              private router: Router) {
  }

  ngOnInit(): void {
    this.getAllAccount();
    this.setStyleFormSearch();
    this.getAllAddress();
    this.accountDetail = {
      accountId: 0,
      name: '',
      birthDay: '',
      gender: true,
      phone: '',
      cmt: '',
      provinceName: '',
      districtName: '',
      communeName: '',
      address: '',
      stt: 0,
    };
  }

  setStyleFormSearch() {
    this.searchForm = new FormGroup({
      txtName: new FormControl(''),
      txtBirthDay: new FormControl(''),
      txtProvince: new FormControl(''),
      txtPhone: new FormControl(''),
    });
  }


  getAllAccount() {
    this.declareManagementService.getAllAccount().subscribe(data => {
      this.listAccount = data;
      this.listAccount.forEach(item => {
        item.stt = (this.no += 1);
      });
    });
  }

  getAllAddress() {
    this.addressService.getAllProvince().subscribe(data => {
      this.listProvince = data;
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

  managementAccount() {
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
    if (this.optionChoice === 'deleteAllAccount' || this.optionChoice === 'f1AllAccount' || this.optionChoice === 'sickAllAccount'
      && this.listIdAccountCheckbox) {
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

  Search() {
    this.declareManagementService.getAllAccountSearch(this.searchForm.value.txtName,
      this.searchForm.value.txtBirthDay,
      this.searchForm.value.txtProvince,
      this.searchForm.value.txtPhone).subscribe(data => {
      this.listAccount = data;
    });
  }

  getAccountDetail(accountId: number) {
    this.declareManagementService.detailAccount(accountId).subscribe(data => {
      // console.log(data);
      this.accountDetail = data;
    });
  }

  redirectToListDeclare(accountId: number) {
    this.router.navigateByUrl('admin/declare/list?accountId=' + accountId);
  }

  reset() {
    this.setStyleFormSearch();
    this.getAllAccount();
  }
}
