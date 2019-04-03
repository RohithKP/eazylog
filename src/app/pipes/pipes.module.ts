import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReplaceURL } from './replace-url.pipe';
import { SafeHTMLPipe } from './safe-html.pipe';

@NgModule({
  declarations: [ReplaceURL, SafeHTMLPipe],
  imports: [
    CommonModule,
  ],
  exports: [ReplaceURL, SafeHTMLPipe]

})
export class PipesModule { 
  constructor() {
    console.log('test')
  }
}
