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
  isCheckForm: boolean = true;

  constructor(private toastrService: ToastrService) {
  }

  ngOnInit(): void {
    this.styleForm();

  }

  createPerson() {
    console.log(this.peopleForm.get('source').value);
  }

  styleForm() {
    if (this.isCheckForm) {
      this.peopleForm = new FormGroup({
        name: new FormControl('', [Validators.required]),
        age: new FormControl('', [Validators.required]),
        gender: new FormControl(true, [Validators.required]),
        phone: new FormControl('', [Validators.required]),
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
        phone: new FormControl('', [Validators.required]),
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
    this.styleForm();
  }

  reset() {
    this.toastrService.success('ahghd');
    this.styleForm();
  }

}
