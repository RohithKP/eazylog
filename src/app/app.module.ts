import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { HomeModule } from './modules/home/home.module';
import { CarouselModule } from 'ngx-bootstrap/carousel'

// angular firebase
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireAuthModule } from 'angularfire2/auth';

import { CoreModule } from './core/core.module';
import { SharedModule } from './shared';
import { TypeaheadModule } from 'ngx-bootstrap/typeahead';
import { SearchModule } from './modules/search/search.module';

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
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HomeModule,
    SearchModule,

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
  bootstrap: [AppComponent]
})
export class AppModule { }
