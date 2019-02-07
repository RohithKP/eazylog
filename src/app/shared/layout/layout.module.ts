import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";
import { Routes, RouterModule } from '@angular/router';

import { NavComponent } from './nav/nav.component';
import { FooterComponent } from './footer/footer.component';
import { CollapseModule } from 'ngx-bootstrap/collapse';
@NgModule({
    declarations: [
        NavComponent,
        FooterComponent
    ],
    imports: [
        CollapseModule,
        CommonModule,
        RouterModule
    ],
    exports: [
        NavComponent,
        FooterComponent
    ],
    providers: [],
})
export class LayoutModule { }