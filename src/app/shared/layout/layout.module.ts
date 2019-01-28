import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common"
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
        CommonModule
    ],
    exports: [
        NavComponent,
        FooterComponent
    ],
    providers: [],
})
export class LayoutModule { }