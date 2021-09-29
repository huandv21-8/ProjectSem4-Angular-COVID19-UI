import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {ChartsModule} from 'ng2-charts';
import {BsDropdownModule} from 'ngx-bootstrap/dropdown';
import {ButtonsModule} from 'ngx-bootstrap/buttons';
import {CKEditorModule} from '@ckeditor/ckeditor5-angular';
import {DeclareRouting} from './declare.routing';
import {ShowListDeclareComponent} from './show-list-declare/show-list-declare.component';
import {CommonModule} from '@angular/common';
import {CollapseModule} from 'ngx-bootstrap/collapse';
import {TooltipModule} from 'ngx-bootstrap/tooltip';
import {ModalModule} from 'ngx-bootstrap/modal';
import {NgxPaginationModule} from 'ngx-pagination';


@NgModule({
  imports: [
    FormsModule,
    DeclareRouting,
    ChartsModule,
    BsDropdownModule,
    ButtonsModule.forRoot(),
    ReactiveFormsModule,
    CKEditorModule,
    CommonModule,
    CollapseModule,
    TooltipModule,
    ModalModule,
    NgxPaginationModule
  ],
  declarations: [
    ShowListDeclareComponent
  ]
})
export class DeclareModule {
}
