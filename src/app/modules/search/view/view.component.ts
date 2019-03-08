import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.scss']
})
export class ViewComponent implements OnInit {

  public items = []
  public tempItems = []
  public displayMode = 1

  constructor() { }

  setDisplayMode(mode: number) {
    this.displayMode = mode
  }

  onScrollDown() {
    if( this.tempItems.length < this.items.length) {
      let length = this.tempItems.length
      for( let i=length; i<=length+6; i++) {
        this.tempItems.push(this.items[i])
      }
    }
  }

  ngOnInit() {
    for( let i=0; i<30; i++) {
      this.items.push('Lorem Ipsum')
    }
    this.tempItems = this.items.slice(0, 6);
    console.log(this.tempItems)
  }

}
