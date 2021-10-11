import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {ResetPassService} from '../reset-pass.service';
import {ToastrService} from 'ngx-toastr';
import {CheckEmailResetpassword} from '../../../shared/model/request/checkEmailResetpassword';
import {Router} from '@angular/router';
import {LocalStorageService} from 'ngx-webstorage';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss']
})
export class ResetPasswordComponent implements OnInit {

  formEmail: FormGroup;
  checkEmailResetPassword: CheckEmailResetpassword;

  constructor(private resetPassService: ResetPassService,
              private toastr: ToastrService,
              private router: Router,
              private localStorage: LocalStorageService) {
  }


  ngOnInit(): void {
    this.setFormEmail();
  }

  setFormEmail() {
    this.formEmail = new FormGroup({
      email: new FormControl(null, [Validators.pattern('^\\w+([\\.-]?\\w+)*@\\w+([\\.-]?\\w+)*(\\.\\w{2,3})+$'), Validators.required])
    });
  }

  summitEmail() {
    this.checkEmailResetPassword = {
      email: this.formEmail.get('email').value,
    };
    this.resetPassService.checkEmail(this.checkEmailResetPassword).subscribe(isCheckEmail => {
      if (isCheckEmail) {
        this.resetPassService.sendOtpEmail(this.checkEmailResetPassword.email).subscribe(data => {
          if (data) {
            this.toastr.success('Vui lòng kiểm tra email của bạn !');
          }
        }, error => {
          this.toastr.error('Không gửi được mã');
        });
        this.localStorage.store('email', this.checkEmailResetPassword.email);
        this.router.navigateByUrl('reset-password/confirm-key');
      } else {
        this.toastr.error('Email không tồn tại');
        this.setFormEmail();
      }
    }, err => {
      this.toastr.error('Kiểm tra email bị lỗi');
    });
  }

  checkEmail(): boolean {
    if (this.formEmail.controls.email.errors) {
      if (this.formEmail.controls.email.errors.pattern) {
        return true;
      }
    }
  }
}
