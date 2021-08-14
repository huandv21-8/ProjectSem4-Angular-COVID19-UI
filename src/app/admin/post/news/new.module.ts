import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {ChartsModule} from 'ng2-charts';
import {BsDropdownModule} from 'ngx-bootstrap/dropdown';
import {ButtonsModule} from 'ngx-bootstrap/buttons';
import {CreateNewsComponent} from './create-news/create-news.component';
import {NewRouting} from './new.routing';


@NgModule({
  imports: [
    FormsModule,
    NewRouting,
    ChartsModule,
    BsDropdownModule,
    ButtonsModule.forRoot()
  ],
  declarations: [
    CreateNewsComponent
  ]
})
export class NewModule {
}
