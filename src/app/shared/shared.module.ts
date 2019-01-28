import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutModule } from './layout/layout.module';
import { GooglePlacesDirective } from './directives/google-places.directive';

@NgModule({
    imports: [
        CommonModule,
        LayoutModule
    ],
    declarations: [
        GooglePlacesDirective
    ],
    exports: [
        CommonModule,
        LayoutModule,
        GooglePlacesDirective
    ]
})
export class SharedModule { }