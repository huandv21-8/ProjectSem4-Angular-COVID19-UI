import {Component, OnDestroy, OnInit} from '@angular/core';
import {ToastrService} from 'ngx-toastr';
import {LocalStorageService} from 'ngx-webstorage';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {ProvinceModel} from '../../shared/model/province-model';
import {DistrictModel} from '../../shared/model/district-model';
import {XaModel} from '../../shared/model/xa-model';
import {AddressService} from '../../shared/service/service/address.service';

@Component({
  selector: 'app-health-declaration',
  templateUrl: './health-declaration.component.html',
  styleUrls: ['./health-declaration.component.scss']
})
export class HealthDeclarationComponent implements OnInit, OnDestroy {
  declareForm: FormGroup;
  listProvince: Array<ProvinceModel> = [];
  listDistrict: Array<DistrictModel> = [];
  listCommune: Array<XaModel> = [];

  constructor(private toastrService: ToastrService,
              private addressService: AddressService,
              private localStorage: LocalStorageService) {
  }

  ngOnInit(): void {
    this.getAllAddress();
    this.setValue();
  }

  setValue() {
    this.declareForm = new FormGroup({
      name: new FormControl(null, [Validators.required]),
      birthDay: new FormControl(null, [Validators.required]),
      cmt: new FormControl(null, [Validators.required]),
      gender: new FormControl(true, [Validators.required]),
      phone: new FormControl(null, [Validators.pattern('[0-9 ]{10}'), Validators.required]),
      province: new FormControl(null, [Validators.required]),
      district: new FormControl(null, [Validators.required]),
      commune: new FormControl(null, [Validators.required]),
      address: new FormControl(null, [Validators.required]),
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
      HighBloodPressure: new FormControl(false, [Validators.required]),
      hivOrImmunocompromised: new FormControl(false, [Validators.required]),
      organTransplantRecipient: new FormControl(false, [Validators.required]),
      diabetes: new FormControl(false, [Validators.required]),
      cancer: new FormControl(false, [Validators.required]),
      pregnant: new FormControl(false, [Validators.required]),
      check: new FormControl(null, [Validators.required]),
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

  getAllDistrictByProvinceId(value: any) {
    this.declareForm.controls.district.setValue(0);
    this.declareForm.controls.commune.setValue(0);
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

  }
}
