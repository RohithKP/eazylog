var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxHmCarouselModule } from 'ngx-hm-carousel';
import { AccordionModule } from "ngx-accordion";
import { ViewDetailsComponent } from './view-details.component';
import { ViewDetailsRoutingModule } from './view-details.routing';
import { SideBarComponent } from './side-bar/side-bar.component';
import { ImageCarousalComponent } from './image-carousal/image-carousal.component';
var ViewDetailsModule = /** @class */ (function () {
    function ViewDetailsModule() {
    }
    ViewDetailsModule = __decorate([
        NgModule({
            imports: [
                CommonModule,
                ViewDetailsRoutingModule,
                FormsModule,
                ReactiveFormsModule,
                NgxHmCarouselModule,
                AccordionModule
            ],
            declarations: [
                ViewDetailsComponent,
                SideBarComponent,
                ImageCarousalComponent
            ],
            exports: [
                ViewDetailsComponent
            ]
        })
    ], ViewDetailsModule);
    return ViewDetailsModule;
}());
export { ViewDetailsModule };
//# sourceMappingURL=view-details.module.js.map