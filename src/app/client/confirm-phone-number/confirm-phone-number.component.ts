import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {PhoneRequest} from '../../shared/model/request/phoneRequest';
import {Router} from '@angular/router';
import {SmsService} from '../../shared/service/service/sms.service';
import {ToastrService} from 'ngx-toastr';
import {LocalStorageService} from 'ngx-webstorage';

@Component({
  selector: 'app-confirm-phone-number',
  templateUrl: './confirm-phone-number.component.html',
  styleUrls: ['./confirm-phone-number.component.scss']
})
export class ConfirmPhoneNumberComponent implements OnInit {

  phoneForm: FormGroup;
  phoneRequest: PhoneRequest;


  constructor(private router: Router,
              private smsService: SmsService,
              private toastrService: ToastrService,
              private localStorage: LocalStorageService) {
  }

  ngOnInit(): void {
    this.phoneForm = new FormGroup({
      phone: new FormControl(null, [Validators.pattern('[0-9 ]{10}')])
    });


  }

  summitPhone() {

    this.phoneRequest = {
      phone: (this.phoneForm.value.phone)
    };
    this.smsService.sms(this.phoneRequest).subscribe(() => {
        this.toastrService.success('Gui ma thanh cong');
        this.localStorage.store('phone', this.phoneForm.value.phone);
        this.router.navigateByUrl('/client/register-phone-number');
      },
      error => {
        this.toastrService.error('Gui ma khong thanh cong');
      });


  }

  checkPhoneNumber(): boolean {
    if (this.phoneForm.controls.phone.errors) {
      if (this.phoneForm.controls.phone.errors.pattern) {
        return true;
      }
    }
  }
}
