var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Injectable } from '@angular/core';
import { Router } from "@angular/router";
import { AngularFireAuth } from 'angularfire2/auth';
import { UserService } from '../services/user.service';
var AuthGuard = /** @class */ (function () {
    function AuthGuard(afAuth, userService, router) {
        this.afAuth = afAuth;
        this.userService = userService;
        this.router = router;
    }
    AuthGuard.prototype.canActivate = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.userService.getCurrentUser()
                .then(function (user) {
                _this.router.navigate(['/home']);
                return resolve(false);
            }, function (err) {
                _this.router.navigate(['/login']);
                return resolve(true);
            });
        });
    };
    AuthGuard = __decorate([
        Injectable(),
        __metadata("design:paramtypes", [AngularFireAuth,
            UserService,
            Router])
    ], AuthGuard);
    return AuthGuard;
}());
export { AuthGuard };
//# sourceMappingURL=auth.guard.js.map