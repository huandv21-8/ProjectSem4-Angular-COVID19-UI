import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {ChartsModule} from 'ng2-charts';
import {BsDropdownModule} from 'ngx-bootstrap/dropdown';
import {ButtonsModule} from 'ngx-bootstrap/buttons';
import {CreateNewsComponent} from './create-news/create-news.component';
import {NewRouting} from './new.routing';
import {CKEditorModule} from '@ckeditor/ckeditor5-angular';
import {CommonModule} from '@angular/common';


@NgModule({
    imports: [
        FormsModule,
        NewRouting,
        ChartsModule,
        BsDropdownModule,
        CKEditorModule,
        ButtonsModule.forRoot(),
        ReactiveFormsModule,
        CommonModule
    ],
  declarations: [
    CreateNewsComponent
  ]
})
export class NewModule {
}
