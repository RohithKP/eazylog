import { Component, OnInit } from '@angular/core';
import { BusinessService } from "./../../../core/services/business.service";
import { ActivatedRoute } from '@angular/router';

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

  constructor(
    private businessService:BusinessService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.id = this.route.snapshot.params.id
    this.businessService.get(this.id).subscribe( data =>{ 
      this.images = data.gallery
      console.log(this.images)
    })
  }

}
