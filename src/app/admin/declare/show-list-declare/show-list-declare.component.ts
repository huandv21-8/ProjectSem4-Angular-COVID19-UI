import {Component, OnInit, ViewChild} from '@angular/core';
import {DeclareManagementService} from '../declare-management.service';
import {ToastrService} from 'ngx-toastr';
import {ModalDirective} from 'ngx-bootstrap/modal';
import {FormControl, FormGroup} from '@angular/forms';
import {ProvinceModel} from '../../../shared/model/province-model';
import {AddressService} from '../../../shared/service/service/address.service';
import {ActivatedRoute} from '@angular/router';
import {DeclareResponse} from '../../../shared/model/response/declareResponse';
import {DeclareRequest} from '../../../shared/model/request/declareRequest';

@Component({
  selector: 'app-show-list-declare',
  templateUrl: './show-list-declare.component.html',
  styleUrls: ['./show-list-declare.component.scss']
})
export class ShowListDeclareComponent implements OnInit {
  isCollapsed: boolean = true;

  itemsInPage: number = 5;
  listIdAccountCheckbox: Array<number> = [];
  listDeclare: Array<DeclareResponse> = [];
  listProvince: Array<ProvinceModel> = [];
  declareRequest: DeclareRequest;
  no: number = 0;
  searchForm: FormGroup;
  nameAccount: string;
  accountId: number;
  orderByDate: boolean;
  @ViewChild('OptionAccountModal') public optionAccountModal: ModalDirective;

  constructor(private declareManagementService: DeclareManagementService,
              private toastrService: ToastrService,
              private addressService: AddressService,
              private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.activatedRoute.queryParams.subscribe(params => {
      this.accountId = params['accountId'];
    });
    this.orderByDate = true;
    this.getAllDeclareByAccountId(this.accountId, 'ASC');

    this.setStyleFormSearch();
    this.getAllAddress();
    this.setDeclareDetail();
  }

  setStyleFormSearch() {
    this.searchForm = new FormGroup({
      txtName: new FormControl(''),
      txtBirthDay: new FormControl(''),
      txtProvince: new FormControl(''),
      txtPhone: new FormControl(''),
    });
  }


  getAllDeclareByAccountId(accountId: number, orderByDate: string) {
    this.declareManagementService.getAllDeclareByAccountId(accountId, orderByDate).subscribe(data => {
      this.listDeclare = data;
      if (this.listDeclare.length > 0) {
        this.nameAccount = this.listDeclare[0].name;
        this.listDeclare.forEach(item => {
          item.stt = (this.no += 1);
        });
      }
    });
  }

  sort() {
    this.orderByDate = !this.orderByDate;
    this.no = 0;
    if (this.orderByDate) {
      this.getAllDeclareByAccountId(this.accountId, 'ASC');
    } else {
      this.getAllDeclareByAccountId(this.accountId, 'DESC');
    }
  }

  getAllAddress() {
    this.addressService.getAllProvince().subscribe(data => {
      this.listProvince = data;
    });
  }

  setDeclareDetail() {
    this.declareRequest = {
      name: '',
      birthDay: '',
      cmt: '',
      gender: true,
      phone: '',
      provinceName: '',
      districtName: '',
      communeName: '',
      address: '',
      updatedAt: '',
      exposureToF0: false,
      comeBackFromEpidemicArea: false,
      contactWithPeopleReturningFromEpidemicAreas: false,
      fever: false,
      cough: false,
      shortnessOfBreath: false,
      pneumonia: false,
      soreThroat: false,
      tired: false,
      chronicLiverDisease: false,
      chronicBloodDisease: false,
      chronicLungDisease: false,
      chronicKideyDisease: false,
      heartRelatedDiseaes: false,
      highBloodPressure: false,
      hivOrImmunocompromised: false,
      organTransplantRecipient: false,
      diabetes: false,
      cancer: false,
      pregnant: false,
      travelSchedule: ''
    };
  }


  showChoose(value: any) {
    this.itemsInPage = value;
    if (value === '0') {
    }
  }

  getDeclareDetail(declareId: number) {
    this.declareManagementService.detailDeclare(declareId).subscribe(data => {
      // console.log(data);
      this.declareRequest = data;
      console.log(this.declareRequest);
    });
  }

  checkSymptom(): boolean {
    return (this.declareRequest.fever ||
      this.declareRequest.cough ||
      this.declareRequest.shortnessOfBreath ||
      this.declareRequest.pneumonia ||
      this.declareRequest.soreThroat ||
      this.declareRequest.tired);
  }

  checkSickCurrent(): boolean {
    return (this.declareRequest.chronicLiverDisease ||
      this.declareRequest.chronicBloodDisease ||
      this.declareRequest.shortnessOfBreath ||
      this.declareRequest.chronicLungDisease ||
      this.declareRequest.chronicKideyDisease ||
      this.declareRequest.heartRelatedDiseaes ||
      this.declareRequest.highBloodPressure ||
      this.declareRequest.hivOrImmunocompromised ||
      this.declareRequest.organTransplantRecipient ||
      this.declareRequest.diabetes ||
      this.declareRequest.cancer ||
      this.declareRequest.pregnant);
  }

  checkTravel(): boolean {
    return (this.declareRequest.exposureToF0 ||
      this.declareRequest.comeBackFromEpidemicArea ||
      this.declareRequest.contactWithPeopleReturningFromEpidemicAreas);
  }

}
