import {Component, OnDestroy, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {LocalStorageService} from 'ngx-webstorage';
import {ToastrService} from 'ngx-toastr';
import {ChangePasswordRequest} from '../../../shared/model/request/checkEmailResetpassword';
import {ResetPassService} from '../reset-pass.service';

@Component({
  selector: 'app-submit-password',
  templateUrl: './submit-password.component.html',
  styleUrls: ['./submit-password.component.scss']
})
export class SubmitPasswordComponent implements OnInit, OnDestroy {
  formCheckPass: FormGroup;
  changePasswordRequest: ChangePasswordRequest;

  constructor(private router: Router,
              private localStorage: LocalStorageService,
              private toastr: ToastrService,
              private resetPassService: ResetPassService) {
  }

  ngOnInit(): void {
    this.setData();
  }

  setData() {
    this.formCheckPass = new FormGroup({
      password: new FormControl(null, [Validators.required, Validators.minLength(6), Validators.maxLength(50)]),
      checkPassword: new FormControl(null, [Validators.required]),
    });
  }


  submitPass() {
    if (this.formCheckPass.value.password === this.formCheckPass.value.checkPassword
      && this.formCheckPass.value.password.length > 0) {

      this.changePasswordRequest = {
        email: this.localStorage.retrieve('email'),
        password: this.formCheckPass.get('password').value,
        checkPassword: this.formCheckPass.get('checkPassword').value
      };
      this.resetPassService.changePass(this.changePasswordRequest).subscribe(item => {
        if (item) {
          this.toastr.success('Đổi mật khẩu thành công');
          this.router.navigateByUrl('/login');
        }
      }, error => {
        this.toastr.error('Đổi mật khẩu không thành công');
      });

    } else {
      this.toastr.error('Nhập lại mật khẩu không đúng');

    }

  }

  validatePassword(): boolean {
    if (this.formCheckPass.controls.password.errors) {
      if (this.formCheckPass.controls.password.errors.pattern) {
        return true;
      }
    }
  }

  ngOnDestroy(): void {
    this.localStorage.clear('email');
    this.localStorage.clear('isCheckVerifyOtpEmail');
  }
}
