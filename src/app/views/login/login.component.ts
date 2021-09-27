import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {ToastrService} from 'ngx-toastr';
import {LoginRequest} from '../../shared/model/request/loginRequest';
import {AuthService} from '../../shared/service/service/auth.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: 'login.component.html'
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  loginRequest: LoginRequest;
  isCheckEmail: boolean;
  isCheckPassword: boolean;
  isCheckLogin: boolean = false;

  constructor(private authService: AuthService, private router: Router, private toastr: ToastrService) {
  }

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.minLength(6)]),
    });
  }

  login() {
    this.loginRequest = {
      email: this.loginForm.get('email').value,
      password: this.loginForm.get('password').value
    };
    this.authService.login(this.loginRequest).subscribe(() => {
      this.toastr.success('Đăng nhập thành công');
      this.router.navigateByUrl('admin/people-management/listPeople');
    }, (error) => {
      this.isCheckLogin = true;
      this.toastr.error('Đăng nhập thất bại');
    });
  }

  checkEmail() {
    if (this.loginForm.get('email').value) {
      this.isCheckEmail = true;
    } else {
      this.isCheckEmail = false;
    }
  }

  checkPassword() {
    const password = this.loginForm.get('password').value;
    if (password && password.length >= 6) {
      this.isCheckPassword = true;
    } else {
      this.isCheckPassword = false;
    }
  }

  resetPass() {
    this.router.navigateByUrl('reset-password');
  }
}
