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
var ImageCarousalComponent = /** @class */ (function () {
    function ImageCarousalComponent() {
        this.currentIndex = 0;
        this.speed = 5000;
        this.infinite = true;
        this.direction = 'right';
        this.directionToggle = true;
        this.autoplay = true;
        this.avatars = '1234567891234'.split('').map(function (x, i) {
            var num = i;
            // const num = Math.floor(Math.random() * 1000);
            return {
                url: "https://picsum.photos/1200/600/?" + num,
                title: "" + num
            };
        });
    }
    ImageCarousalComponent.prototype.ngOnInit = function () {
    };
    ImageCarousalComponent = __decorate([
        Component({
            selector: 'image-carousal',
            templateUrl: './image-carousal.component.html',
            styleUrls: ['./image-carousal.component.scss']
        }),
        __metadata("design:paramtypes", [])
    ], ImageCarousalComponent);
    return ImageCarousalComponent;
}());
export { ImageCarousalComponent };
//# sourceMappingURL=image-carousal.component.js.map