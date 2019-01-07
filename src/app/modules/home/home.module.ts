import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { CategoriesModule } from '@app/modules/categories/categories.module';
import { FeaturedModule } from '@app/modules/featured/featured.module';
import { RecentModule } from '@app/modules/recent/recent.module';
import { HomeComponent } from './pages/home.component';
import { HomeRoutingModule } from './home.routing';
import { CarouselModule } from 'ngx-bootstrap/carousel'
import { TypeaheadModule } from 'ngx-bootstrap/typeahead';
@NgModule({
  imports: [
    CommonModule,
    HomeRoutingModule,
    CategoriesModule,
    FeaturedModule,
    CarouselModule,
    TypeaheadModule,
    FormsModule,
    RecentModule
  ],
  declarations: [
    HomeComponent
  ]
})
export class HomeModule { }
