import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutModule } from './layout/layout.module';
import { GooglePlacesDirective } from './directives/google-places.directive';
import { ImagePreloader } from './directives/image-placeholder.directive';

@NgModule({
    imports: [
        CommonModule,
        LayoutModule
    ],
    declarations: [
        GooglePlacesDirective,
        ImagePreloader
    ],
    exports: [
        CommonModule,
        LayoutModule,
        GooglePlacesDirective,
        ImagePreloader
    ]
})
export class SharedModule { }