import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.scss']
})
export class ViewComponent implements OnInit {

  private items = []
  private displayMode = 1

  constructor() { }

  setDisplayMode(mode: number) {
    this.displayMode = mode
  }

  ngOnInit() {
    this.items = [
      'Lorem Ipsum',
      'Lorem Ipsum',
      'Lorem Ipsum',
      'Lorem Ipsum',
      'Lorem Ipsum',
      'Lorem Ipsum',
    ]
  }

}
