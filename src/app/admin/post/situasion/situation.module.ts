import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {ChartsModule} from 'ng2-charts';
import {BsDropdownModule} from 'ngx-bootstrap/dropdown';
import {ButtonsModule} from 'ngx-bootstrap/buttons';
import {CKEditorModule} from '@ckeditor/ckeditor5-angular';
import {CommonModule} from '@angular/common';
import {SituationRouting} from './situation.routing';
import {CreateSituationComponent} from './create-situation/create-situation.component';



@NgModule({
    imports: [
      FormsModule,
      SituationRouting,
      ChartsModule,
      BsDropdownModule,
      CKEditorModule,
      ButtonsModule.forRoot(),
      ReactiveFormsModule,
      CommonModule
    ],
  declarations: [
    CreateSituationComponent
  ]
})
export class SituationModule {
}
