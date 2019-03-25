var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import 'hammerjs';
import { NgtUniversalModule } from '@ng-toolkit/universal';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { HomeModule } from './modules/home/home.module';
import { CarouselModule } from 'ngx-bootstrap/carousel';
// angular firebase
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared';
import { TypeaheadModule } from 'ngx-bootstrap/typeahead';
import { SearchModule } from './modules/search/search.module';
import { ViewDetailsModule } from './modules/view-details/view-details.module';
import { RegisterComponent } from './modules/register/register.component';
export var firebaseConfig = {
    apiKey: "AIzaSyBM3HS29Pjt9cCzsvEHevwvVjw5lctbrpA",
    authDomain: "wordpow2018.firebaseapp.com",
    databaseURL: "https://wordpow2018.firebaseio.com",
    projectId: "wordpow2018",
    storageBucket: "wordpow2018.appspot.com",
    messagingSenderId: "608508645739"
};
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        NgModule({
            declarations: [
                AppComponent,
                RegisterComponent,
            ],
            imports: [
                CommonModule,
                NgtUniversalModule,
                AppRoutingModule,
                HomeModule,
                SearchModule,
                ViewDetailsModule,
                // core & shared
                CoreModule.forRoot(),
                SharedModule,
                BsDropdownModule.forRoot(),
                CarouselModule,
                AngularFireModule.initializeApp(firebaseConfig),
                AngularFirestoreModule,
                AngularFireAuthModule,
                TypeaheadModule.forRoot()
            ],
            providers: [],
        })
    ], AppModule);
    return AppModule;
}());
export { AppModule };
//# sourceMappingURL=app.module.js.map