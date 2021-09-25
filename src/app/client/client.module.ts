import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {NgModule} from '@angular/core';
import {HomeComponent} from './home/home.component';

import {ClientRoutingModule} from './client-routing.module';
import {NewsComponent} from './news/news.component';
import {HealthDeclarationComponent} from './health-declaration/health-declaration.component';
import {EpidemicEvolutionComponent} from './epidemic-evolution/epidemic-evolution.component';
import {HeaderComponent} from './header/header.component';
import {IndexComponent} from './index/index.component';
import {FooterComponent} from './footer/footer.component';
import {ConfirmPhoneNumberComponent} from './confirm-phone-number/confirm-phone-number.component';
import {RegisterPhoneNumberComponent} from './register-phone-number/register-phone-number.component';
import {NgxPaginationModule} from 'ngx-pagination';


@NgModule({
  declarations: [
    HomeComponent,
    NewsComponent,
    HealthDeclarationComponent,
    EpidemicEvolutionComponent,
    HeaderComponent,
    IndexComponent,
    FooterComponent,
    ConfirmPhoneNumberComponent,
    RegisterPhoneNumberComponent,


  ],
  imports: [
    CommonModule,
    FormsModule,
    ClientRoutingModule,
    ReactiveFormsModule,
    NgxPaginationModule,
  ],

})
export class ClientModule {
}
