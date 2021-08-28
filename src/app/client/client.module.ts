import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import {HomeComponent} from './home/home.component';
import {RouterModule, Routes} from '@angular/router';

import { ClientRoutingModule } from './client-routing.module';

// Angular

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ClientRoutingModule
  ],
  declarations: [
    HomeComponent
  ]
})
export class ClientModule { }

