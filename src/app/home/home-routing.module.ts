import { ViniComponent } from './../vini/vini.component';
import { ViniBianchiComponent } from '../vini/vini-bianchi/vini-bianchi.component';
import { HomeComponent } from './home.component';
import { BaseLayoutComponent } from '../layout/base-layout/base-layout.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ViniRossiComponent } from '../vini/vini-rossi/vini-rossi.component';

const routes: Routes = [
  { path:'home', component: BaseLayoutComponent, children: [
    {path:'', component: HomeComponent},
    {path:'vini', component:ViniComponent},
    {path:'vini-bianchi', component:ViniBianchiComponent},
    {path:'vini-rossi', component:ViniRossiComponent}
  ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
