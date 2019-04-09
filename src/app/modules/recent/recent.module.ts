import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RecentComponent } from './recent.component';
import { RecentRoutingModule } from './recent.routing';

import { PipesModule } from '../../pipes/pipes.module';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '@app/shared';

@NgModule({
  imports: [
    CommonModule,
    RecentRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    PipesModule,
    SharedModule
  ],
  declarations: [
    RecentComponent
  ],
  exports:[
    RecentComponent
  ]
})
export class RecentModule { }
