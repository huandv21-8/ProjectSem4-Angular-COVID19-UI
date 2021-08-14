import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {ChartsModule} from 'ng2-charts';
import {BsDropdownModule} from 'ngx-bootstrap/dropdown';
import {ButtonsModule} from 'ngx-bootstrap/buttons';
import {PostRouting} from './post.routing';


@NgModule({
  imports: [
    FormsModule,
    PostRouting,
    ChartsModule,
    BsDropdownModule,
    ButtonsModule.forRoot()
  ],
  declarations: []
})
export class PostModule {
}
