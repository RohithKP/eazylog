import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeComponent } from './pages/home.component';
import { HomeRoutingModule } from './home.routing';
import { CarouselModule } from 'ngx-bootstrap/carousel'

@NgModule({
  imports: [
    CommonModule,
    HomeRoutingModule,
    CarouselModule
  ],
  declarations: [
    HomeComponent
  ]
})
export class HomeModule { }
