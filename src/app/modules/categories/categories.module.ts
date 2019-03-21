import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CategoriesComponent } from './categories.component';
import { CategoriesRoutingModule } from './categories.routing';

import { PipesModule } from '../../pipes/pipes.module';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    CategoriesRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    PipesModule
  ],
  declarations: [
    CategoriesComponent
  ],
  exports:[
    CategoriesComponent
  ]
})
export class CategoriesModule { }
