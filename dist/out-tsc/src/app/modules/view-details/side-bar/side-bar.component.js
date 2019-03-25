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
var SideBarComponent = /** @class */ (function () {
    function SideBarComponent() {
        this.tags = [
            'lorem Ipsem',
            'lorem Ipsem',
            'lorem Ipsem',
            'lorem Ipsem',
            'lorem Ipsem',
        ];
        this.locations = [
            'lorem Ipsem',
            'lorem Ipsem',
            'lorem Ipsem',
            'lorem Ipsem',
            'lorem Ipsem',
        ];
        this.category = 'Lorem Ipsum';
        this.location = 'Lorem Ipsum';
        this.email = 'Lorem_Ipsum@ipsum.com';
        this.phone = '9999839393';
        this.views = 9999;
    }
    SideBarComponent.prototype.ngOnInit = function () {
    };
    SideBarComponent = __decorate([
        Component({
            selector: 'side-bar',
            templateUrl: './side-bar.component.html',
            styleUrls: ['./side-bar.component.scss']
        }),
        __metadata("design:paramtypes", [])
    ], SideBarComponent);
    return SideBarComponent;
}());
export { SideBarComponent };
//# sourceMappingURL=side-bar.component.js.map