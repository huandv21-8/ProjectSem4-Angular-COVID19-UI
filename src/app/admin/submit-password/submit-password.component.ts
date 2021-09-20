import { Component, OnInit } from '@angular/core';
import { Form, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-submit-password',
  templateUrl: './submit-password.component.html',
  styleUrls: ['./submit-password.component.scss']
})
export class SubmitPasswordComponent implements OnInit {
  formCheckPass: FormGroup;
  isCheckPass: boolean = false;

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.setData();
  }

  submitPass(){
    console.log(this.formCheckPass.value.password)
    console.log(this.formCheckPass.value.checkPass)
    
    if(this.formCheckPass.value.password === this.formCheckPass.value.checkPass
       && this.formCheckPass.value.password.length > 0){
         console.log("chay vao day");
         
         this.isCheckPass = true;
         this.router.navigateByUrl('/client');

       }
      
  }

  setData() {
    this.formCheckPass = new FormGroup({
      password: new FormControl(null, [Validators.required]),
      checkPassword: new FormControl(null, [Validators.required]),
    });
  }

}
