import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ShowListDeclareComponent} from './show-list-declare/show-list-declare.component';
import {ShowListAccountComponent} from './show-list-account/show-list-account.component';


const routes: Routes = [
  {
    path: '',
    component: ShowListAccountComponent,
    data: {
      title: 'Danh sách Account'
    }
  },
  {
    path: 'list',
    component: ShowListDeclareComponent,
    data: {
      title: 'Danh sách khai báo'
    }
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DeclareRouting {
}
