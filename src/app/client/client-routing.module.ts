import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './home/home.component';

const routes: Routes = [
  {
    path: '',
    data: {
      title: 'home'
    },
    children: [
      {
        path: '',
        redirectTo: 'home'
      },
      {
        path: '',
        component: HomeComponent,
        data: {

          title: 'Buttons'
        }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientRoutingModule {
}
