import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import { AngularFirestore } from 'angularfire2/firestore';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  private slides = [];
  private activeSlideIndex = 0;
  public items: Observable<any[]>;

  constructor(db: AngularFirestore) {
    this.slides = [{
      image: `/assets/images/sample _slider.jpg`
    }, {
      image: `/assets/images/sample _slider2.jpg`
    }]
    this.items = db.collection('/items').valueChanges();
  }

  ngOnInit() {

  }

}
