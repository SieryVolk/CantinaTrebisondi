import { ViniComponent } from './../vini/vini.component';
import { ViniBianchiComponent } from '../vini/vini-bianchi/vini-bianchi.component';
import { HomeComponent } from './home.component';
import { BaseLayoutComponent } from '../layout/base-layout/base-layout.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ViniRossiComponent } from '../vini/vini-rossi/vini-rossi.component';
import { VinoBiancoComponent } from '../vini/vini-bianchi/vino-bianco/vino-bianco.component';
import { ChiSiamoComponent } from '../chi-siamo/chi-siamo.component';
import { ViniVipComponent } from '../vini/vini-vip/vini-vip.component';
import { SigninComponent } from '../signin/signin.component';
import { SignupComponent } from '../signup/signup.component';

const routes: Routes = [
  { path:'home', component: BaseLayoutComponent, children: [
    {path:'', component: HomeComponent},
    {path:'vini', component:ViniComponent},
    {path:'vini-bianchi', component:ViniBianchiComponent, children: [
      {path: 'vino-bianco', component:VinoBiancoComponent}
    ]},
    {path:'vini-rossi', component:ViniRossiComponent},
    {path:'vini-vip', component:ViniVipComponent},
    {path:'chi-siamo', component:ChiSiamoComponent},
    {path:'signin', component:SigninComponent},
    {path:'signup', component:SignupComponent}
  ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
