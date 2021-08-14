import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CreateNewsComponent} from './create-news/create-news.component';


const routes: Routes = [
  {
    path: '',
    component: CreateNewsComponent,
    data: {
      title: 'Tạo bài tin tức mới'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NewRouting {}
