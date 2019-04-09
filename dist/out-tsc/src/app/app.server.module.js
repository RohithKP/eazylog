var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { AppComponent } from './app.component';
import { AppModule } from './app.module';
import { NgModule } from '@angular/core';
import { ServerModule, ServerTransferStateModule } from '@angular/platform-server';
import { ModuleMapLoaderModule } from '@nguniversal/module-map-ngfactory-loader';
import { BrowserModule } from '@angular/platform-browser';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
var AppServerModule = /** @class */ (function () {
    function AppServerModule() {
    }
    AppServerModule = __decorate([
        NgModule({
            bootstrap: [AppComponent],
            imports: [
                BrowserModule.withServerTransition({ appId: 'app-root' }),
                AppModule,
                ServerModule,
                NoopAnimationsModule,
                ModuleMapLoaderModule,
                ServerTransferStateModule,
            ]
        })
    ], AppServerModule);
    return AppServerModule;
}());
export { AppServerModule };
//# sourceMappingURL=app.server.module.js.map