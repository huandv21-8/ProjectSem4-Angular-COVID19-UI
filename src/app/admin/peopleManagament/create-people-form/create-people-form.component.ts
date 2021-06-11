import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-create-people-form',
  templateUrl: './create-people-form.component.html',
  styleUrls: ['./create-people-form.component.scss']
})
export class CreatePeopleFormComponent implements OnInit {

  peopleForm: FormGroup;
  // people :
  isCheckForm: boolean;
  stylePeople: string;        // xem là f1 hay bị bệnh
  isLoai: boolean;     // check xem là loại nhập cảnh hay trong nước

  constructor(private toastrService: ToastrService) {
  }

  ngOnInit(): void {
    this.isCheckForm = true;
    this.stylePeople = 'sick';
    this.isLoai = true;
    this.styleForm();
  }

  createPerson() {
    console.log(this.peopleForm.value);
    console.log(this.stylePeople);


  }

  styleForm() {
    if (this.isCheckForm) {
      this.peopleForm = new FormGroup({
        name: new FormControl('', [Validators.required]),
        age: new FormControl('', [Validators.required]),
        gender: new FormControl(true, [Validators.required]),
        phone: new FormControl('', [Validators.required, Validators.pattern('[0-9 ]{10}')]),
        province: new FormControl(1, [Validators.required]),
        district: new FormControl(1, [Validators.required]),
        commune: new FormControl(1, [Validators.required]),
        schedule: new FormControl('', [Validators.required]),
        loai: new FormControl(true, [Validators.required]),
        source: new FormControl(1, [Validators.required])
      });

    } else {
      this.peopleForm = new FormGroup({
        name: new FormControl('', [Validators.required]),
        age: new FormControl('', [Validators.required]),
        gender: new FormControl(true, [Validators.required]),
        phone: new FormControl('', [Validators.required, Validators.pattern('[0-9 ]{10}')]),
        province: new FormControl(1, [Validators.required]),
        district: new FormControl(1, [Validators.required]),
        commune: new FormControl(1, [Validators.required]),
        schedule: new FormControl('', [Validators.required]),
        source: new FormControl(1, [Validators.required])
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

}
