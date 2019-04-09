var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
var routes = [
    {
        path: 'login',
        loadChildren: './modules/login/login.module#LoginModule'
    },
    {
        path: 'home',
        loadChildren: './modules/home/home.module#HomeModule',
        canActivate: []
    },
    {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full'
    },
    {
        path: 'view/category/:name',
        loadChildren: './modules/search/search.module#SearchModule'
    },
    {
        path: 'view/location/:name',
        loadChildren: './modules/search/search.module#SearchModule'
    },
    {
        path: 'view/tag/:name',
        loadChildren: './modules/search/search.module#SearchModule'
    },
    {
        path: 'view-details/:name',
        loadChildren: './modules/view-details/view-details.module#ViewDetailsModule'
    }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        NgModule({
            imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled' })],
            exports: [RouterModule],
            providers: []
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());
export { AppRoutingModule };
//# sourceMappingURL=app-routing.module.js.map