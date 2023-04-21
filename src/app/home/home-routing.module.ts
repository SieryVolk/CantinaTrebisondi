import { ViniComponent } from './../vini/vini.component';
import { HomeComponent } from './home.component';
import { BaseLayoutComponent } from '../layout/base-layout/base-layout.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path:'home', component: BaseLayoutComponent, children: [
    {path:'', component: HomeComponent},
    {path:'vini', component:ViniComponent}
  ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
