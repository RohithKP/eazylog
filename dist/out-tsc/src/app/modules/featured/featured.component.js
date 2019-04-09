var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
var FeaturedComponent = /** @class */ (function () {
    function FeaturedComponent() {
    }
    FeaturedComponent.prototype.ngOnInit = function () {
        this.featured = [
            "Test title",
            "Test title",
            "Test title",
            "Test title",
            "Test title",
            "Test title",
        ];
    };
    FeaturedComponent = __decorate([
        Component({
            selector: 'featured',
            templateUrl: './featured.component.html',
            styleUrls: ['./featured.component.scss']
        }),
        __metadata("design:paramtypes", [])
    ], FeaturedComponent);
    return FeaturedComponent;
}());
export { FeaturedComponent };
//# sourceMappingURL=featured.component.js.map