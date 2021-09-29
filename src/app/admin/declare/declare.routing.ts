import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ShowListDeclareComponent} from './show-list-declare/show-list-declare.component';


const routes: Routes = [
  {
    path: '',
    component: ShowListDeclareComponent
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DeclareRouting {
}
