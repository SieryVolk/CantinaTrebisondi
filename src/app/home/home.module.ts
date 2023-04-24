import { ViniComponent } from './../vini/vini.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { ViniBianchiComponent } from '../vini/vini-bianchi/vini-bianchi.component';
import { ViniRossiComponent } from '../vini/vini-rossi/vini-rossi.component';


@NgModule({
  declarations: [
    HomeComponent,
    ViniComponent,
    ViniBianchiComponent,
    ViniRossiComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
