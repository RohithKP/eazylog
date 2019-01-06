import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'featured',
  templateUrl: './featured.component.html',
  styleUrls: ['./featured.component.scss']
})
export class FeaturedComponent implements OnInit {

  private featured

  constructor() { }

  ngOnInit() {
    this.featured = [
      "Test title",
      "Test title",
      "Test title",
      "Test title",
      "Test title",
      "Test title",
    ]
  }


}
