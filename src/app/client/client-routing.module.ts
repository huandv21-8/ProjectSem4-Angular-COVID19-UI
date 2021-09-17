import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {EpidemicEvolutionComponent} from './epidemic-evolution/epidemic-evolution.component';
import {HealthDeclarationComponent} from './health-declaration/health-declaration.component';
import {HomeComponent} from './home/home.component';
import {IndexComponent} from './index/index.component';
import {NewsComponent} from './news/news.component';
import {ConfirmPhoneNumberComponent} from './confirm-phone-number/confirm-phone-number.component';
import {RegisterPhoneNumberComponent} from './register-phone-number/register-phone-number.component';
import {AuthGuardGuard} from '../shared/service/auth-guard.guard';
import {SmsOtpGuardGuard} from '../shared/service/sms-otp-guard.guard';


const routes: Routes = [

  {
    path: '',
    component: IndexComponent,
    children: [
      {
        path: '',
        component: HomeComponent,
      },
      {
        path: 'news',
        component: NewsComponent,
      },
      {
        // canActivate: [SmsOtpGuardGuard],
        path: 'health-declaration',
        component: HealthDeclarationComponent,
      },
      {
        path: 'epidemic-evolution',
        component: EpidemicEvolutionComponent,
      },
      {
        path: 'register-phone-number',
        component: RegisterPhoneNumberComponent,
      },
      {
        path: 'confirm-phone-number',
        component: ConfirmPhoneNumberComponent,
      },
    ],
  }
  // ,
  // {
  //   path: "abc",
  //   component: HomeComponent
  // }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ClientRoutingModule {
}
