import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FeaturedComponent } from './featured.component';
import { FeaturedRoutingModule } from './featured.routing';

import { PipesModule } from '../../pipes/pipes.module';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FeaturedRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    PipesModule
  ],
  declarations: [
    FeaturedComponent
  ],
  exports:[
    FeaturedComponent
  ]
})
export class FeaturedModule { }
