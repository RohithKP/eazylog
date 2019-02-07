import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxHmCarouselModule } from 'ngx-hm-carousel';

import { ViewDetailsComponent } from './view-details.component';
import { ViewDetailsRoutingModule } from './view-details.routing';
import { SideBarComponent } from './side-bar/side-bar.component';
import { ImageCarousalComponent } from './image-carousal/image-carousal.component';


@NgModule({
  imports: [
    CommonModule,
    ViewDetailsRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgxHmCarouselModule
  ],
  declarations: [
    ViewDetailsComponent,
    SideBarComponent,
    ImageCarousalComponent
  ],
  exports:[
    ViewDetailsComponent
  ]
})
export class ViewDetailsModule { }
