import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';

import { SearchComponent } from './search.component';
import { SearchRoutingModule } from './search-routing.module';
import { CategoriesComponent } from './categories/categories.component';
import { ViewComponent } from './view/view.component';

@NgModule({
  imports: [
    CommonModule,
    SearchRoutingModule,
    RouterModule,
    InfiniteScrollModule
  ],
  declarations: [
    SearchComponent,
    CategoriesComponent,
    ViewComponent
  ]
})
export class SearchModule { }
