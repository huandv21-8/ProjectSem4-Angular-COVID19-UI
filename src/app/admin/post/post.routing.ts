import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';


const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'news',
        loadChildren: () => import('./news/new.module').then(m => m.NewModule)
      },
      {
        path: 'situation',
        loadChildren: () => import('./situasion/situation.module').then(m => m.SituationModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PostRouting {
}
