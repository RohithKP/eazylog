import { Component, OnInit } from '@angular/core';

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
  avatars = '1234567891234'.split('').map((x, i) => {
    const num = i;
    // const num = Math.floor(Math.random() * 1000);
    return {
      url: `https://picsum.photos/1200/600/?${num}`,
      title: `${num}`
    };
  });

  constructor() { }

  ngOnInit() {
  }

}
