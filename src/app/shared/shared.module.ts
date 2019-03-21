import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//import { PipesModule } from './pipes/pipes.module';
import { LayoutModule } from './layout/layout.module';
import { GooglePlacesDirective } from './directives/google-places.directive';

@NgModule({
    imports: [
        CommonModule,
        LayoutModule,
        //PipesModule
    ],
    declarations: [
        GooglePlacesDirective,
    ],
    exports: [
        CommonModule,
        LayoutModule,
        GooglePlacesDirective,
        //PipesModule
    ]
})
export class SharedModule { }