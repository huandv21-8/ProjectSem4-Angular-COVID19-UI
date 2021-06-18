import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {NgModule} from '@angular/core';
import {PeopleManagamentRoutingModule} from './peopleManagament-routing.module';
import { CreatePeopleFormComponent } from './create-people-form/create-people-form.component';
import { ShowListPeopleComponent } from './show-list-people/show-list-people.component';
import {NgxPaginationModule} from 'ngx-pagination';
import {CollapseModule} from 'ngx-bootstrap/collapse';
import {TooltipModule} from 'ngx-bootstrap/tooltip';
import {BsDropdownModule} from 'ngx-bootstrap/dropdown';
import {ModalModule} from 'ngx-bootstrap/modal';


// Angular

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        PeopleManagamentRoutingModule,
        ReactiveFormsModule,
        NgxPaginationModule,
        CollapseModule,
        TooltipModule,
        BsDropdownModule,
        ModalModule
    ],
  declarations: [
    CreatePeopleFormComponent,
    ShowListPeopleComponent
  ]
})
export class PeopleManagamentModule {
}

