import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss']
})
export class ResetPasswordComponent implements OnInit {

  formEmail: FormGroup;

  constructor() {
  }


  ngOnInit(): void {
    this.formEmail = new FormGroup({
      email: new FormControl(null, [Validators.pattern('^\\w+([\\.-]?\\w+)*@\\w+([\\.-]?\\w+)*(\\.\\w{2,3})+$'), Validators.required])
    });

  }

  summitEmail() {



  }

  checkEmail(): boolean {
    if (this.formEmail.controls.email.errors) {
      if (this.formEmail.controls.email.errors.pattern) {
        return true;
      }
    }
  }
}
