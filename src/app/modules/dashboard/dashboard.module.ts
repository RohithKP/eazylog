import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; 

import { DashboardComponent } from './dashboard.component';
import { DashboardRoutingModule } from './dashboard.routing';
import { EditProfileComponent } from './edit-profile/edit-profile.component';

@NgModule({
  declarations: [DashboardComponent, EditProfileComponent],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class DashboardModule { }
 