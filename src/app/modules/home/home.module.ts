import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './pages/home.component';
import { HomeRoutingModule } from './home.routing';
import { CarouselModule } from 'ngx-bootstrap/carousel'
import { TypeaheadModule } from 'ngx-bootstrap/typeahead';
@NgModule({
  imports: [
    CommonModule,
    HomeRoutingModule,
    CarouselModule,
    TypeaheadModule,
    FormsModule
  ],
  declarations: [
    HomeComponent
  ]
})
export class HomeModule { }
