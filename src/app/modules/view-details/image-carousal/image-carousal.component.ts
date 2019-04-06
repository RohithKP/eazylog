import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'image-carousal',
  templateUrl: './image-carousal.component.html',
  styleUrls: ['./image-carousal.component.scss']
})
export class ImageCarousalComponent implements OnInit {

  currentIndex = 0;
  speed = 5000;
  infinite = true;
  direction = 'right';
  directionToggle = true;
  autoplay = true;
  images = [];
  id: number;

  @Input() item: any;

  constructor( ) { }

  ngOnInit() {
    this.images = this.item.gallery;
  }

}
