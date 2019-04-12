import 'hammerjs';
import { NgtUniversalModule } from '@ng-toolkit/universal';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
//import { ReplaceURL } from './shared/replace-url.pipe';

import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { HomeModule } from './modules/home/home.module';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { ToastrModule, ToastContainerModule } from 'ngx-toastr';


// angular firebase
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';

import { CoreModule } from './core/core.module';
import { SharedModule } from './shared';
import { TypeaheadModule } from 'ngx-bootstrap/typeahead';
import { SearchModule } from './modules/search/search.module';
import { ViewDetailsModule } from './modules/view-details/view-details.module';
import { RegisterModule } from './modules/register/register.module';
import { ContactModule } from './modules/contact/contact.module';
import { DashboardModule } from './modules/dashboard/dashboard.module';

export const firebaseConfig = {
  apiKey: "AIzaSyBM3HS29Pjt9cCzsvEHevwvVjw5lctbrpA",
  authDomain: "wordpow2018.firebaseapp.com",
  databaseURL: "https://wordpow2018.firebaseio.com",
  projectId: "wordpow2018",
  storageBucket: "wordpow2018.appspot.com",
  messagingSenderId: "608508645739"
};

@NgModule({
  declarations: [
    AppComponent,
    //ReplaceURL
    ],
  imports: [
    CommonModule,
    NgtUniversalModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HomeModule,
    SearchModule,
    ViewDetailsModule,
    RegisterModule,
    ContactModule,
    DashboardModule,


    // core & shared
    CoreModule.forRoot(),
    SharedModule,

    BsDropdownModule.forRoot(),
    CarouselModule,
    InfiniteScrollModule,
    MatProgressBarModule,
    ToastrModule.forRoot({
      timeOut: 10000,
    }),
    ToastContainerModule,

    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireAuthModule,
    TypeaheadModule.forRoot()
  ],
  exports: [],
  providers: [],
})
export class AppModule { }
