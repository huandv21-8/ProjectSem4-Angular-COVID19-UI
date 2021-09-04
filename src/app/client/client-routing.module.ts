import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { EpidemicEvolutionComponent } from "./epidemic-evolution/epidemic-evolution.component";
import { HealthDeclarationComponent } from "./health-declaration/health-declaration.component";
import { HomeComponent } from "./home/home.component";
import { IndexComponent } from "./index/index.component";
import { NewsComponent } from "./news/news.component";

const routes: Routes = [

  {
    path: "",
    component: IndexComponent,
    children: [
      {
        path: "",
        component: HomeComponent,
      },
      {
        path: "news",
        component: NewsComponent,
      },
      {
        path: "health-declaration",
        component: HealthDeclarationComponent,
      },
      {
        path: "epidemic-evolution",
        component: EpidemicEvolutionComponent,
      },
    ],
  }
  // ,
  // {
  //   path: "abc",
  //   component: HomeComponent
  // }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ClientRoutingModule {}
