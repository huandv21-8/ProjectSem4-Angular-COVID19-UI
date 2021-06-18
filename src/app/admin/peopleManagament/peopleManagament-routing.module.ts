import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CreatePeopleFormComponent} from './create-people-form/create-people-form.component';
import {ShowListPeopleComponent} from './show-list-people/show-list-people.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'people-management'
  },
  {
    path: 'people-management',
    data: {
      title: 'Quản lý bệnh nhân'
    },
    children: [
      {
        path: '',
        redirectTo: 'listPeople'
      },
      {
        path: 'createPeople',
        component: CreatePeopleFormComponent,
        data: {
          title: 'Thêm thông tin'
        }
      }, {
        path: 'listPeople',
        // component: ShowListPeopleComponent,
        data: {
          title: 'Danh sách bệnh nhân'
        },
        children: [
          {
            path: '',
            redirectTo: 'a/sick'
          },
          {
            path: 'a/:key',
            component: ShowListPeopleComponent,
          },
          {
            path: 'b/:key',
            component: ShowListPeopleComponent,
          },
          {
            path: 'c/:key',
            component: ShowListPeopleComponent,
          }
        ]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PeopleManagamentRoutingModule {
}
