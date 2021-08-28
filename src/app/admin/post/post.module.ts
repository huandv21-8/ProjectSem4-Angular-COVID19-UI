import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {ChartsModule} from 'ng2-charts';
import {BsDropdownModule} from 'ngx-bootstrap/dropdown';
import {ButtonsModule} from 'ngx-bootstrap/buttons';
import {PostRouting} from './post.routing';
import {CKEditorModule} from '@ckeditor/ckeditor5-angular';


@NgModule({
  imports: [
    FormsModule,
    PostRouting,
    ChartsModule,
    BsDropdownModule,
    ButtonsModule.forRoot(),
    ReactiveFormsModule,
    CKEditorModule
  ],
  declarations: [
  ]
})
export class PostModule {
}
