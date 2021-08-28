import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CreateSituationComponent} from './create-situation/create-situation.component';


const routes: Routes = [
  {
    path: '',
    component: CreateSituationComponent,
    data: {
      title: 'Tạo bài tin tức mới'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SituationRouting {}
