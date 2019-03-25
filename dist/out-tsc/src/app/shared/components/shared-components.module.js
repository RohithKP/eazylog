var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { NgModule } from "@angular/core";
import { PlaceAutocompleteComponent } from "@app/shared/components/place-autocomplete/place-autocomplete.component";
import { FormsModule } from "@angular/forms";
import { CommonModule } from '@angular/common';
var SharedComponentsModule = /** @class */ (function () {
    function SharedComponentsModule() {
    }
    SharedComponentsModule = __decorate([
        NgModule({
            imports: [CommonModule, FormsModule],
            declarations: [PlaceAutocompleteComponent],
            exports: [PlaceAutocompleteComponent]
        })
    ], SharedComponentsModule);
    return SharedComponentsModule;
}());
export { SharedComponentsModule };
//# sourceMappingURL=shared-components.module.js.map