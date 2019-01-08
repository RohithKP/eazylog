import { Component, OnInit } from '@angular/core';
import {ViewEncapsulation} from '@angular/core';

import { Observable } from 'rxjs/Observable';
import { AngularFirestore } from 'angularfire2/firestore';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class HomeComponent implements OnInit {
  private slides = [];
  private activeSlideIndex = 0;
  private category;
  public items: Observable<any[]>;
  private states: string[];

  constructor(db: AngularFirestore) {
    this.slides = [{
      image: `/assets/images/sample _slider.jpg`
    }, {
      image: `/assets/images/sample _slider2.jpg`
    }]
    this.items = db.collection('/items').valueChanges();
    this.category = '';
    this.states = [
      'Alabama',
      'Alaska',
      'Arizona',
      'Arkansas',
      'California',
      'Colorado',
      'Connecticut',
      'Delaware']
  }

  ngOnInit() {

  }

}
