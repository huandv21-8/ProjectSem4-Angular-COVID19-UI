import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {ToastrService} from 'ngx-toastr';
import {PeopleModelRequest} from '../../../shared/model/request/people-model-request';
import {PeopleManagementService} from '../peopleManagement.service';
import {AddressService} from '../../../shared/service/service/address.service';
import {ProvinceModel} from '../../../shared/model/province-model';
import {DistrictModel} from '../../../shared/model/district-model';
import {XaModel} from '../../../shared/model/xa-model';

@Component({
  selector: 'app-create-people-form',
  templateUrl: './create-people-form.component.html',
  styleUrls: ['./create-people-form.component.scss']
})
export class CreatePeopleFormComponent implements OnInit {

  peopleForm: FormGroup;
  inforPeople: PeopleModelRequest;
  isCheckForm: boolean;
  stylePeople: string;        // xem là f1 hay bị bệnh
  isLoai: boolean;     // check xem là loại nhập cảnh hay trong nước

  listProvince: Array<ProvinceModel> = [];
  listDistrict: Array<DistrictModel> = [];
  listCommune: Array<XaModel> = [];

  constructor(private toastrService: ToastrService,
              private peopleManagementService: PeopleManagementService,
              private addressService: AddressService) {
  }

  ngOnInit(): void {
    this.getAllAddress();
    this.isCheckForm = true;
    this.stylePeople = 'sick';
    this.isLoai = true;
    this.styleForm();
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

  createPerson() {
    if (this.peopleForm.value.district && this.peopleForm.value.province && this.peopleForm.value.commune) {
      if (this.isCheckForm) {
        this.inforPeople = {
          cmt: this.peopleForm.value.cmt,
          name: this.peopleForm.value.name,
          birthDay: this.peopleForm.value.age,
          gender: this.peopleForm.value.gender,
          phone: this.peopleForm.value.phone,
          idDistrict: this.peopleForm.value.district,
          idProvince: this.peopleForm.value.province,
          idCommune: this.peopleForm.value.commune,
          schedule: this.peopleForm.value.schedule,
          status: this.stylePeople,
          type: this.peopleForm.value.loai,
        };
      } else {
        this.inforPeople = {
          cmt: this.peopleForm.value.cmt,
          name: this.peopleForm.value.name,
          birthDay: this.peopleForm.value.age,
          gender: this.peopleForm.value.gender,
          phone: this.peopleForm.value.phone,
          idDistrict: this.peopleForm.value.district,
          idProvince: this.peopleForm.value.province,
          idCommune: this.peopleForm.value.commune,
          schedule: this.peopleForm.value.schedule,
          status: this.stylePeople,
        };
      }

      this.peopleManagementService.createPeople(this.inforPeople).subscribe((data) => {
        this.toastrService.success(data.message);
        this.reset();
      }, (error) => {
        this.toastrService.error('Sai roi');
      });
    } else {
      this.toastrService.show('Vui lòng chọn địa chỉ');
    }
  }

  styleForm() {
    if (this.isCheckForm) {
      this.peopleForm = new FormGroup({
        name: new FormControl('', [Validators.required]),
        age: new FormControl('', [Validators.required]),
        cmt: new FormControl(''),
        gender: new FormControl(true, [Validators.required]),
        phone: new FormControl('', [Validators.pattern('[0-9 ]{10}'), Validators.required]),
        province: new FormControl(0, [Validators.required]),
        district: new FormControl(0, [Validators.required]),
        commune: new FormControl(0, [Validators.required]),
        schedule: new FormControl(''),
        loai: new FormControl(true, [Validators.required]),
      });

    } else {
      this.peopleForm = new FormGroup({
        name: new FormControl('', [Validators.required]),
        age: new FormControl('', [Validators.required]),
        cmt: new FormControl(''),
        gender: new FormControl(true, [Validators.required]),
        phone: new FormControl('', [Validators.pattern('[0-9 ]{10}'), Validators.required]),
        province: new FormControl(0, [Validators.required]),
        district: new FormControl(0, [Validators.required]),
        commune: new FormControl(0, [Validators.required]),
        schedule: new FormControl(''),
      });
    }
  }

  checkForm() {
    this.isCheckForm = !this.isCheckForm;
    this.stylePeople = this.isCheckForm ? 'sick' : 'f1';
    this.styleForm();
    if (!this.isCheckForm) {
      this.isLoai = true;
    }
  }

  reset() {
    this.styleForm();
  }

  checkLoai() {
    if (this.isCheckForm) {
      if (!this.peopleForm.get('loai').value) {
        this.isLoai = true;
      } else {
        this.isLoai = false;
      }
    } else {
      this.isLoai = true;
    }

  }

  checkPhoneNumber(): boolean {
    if (this.peopleForm.controls.phone.errors) {
      if (this.peopleForm.controls.phone.errors.pattern) {
        return true;
      }
    }
  }

  getAllDistrictByProvinceId(value: any) {
    this.peopleForm.controls.district.setValue(0);
    this.peopleForm.controls.commune.setValue(0);
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
}
