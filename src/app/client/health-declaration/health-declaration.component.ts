import {Component, OnDestroy, OnInit} from '@angular/core';
import {ToastrService} from 'ngx-toastr';
import {LocalStorageService} from 'ngx-webstorage';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {ProvinceModel} from '../../shared/model/province-model';
import {DistrictModel} from '../../shared/model/district-model';
import {XaModel} from '../../shared/model/xa-model';
import {AddressService} from '../../shared/service/service/address.service';
import {DeclareRequest} from '../../shared/model/request/declareRequest';
import {AccountByPhoneResponse} from '../../shared/model/response/accountByPhoneReponse';
import {DeclareService} from './declare.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-health-declaration',
  templateUrl: './health-declaration.component.html',
  styleUrls: ['./health-declaration.component.scss']
})
export class HealthDeclarationComponent implements OnInit, OnDestroy {
  declareForm: FormGroup;
  declareRequest: DeclareRequest;
  listProvince: Array<ProvinceModel> = [];
  listDistrict: Array<DistrictModel> = [];
  listCommune: Array<XaModel> = [];
  accountByPhone: AccountByPhoneResponse;
  declareResponse: DeclareRequest;

  constructor(private router: Router,
              private toastrService: ToastrService,
              private addressService: AddressService,
              private declareService: DeclareService,
              private localStorage: LocalStorageService) {
  }

  ngOnInit(): void {
    this.getAllAddress();
    this.setValue();
    this.findAccountByPhone();
    this.setDeclareDetail();
  }

  findAccountByPhone() {
    this.declareService.findAccountByPhone(this.localStorage.retrieve('phone')).subscribe(data => {
      if (data) {
        this.accountByPhone = data;
        this.declareForm = new FormGroup({
          name: new FormControl(this.accountByPhone.name, [Validators.required]),
          birthDay: new FormControl(this.accountByPhone.birthDay, [Validators.required]),
          cmt: new FormControl(this.accountByPhone.cmt),
          gender: new FormControl(this.accountByPhone.gender, [Validators.required]),
          phone: new FormControl(this.localStorage.retrieve('phone'), [Validators.pattern('[0-9 ]{10}'), Validators.required]),
          province: new FormControl(null, [Validators.required]),
          district: new FormControl(null, [Validators.required]),
          idCommune: new FormControl(null, [Validators.required]),
          address: new FormControl(this.accountByPhone.address),
          exposureToF0: new FormControl(false, [Validators.required]),
          comeBackFromEpidemicArea: new FormControl(false, [Validators.required]),
          contactWithPeopleReturningFromEpidemicAreas: new FormControl(false, [Validators.required]),
          fever: new FormControl(false, [Validators.required]),
          cough: new FormControl(false, [Validators.required]),
          shortnessOfBreath: new FormControl(false, [Validators.required]),
          pneumonia: new FormControl(false, [Validators.required]),
          soreThroat: new FormControl(false, [Validators.required]),
          tired: new FormControl(false, [Validators.required]),
          chronicLiverDisease: new FormControl(false, [Validators.required]),
          chronicBloodDisease: new FormControl(false, [Validators.required]),
          chronicLungDisease: new FormControl(false, [Validators.required]),
          chronicKideyDisease: new FormControl(false, [Validators.required]),
          heartRelatedDiseaes: new FormControl(false, [Validators.required]),
          highBloodPressure: new FormControl(false, [Validators.required]),
          hivOrImmunocompromised: new FormControl(false, [Validators.required]),
          organTransplantRecipient: new FormControl(false, [Validators.required]),
          diabetes: new FormControl(false, [Validators.required]),
          cancer: new FormControl(false, [Validators.required]),
          pregnant: new FormControl(false, [Validators.required]),
          check: new FormControl(null, [Validators.requiredTrue]),
          travelSchedule: new FormControl(null),
        });
      }
    }, error => {

    });
  }

