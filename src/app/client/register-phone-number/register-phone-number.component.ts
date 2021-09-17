import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {SmsService} from '../../shared/service/service/sms.service';
import {ToastrService} from 'ngx-toastr';
import {LocalStorageService} from 'ngx-webstorage';
import {OtpRequest} from '../../shared/model/request/otpRequest';
import {PhoneRequest} from '../../shared/model/request/phoneRequest';

@Component({
  selector: 'app-register-phone-number',
  templateUrl: './register-phone-number.component.html',
  styleUrls: ['./register-phone-number.component.scss']
})
export class RegisterPhoneNumberComponent implements OnInit {

  otpForm: FormGroup;
  otpRequest: OtpRequest;
  phoneRequest: PhoneRequest;

  constructor(private router: Router,
              private smsService: SmsService,
              private toastrService: ToastrService,
              private localStorage: LocalStorageService) {
  }

  ngOnInit(): void {
    this.otpForm = new FormGroup({
      phone: new FormControl(this.localStorage.retrieve('phone'), [Validators.required]),
      otp: new FormControl(null, [Validators.pattern('[0-9 ]{6}'), Validators.required])
    });

  }

  summitOtp() {
    this.otpRequest = {
      otp: this.otpForm.value.otp
    };

    this.smsService.verifyOtp(this.otpRequest).subscribe(data => {
        if (this.localStorage.retrieve('isCheckVerify')) {
          this.toastrService.success('Thanh cong');
          this.router.navigateByUrl('/client/health-declaration');
        } else {
          this.toastrService.error('Sai otp hoac da het han');
          this.otpForm = new FormGroup({
            phone: new FormControl(this.localStorage.retrieve('phone'), [Validators.required]),
            otp: new FormControl(null, [Validators.pattern('[0-9 ]{6}'), Validators.required])
          });
        }
      },
      error => {
        this.toastrService.error('Khong thanh cong');
        this.otpForm = new FormGroup({
          phone: new FormControl(this.localStorage.retrieve('phone'), [Validators.required]),
          otp: new FormControl(null, [Validators.pattern('[0-9 ]{6}'), Validators.required])
        });
      });
  }

  checkOtp(): boolean {
    if (this.otpForm.controls.otp.errors) {
      if (this.otpForm.controls.otp.errors.pattern) {
        return true;
      }
    }
  }


  sendOtp() {

    this.phoneRequest = {
      phone: ('+84' + this.otpForm.value.phone)
    };

    this.smsService.sms(this.phoneRequest).subscribe(() => {
        this.toastrService.success('Gui ma thanh cong');
        this.localStorage.store('phone', this.otpForm.value.phone);
      },
      error => {
        this.toastrService.error('Gui ma khong thanh cong');
      });
  }
}
