import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReplaceURL } from './replace-url.pipe';

@NgModule({
  declarations: [ReplaceURL],
  imports: [
    CommonModule,
  ],
  exports: [ReplaceURL]

})
export class PipesModule { 
  constructor() {
    console.log('test')
  }
}
