import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {ChartsModule} from 'ng2-charts';
import {BsDropdownModule} from 'ngx-bootstrap/dropdown';
import {ButtonsModule} from 'ngx-bootstrap/buttons';
import {CKEditorModule} from '@ckeditor/ckeditor5-angular';
import {ResetPassRouting} from './resetPass.routing';


@NgModule({
  imports: [
    FormsModule,
    ResetPassRouting,
    ChartsModule,
    BsDropdownModule,
    ButtonsModule.forRoot(),
    ReactiveFormsModule,
    CKEditorModule
  ],
  declarations: [
  ]
})
export class ResetPassModule {
}
