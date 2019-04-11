import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";
import { Routes, RouterModule } from '@angular/router';

import { PipesModule } from '../../pipes/pipes.module';
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
        RouterModule,
        PipesModule
    ],
    exports: [
        NavComponent,
        FooterComponent
    ],
    providers: [],
})
export class LayoutModule { }