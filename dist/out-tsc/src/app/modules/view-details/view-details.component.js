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
var ViewDetailsComponent = /** @class */ (function () {
    function ViewDetailsComponent() {
        this.title = 'Lorem Ipsum';
        this.details = 'Lorem Ipsum Lorem Ipsum Lorem Ipsum';
        this.openingHours = [
            { 'day': 'Monday', 'time': '9:00AM - 6PM' },
            { 'day': 'Tuesday', 'time': '9:00AM - 6PM' },
        ];
    }
    ViewDetailsComponent.prototype.ngOnInit = function () {
    };
    ViewDetailsComponent = __decorate([
        Component({
            selector: 'app-view-details',
            templateUrl: './view-details.component.html',
            styleUrls: ['./view-details.component.scss']
        }),
        __metadata("design:paramtypes", [])
    ], ViewDetailsComponent);
    return ViewDetailsComponent;
}());
export { ViewDetailsComponent };
//# sourceMappingURL=view-details.component.js.map