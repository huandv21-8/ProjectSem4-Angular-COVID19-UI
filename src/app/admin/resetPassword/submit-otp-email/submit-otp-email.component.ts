import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {OtpEmail} from '../../../shared/model/request/checkEmailResetpassword';
import {ResetPassService} from '../reset-pass.service';
import {ToastrService} from 'ngx-toastr';
import {Router} from '@angular/router';
import {LocalStorageService} from 'ngx-webstorage';

@Component({
  selector: 'app-submit-otp-email',
  templateUrl: './submit-otp-email.component.html',
  styleUrls: ['./submit-otp-email.component.scss']
})
export class SubmitOtpEmailComponent implements OnInit {
  formOtp: FormGroup;
  otpEmail: OtpEmail;

  constructor(private resetPassService: ResetPassService,
              private toastr: ToastrService,
              private router: Router,
              private localStorage: LocalStorageService ) {
  }

  ngOnInit(): void {
    this.setFormOtp();
  }

  setFormOtp() {
    this.formOtp = new FormGroup({
      otp: new FormControl(null, [Validators.pattern('[0-9 ]{6}'), Validators.required])
    });
  }

  summitOtp() {
    this.otpEmail = {
      otp: this.formOtp.get('otp').value,
    };
    this.resetPassService.verifyOtpEmail(this.otpEmail).subscribe(isOtpEmail => {
      if (this.localStorage.retrieve('isCheckVerifyOtpEmail')) {
        this.toastr.success('Xác thực thành công');
        this.router.navigateByUrl('reset-password/change-password');
      } else {
        this.toastr.error('Mã không đúng');
        this.setFormOtp();
      }
    }, err => {
      this.toastr.error('Xác thực mã bị lỗi');
    });

  }

  checkOtp(): boolean {
    if (this.formOtp.controls.otp.errors) {
      if (this.formOtp.controls.otp.errors.pattern) {
        return true;
      }
    }
  }
}
