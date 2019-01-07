import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RecentComponent } from './recent.component';
import { RecentRoutingModule } from './recent.routing';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    RecentRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [
    RecentComponent
  ],
  exports:[
    RecentComponent
  ]
})
export class RecentModule { }