  setValue() {
    this.declareForm = new FormGroup({
      name: new FormControl(null, [Validators.required]),
      birthDay: new FormControl(null, [Validators.required]),
      cmt: new FormControl(null),
      gender: new FormControl(false, [Validators.required]),
      phone: new FormControl(this.localStorage.retrieve('phone'), [Validators.pattern('[0-9 ]{10}'), Validators.required]),
      province: new FormControl(null, [Validators.required]),
      district: new FormControl(null, [Validators.required]),
      idCommune: new FormControl(null, [Validators.required]),
      address: new FormControl(null),
      exposureToF0: new FormControl(false, [Validators.required]),
      comeBackFromEpidemicArea: new FormControl(false, [Validators.required]),
      contactWithPeopleReturningFromEpidemicAreas: new FormControl(false, [Validators.required]),
      fever: new FormControl(false, [Validators.required]),
      cough: new FormControl(false, [Validators.required]),
      shortnessOfBreath: new FormControl(false, [Validators.required]),
      pneumonia: new FormControl(false, [Validators.required]),
      soreThroat: new FormControl(false, [Validators.required]),
      tired: new FormControl(false, [Validators.required]),
      chronicLiverDisease: new FormControl(false, [Validators.required]),
      chronicBloodDisease: new FormControl(false, [Validators.required]),
      chronicLungDisease: new FormControl(false, [Validators.required]),
      chronicKideyDisease: new FormControl(false, [Validators.required]),
      heartRelatedDiseaes: new FormControl(false, [Validators.required]),
      highBloodPressure: new FormControl(false, [Validators.required]),
      hivOrImmunocompromised: new FormControl(false, [Validators.required]),
      organTransplantRecipient: new FormControl(false, [Validators.required]),
      diabetes: new FormControl(false, [Validators.required]),
      cancer: new FormControl(false, [Validators.required]),
      pregnant: new FormControl(false, [Validators.required]),
      check: new FormControl(null, [Validators.requiredTrue]),
      travelSchedule: new FormControl(null),
    });
  }

  getAllAddress() {

    this.addressService.getAllProvince().subscribe(data => {
      this.listProvince = data;
    });
    this.addressService.getAllDistricts().subscribe(data => {
      this.listDistrict = data;
    });
    this.addressService.getAllCommune().subscribe(data => {
      this.listCommune = data;
    });
  }

  setDeclareDetail() {
    this.declareResponse = {
      name: '',
      birthDay: '',
      cmt: '',
      gender: true,
      phone: '',
      provinceName: '',
      districtName: '',
      communeName: '',
      address: '',
      updateAt: '',
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

  getAllDistrictByProvinceId(value: any) {
    if (value && value !== 0) {
      this.addressService.getAllDistrictByProvinceId(value).subscribe(data => {
        this.listDistrict = data;
      });
    }

  }

  getAllCommuneByDistrictId(value: any) {
    if (value !== 0 && value) {
      this.addressService.getAllCommuneByDistrictId(value).subscribe(data => {
        this.listCommune = data;
      });
    }
  }

  ngOnDestroy(): void {
    this.localStorage.clear('isCheckVerify');
    this.localStorage.clear('phone');
  }

  declare() {
    this.declareRequest = {
      name: this.declareForm.value.name,
      birthDay: this.declareForm.value.birthDay,
      cmt: this.declareForm.value.cmt,
      gender: this.declareForm.value.gender,
      phone: this.declareForm.value.phone,
      idCommune: this.declareForm.value.idCommune,
      address: this.declareForm.value.address,
      exposureToF0: this.declareForm.value.exposureToF0,
      comeBackFromEpidemicArea: this.declareForm.value.comeBackFromEpidemicArea,
      contactWithPeopleReturningFromEpidemicAreas: this.declareForm.value.contactWithPeopleReturningFromEpidemicAreas,
      fever: this.declareForm.value.fever,
      cough: this.declareForm.value.cough,
      shortnessOfBreath: this.declareForm.value.shortnessOfBreath,
      pneumonia: this.declareForm.value.pneumonia,
      soreThroat: this.declareForm.value.soreThroat,
      tired: this.declareForm.value.tired,
      chronicLiverDisease: this.declareForm.value.chronicLiverDisease,
      chronicBloodDisease: this.declareForm.value.chronicBloodDisease,
      chronicLungDisease: this.declareForm.value.chronicLungDisease,
      chronicKideyDisease: this.declareForm.value.chronicKideyDisease,
      heartRelatedDiseaes: this.declareForm.value.heartRelatedDiseaes,
      highBloodPressure: this.declareForm.value.highBloodPressure,
      hivOrImmunocompromised: this.declareForm.value.hivOrImmunocompromised,
      organTransplantRecipient: this.declareForm.value.organTransplantRecipient,
      diabetes: this.declareForm.value.diabetes,
      cancer: this.declareForm.value.cancer,
      pregnant: this.declareForm.value.pregnant,
      travelSchedule: this.declareForm.value.travelSchedule,
    };
    this.declareService.declare(this.declareRequest).subscribe(data => {

      this.declareResponse = data;
      // console.log(this.declareResponse);
      this.toastrService.success('Khai b??o th??nh c??ng');

      this.localStorage.store('declare-detail-qrcode', this.declareResponse);
      this.router.navigateByUrl('/client/declare-detail-qrcode');
    }, error => {
      this.toastrService.error('Sai roi');
    });
  }




}
