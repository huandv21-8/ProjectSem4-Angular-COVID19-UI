import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ResetPasswordComponent} from './reset-password/reset-password.component';
import {SubmitOtpEmailComponent} from './submit-otp-email/submit-otp-email.component';
import {SubmitPasswordComponent} from './submit-password/submit-password.component';


const routes: Routes = [
  {
    path: '',
    component: ResetPasswordComponent
  },
  {
    path: 'confirm-key',
    component: SubmitOtpEmailComponent
  },
  {
    path: 'change-password',
    component: SubmitPasswordComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ResetPassRouting {
}
