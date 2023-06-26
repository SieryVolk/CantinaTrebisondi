import { ViniComponent } from './../vini/vini.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { ViniBianchiComponent } from '../vini/vini-bianchi/vini-bianchi.component';
import { ViniRossiComponent } from '../vini/vini-rossi/vini-rossi.component';
import { VinoBiancoComponent } from '../vini/vini-bianchi/vino-bianco/vino-bianco.component';
import { ViniVipComponent } from '../vini/vini-vip/vini-vip.component';
import { BrowserModule } from '@angular/platform-browser';
import { SigninComponent } from '../signin/signin.component';
import { SignupComponent } from '../signup/signup.component';


@NgModule({
  declarations: [
    HomeComponent,
    ViniComponent,
    ViniBianchiComponent,
    ViniRossiComponent,
    VinoBiancoComponent,
    ViniVipComponent,
    SigninComponent,
    SignupComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    BrowserModule
  ]
})
export class HomeModule { }
