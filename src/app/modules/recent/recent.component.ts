import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'recent',
  templateUrl: './recent.component.html',
  styleUrls: ['./recent.component.scss']
})
export class RecentComponent implements OnInit {

  public recent

  constructor() { }

  ngOnInit() {
    this.recent = [
      "Test title",
      "Test title",
      "Test title",
      "Test title",
      "Test title",
      "Test title"
    ]
  }

}
