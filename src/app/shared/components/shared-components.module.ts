import { NgModule } from "@angular/core";
import { PlaceAutocompleteComponent } from "./place-autocomplete/place-autocomplete.component";
import { FormsModule } from "@angular/forms";
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [CommonModule, FormsModule],
  declarations: [PlaceAutocompleteComponent],
  exports: [PlaceAutocompleteComponent]
})
export class SharedComponentsModule {}
