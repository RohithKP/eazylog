import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CategoriesModule } from '@app/modules/categories/categories.module';
import { FeaturedModule } from '@app/modules/featured/featured.module';
import { HomeComponent } from './pages/home.component';
import { HomeRoutingModule } from './home.routing';
import { CarouselModule } from 'ngx-bootstrap/carousel'

@NgModule({
  imports: [
    CommonModule,
    HomeRoutingModule,
    CategoriesModule,
    FeaturedModule,
    CarouselModule
  ],
  declarations: [
    HomeComponent
  ]
})
export class HomeModule { }
